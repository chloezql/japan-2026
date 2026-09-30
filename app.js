(() => {
  'use strict';
  const translations = window.TRIP_TRANSLATIONS;
  const languages = {zh: {locale:'zh-CN',name:'中文'}, en: {locale:'en',name:'English'}, ja: {locale:'ja',name:'日本語'}};
  let language = 'zh';
  try { const saved = localStorage.getItem('japan-2026-language'); if(languages[saved]) language = saved; } catch {}
  const translationPattern = new RegExp(Object.keys(translations).filter(k=>k.length>1).sort((a,b)=>b.length-a.length).map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
  function t(value) {
    const s = String(value ?? '');
    if(language === 'zh') return s;
    const column = language === 'en' ? 0 : 1;
    if(translations[s]) return translations[s][column];
    // Japanese address strings may contain city names that also occur in Chinese.
    if(/東京都|京都市|大阪府/.test(s)) return s;
    let match;
    if((match=s.match(/^从(.+)步行导航$/))) return language==='en'?`Walk from ${t(match[1])}`:`${t(match[1])}から徒歩ナビ`;
    if((match=s.match(/^从(.+)步行 (.+)$/))) return language==='en'?`${t(match[2])} walk from ${t(match[1])}`:`${t(match[1])}から徒歩${t(match[2])}`;
    if((match=s.match(/^(.+) · 详情见(下方|右侧)住宿卡片$/))) return language==='en'?`${t(match[1])} · see hotel details ${match[2]==='下方'?'below':'on the right'}`:`${t(match[1])} · ${match[2]==='下方'?'下':'右'}の宿泊カードに詳細`;
    if((match=s.match(/^地点与地图 · (\d+) 处$/))) return language==='en'?`Places and maps · ${match[1]} stops`:`場所・地図 · ${match[1]}か所`;
    return s.replace(translationPattern, key=>translations[key][column]);
  }
  // Keep source text for static nodes so switching repeatedly never translates a translation.
  const originalText = new WeakMap(), originalAttributes = new WeakMap();
  function localize(root) {
    const walker = document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode())) {
      if(node.parentElement.closest('script, style, [lang="ja"]:not(html), [data-no-translate]')) continue;
      if(!originalText.has(node)) originalText.set(node,node.textContent);
      const value=originalText.get(node);
      node.textContent=value.replace(/\S[\s\S]*\S|\S/, text=>t(text));
    }
    root.querySelectorAll('[aria-label], [alt], [data-title]').forEach(element=>{
      if(element.closest('[data-no-translate]')) return;
      if(!originalAttributes.has(element)) originalAttributes.set(element,{});
      const values=originalAttributes.get(element);
      ['aria-label','alt','data-title'].forEach(attribute=>{
        if(!element.hasAttribute(attribute)) return;
        if(!(attribute in values)) values[attribute]=element.getAttribute(attribute);
        element.setAttribute(attribute,t(values[attribute]));
      });
    });
  }
  const trip = window.TRIP;
  const restaurantBookings = trip.days.flatMap(d => d.events.filter(e => e.confirmation));
  const main = document.querySelector('main');
  const nav = document.querySelector('#day-nav');
  const dialog = document.querySelector('#image-dialog');
  let imageTrigger;
  let lastDay = trip.days[1];
  document.querySelector('[data-view="bookings"] span').textContent = trip.flights.length + trip.hotels.length + restaurantBookings.length;
  const escape = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const short = date => `${Number(date.slice(5,7))}/${Number(date.slice(8))}`;
  const weekday = date => new Intl.DateTimeFormat(languages[language].locale,{weekday:'long',timeZone:'Asia/Tokyo'}).format(new Date(`${date}T12:00:00+09:00`));
  const url = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const directions = (a,b,mode='transit') => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
  const link = (href,label,cls='text-link') => `<a class="${cls}" href="${escape(href)}" target="_blank" rel="noopener noreferrer">${escape(label)}<span class="sr-only">（新窗口）</span></a>`;
  const source = id => trip.sources[id] ? link(trip.sources[id].url,trip.sources[id].title) : '';
  const status = s => `<span class="badge ${s==='已预订'?'confirmed':s.includes('待')?'pending':'draft'}">${escape(s)}</span>`;
  const image = (id,title) => `<button class="booking-image" data-image="${escape(id)}" data-title="${escape(title)}"><img src="assets/bookings/${escape(id)}.webp" alt="${escape(title)}，已隐藏个人信息" loading="lazy"><span>展开预订截图</span></button>`;
  const guide = g => g ? `<details class="guide-details"><summary>${escape(g.title)}</summary><button class="booking-image guide-image" data-image-path="${escape(g.path)}" data-title="${escape(g.title)}"><img src="${escape(g.path)}" alt="${escape(g.alt)}" loading="lazy"><span>查看大图</span></button></details>` : '';
  const confirmation = c => c ? `<details class="guide-details"><summary>套餐详情与预约确认</summary>${c.price?`<p>${escape(c.price)}</p>`:''}<p>${escape(c.note)}</p><button class="booking-image guide-image" data-image-path="assets/bookings/${escape(c.image)}.png" data-title="${escape(c.title)}"><img src="assets/bookings/${escape(c.image)}.png" alt="${escape(c.title)}，已隐藏预约编号和姓名" loading="lazy"><span>查看确认截图</span></button></details>` : '';
  const hotelOrigin = 'Mitsui Garden Hotel Nihonbashi Premier Tokyo 東京都中央区日本橋室町3-4-4';
  const placeNote = p => `${p.walk}；${p.hours}；${p.status}`;
  const dayPlaces = day => [...new Map(day.events.flatMap(e=>[
    ...(e.places || (e.place?[e.place]:[])).map(p=>({name:p,query:p,address:p})),
    ...(e.options || [])
  ]).map(p=>[p.query,p])).values()];
  function diningOptions(e) {
    if(!e.options) return '';
    return `<section class="dining-options" aria-label="餐饮候选">${e.options.map(p=>`<details class="dining-option"><summary><span><small>${escape(p.kind)}</small><b>${escape(p.name)}</b><em>从${escape(p.originLabel || '酒店')}步行 ${escape(p.walk)}</em></span></summary><div class="dining-body"><p class="dining-hours">${escape(p.hours)}</p><p>${escape(p.detail)}</p><p class="dining-address" lang="ja">${escape(p.address)}</p><div class="dining-actions">${link(directions(p.origin || hotelOrigin,p.query,'walking'),`从${p.originLabel || '酒店'}步行导航`,'button secondary')}${link(p.mapUrl || url(p.query),'打开店铺地图','button ghost')}</div>${link(p.sourceUrl,p.sourceTitle)}</div></details>`).join('')}</section>`;
  }
  const flight = f => `<div class="flight-card"><div class="card-label">${escape(f.airline)} · ${escape(f.number)} ${status('已预订')}</div><div class="flight-route"><div><strong>${f.depTime}</strong><b>${f.from}</b><span>${f.fromCity} · ${f.depTerminal}</span><small>${short(f.depart)} · ${f.depZone}</small></div><div class="flight-duration"><span>${f.duration}</span><div class="flight-line">✈</div><small>直飞</small></div><div><strong>${f.arrTime}</strong><b>${f.to}</b><span>${f.toCity} · ${f.arrTerminal}</span><small>${short(f.arrive)} · ${f.arrZone}</small></div></div><details class="inner-details"><summary>航班详情与预订截图</summary><div class="detail-body"><p>${escape(f.note)}</p><dl class="info-grid"><div><dt>舱位</dt><dd>${escape(f.cabin)}</dd></div><div><dt>行李</dt><dd>${escape(f.baggage)}</dd></div></dl>${image(f.image,f.title)}</div></details></div>`;
  function hotel(h,compact=false,checkout=false,date=null) {
    const label=checkout?'今日退房':date===h.in?'今日入住':'住宿';
    const body=`<p class="english-name">${escape(h.name)}</p><div class="stay-dates"><div><small>${short(h.in)} 入住</small><strong>${h.checkin}<span>起</span></strong></div><span class="nights">${h.nights} 晚</span><div><small>${short(h.out)} 退房</small><strong>${h.checkout}<span>前</span></strong></div></div><div class="hotel-actions">${link(url(h.name+' '+h.address),'地图导航','button secondary')}${link(h.official,'酒店官网','button ghost')}</div><details class="inner-details"><summary>地址、房型与预订资料</summary><div class="detail-body"><dl class="stacked-info"><dt>给司机看的地址</dt><dd lang="ja">${escape(h.ja)}</dd><dt>英文地址</dt><dd>${escape(h.address)}</dd><dt>房型</dt><dd>${escape(h.room)} · 2 位成人</dd><dt>到达方式</dt><dd>${escape(h.access)}</dd><dt>免费取消期限</dt><dd>${escape(h.cancel)}</dd></dl><p>${escape(h.note)}</p>${source(h.source)}${image(h.image,h.zh)}</div></details>`;
    if(compact) return `<details class="hotel-card compact hotel-collapse" ${date===h.in||date===h.out?'open':''}><summary><span><small>${label} · ${h.city}</small><b>${escape(h.zh)}</b></span></summary><div class="hotel-body">${body}</div></details>`;
    return `<section class="hotel-card"><div class="card-label">${label} · ${h.city} ${status('已预订')}</div><h3>${escape(h.zh)}</h3>${body}</section>`;
  }

  function eventCard(e,i) {
    const places = e.places || (e.place?[e.place]:[]);
    const maps = places.map(p=>link(url(p),p,'place-link')).join('');
    return `<article class="event${e.type==='交通'?' event-transit':''}"><div class="event-time"><span>${escape(e.time)}</span><i>${String(i+1).padStart(2,'0')}</i></div><div class="event-card"><div class="event-top"><span class="event-type">${escape(e.type)}</span>${status(e.status)}</div><h3>${escape(e.title)}</h3><p>${escape(e.detail)}</p>${diningOptions(e)}${(e.guides || (e.guide?[e.guide]:[])).map(guide).join('')}${confirmation(e.confirmation)}${e.steps?`<details class="steps"><summary>展开一步步交通指引</summary><ol>${e.steps.map(s=>`<li>${escape(s)}</li>`).join('')}</ol></details>`:''}${e.origin&&e.place?link(directions(e.origin,e.place,e.travelMode),e.travelMode==='driving'?'查看 Google Maps 行车路线':e.travelMode==='walking'?'查看 Google Maps 步行路线':'查看 Google Maps 公共交通路线','button secondary'):''}${places.length?`<details class="place-details"><summary>地点与地图 ${places.length>1?`· ${places.length} 处`:''}</summary><div class="place-links">${maps}</div></details>`:''}${e.source?`<div class="source-links">${source(e.source)} ${e.extraSource?source(e.extraSource):''}</div>`:''}${e.flight?flight(trip.flights.find(f=>f.id===e.flight)):''}${e.hotel?`<p class="event-hotel">${escape(trip.hotels.find(h=>h.id===e.hotel).zh)} · 详情见${window.innerWidth<1000?'下方':'右侧'}住宿卡片</p>`:''}</div></article>`;
  }
  function dayNav(active) {
    nav.innerHTML = `<div class="nav-heading">10 天的旅行 <span>OCT ’26</span></div>`+trip.days.map((d,i)=>`<a href="#day-${d.date}" class="day-link ${d.date===active?'active':''}" ${d.date===active?'aria-current="date"':''}><span class="nav-date"><b>${short(d.date)}</b><small>${weekday(d.date).replace('星期','周')}</small></span><span class="nav-city"><b>${d.city}</b><small>${d.tags[d.tags.length-1]}</small></span><span class="nav-day">${String(i+1).padStart(2,'0')}</span></a>`).join('')+`<div class="nav-note"><span class="small-dot"></span>机票与 8 晚住宿已预订<br>京丹波晚餐已预订</div>`;
  }
  function dayView(day) {
    const idx=trip.days.indexOf(day), h=trip.hotels.find(h=>h.id===(day.hotel||day.checkoutHotel));
    const pills=day.tags.map(t=>`<span>${escape(t)}</span>`).join('');
    main.innerHTML=`<div class="day-heading"><div><p class="eyebrow">DAY ${String(idx+1).padStart(2,'0')} / ${weekday(day.date)}</p><h1>${escape(day.title)}</h1></div><div class="big-date"><strong>${day.date.slice(8)}</strong><span>OCTOBER</span></div></div><div class="day-tags">${pills}</div>${day.versionConflict?`<details class="version-note"><summary>京都路线版本待确认</summary><p>目前暂用仓库内更新版 Word：10/13 岚山，10/15 宇治 + 奈良。尚待你确认。</p><p>${escape(day.alternative)}</p></details>`:''}<div class="route-strip"><span class="route-label">今日动线</span><div>${day.route.map((p,i)=>`${i?'<span class="route-separator">›</span>':''}<span>${escape(p)}</span>`).join('')}</div></div><div class="day-columns"><div class="timeline"><div class="section-heading"><h2>按这个顺序走</h2></div>${day.events.map(eventCard).join('')}</div><aside class="day-support">${h?hotel(h,true,!!day.checkoutHotel,day.date):`<div class="air-night"><span>✈</span><h3>${idx===0?'今晚在飞机上':'今天结束日本行程'}</h3><p>${idx===0?'10/10 日本时间下午抵达东京。':'北京与上海航班各自值机，共同提前前往机场。'}</p></div>`}<section class="meals"><div class="section-heading"><h2>吃什么</h2></div><dl>${day.meals.breakfast?`<dt>早餐</dt><dd>${escape(day.meals.breakfast)}</dd>`:''}<dt>午餐</dt><dd>${escape(day.meals.lunch)}</dd><dt>晚餐</dt><dd>${escape(day.meals.dinner)}</dd></dl></section>${day.todo.length?`<details class="todo"><summary>接下来需要确定 <span>${day.todo.length}</span></summary><ul>${day.todo.map(s=>`<li>${escape(s)}</li>`).join('')}</ul></details>`: ''}</aside></div><nav class="day-pagination" aria-label="前后日期">${idx>0?`<a class="button secondary" href="#day-${trip.days[idx-1].date}">前一天 · ${short(trip.days[idx-1].date)}</a>`:'<span></span>'}${idx<trip.days.length-1?`<a class="button primary" href="#day-${trip.days[idx+1].date}">后一天 · ${short(trip.days[idx+1].date)}</a>`:'<a class="button secondary" href="#bookings">查看全部预订</a>'}</nav>`;
  }
  function bookingsView() {
    main.innerHTML=`<div class="page-heading"><p class="eyebrow">BOOKING FOLDER</p><h1>预订资料</h1></div><div class="section-heading"><h2>航班</h2><span>当地时间 · 已预订</span></div><div class="booking-flights">${trip.flights.map(f=>`<section><h3 class="booking-title">${escape(f.title)}</h3>${flight(f)}</section>`).join('')}</div><div class="section-heading section-space"><h2>8 晚住宿</h2><span>15:00 入住 · 12:00 退房</span></div><div class="hotel-grid">${trip.hotels.map(h=>hotel(h)).join('')}</div>${restaurantBookings.length?`<div class="section-heading section-space"><h2>餐厅</h2><span>已预订</span></div><div class="timeline">${restaurantBookings.map(eventCard).join('')}</div>`:''}`;
  }
  function placesView() {
    main.innerHTML=`<div class="page-heading"><p class="eyebrow">PLACES TO GO</p><h1>地图清单</h1></div><div class="map-intro"><button class="button primary" id="download-map">下载地图标记 CSV</button><details><summary>如何导入地图标记</summary><ol><li>下载 CSV，打开 ${link('https://www.google.com/mymaps','Google My Maps')}，创建新地图。</li><li>点击图层中的“导入”，选择 CSV。</li><li>用“地址”列定位，用“名称”列显示标记标题。</li></ol></details></div><div class="section-heading"><h2>住宿地点</h2><span>3 家已预订酒店</span></div><div class="map-hotels">${trip.hotels.map(h=>`<article><span class="city-label">${h.city}</span><h3>${escape(h.zh)}</h3><p lang="ja">${escape(h.ja)}</p>${link(url(h.name+' '+h.address),'打开地图','button secondary')}</article>`).join('')}</div>${trip.days.filter(d=>dayPlaces(d).length).map(d=>`<details class="map-day"><summary><span><b>${short(d.date)}</b> ${escape(d.title)}</span><small>${d.city}</small></summary><div class="place-links">${dayPlaces(d).map(p=>`<div class="map-place">${link(p.mapUrl || url(p.query),p.name,'place-link')}${p.walk?`<small>${escape(placeNote(p))}</small>`:''}</div>`).join('')}</div></details>`).join('')}`;
  }
  function render() {
    const hash=location.hash.slice(1);
    let view=hash==='bookings'?'bookings':hash==='places'?'places':'days';
    let day=trip.days.find(d=>'day-'+d.date===hash)||lastDay;
    if(view==='days') lastDay=day;
    document.querySelectorAll('[data-view]').forEach(a=>{
      a.classList.toggle('active',a.dataset.view===view);
      if(a.dataset.view===view) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
      if(a.dataset.view==='days') a.href='#day-'+day.date;
    });
    document.body.dataset.view=view;
    dayNav(view==='days'?day.date:null);
    if(view==='days')dayView(day); else if(view==='bookings')bookingsView();else placesView();
    document.documentElement.lang=languages[language].locale;
    localize(document.body);
    document.title=t(`${view==='days'?short(day.date)+' '+day.title:view==='bookings'?'预订资料':'地图清单'} · 日本旅行手帐`);
    document.querySelector('#current-language').textContent=languages[language].name;
    document.querySelector('.language-switch summary').setAttribute('aria-label',t('切换语言'));
    document.querySelectorAll('[data-language]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.language===language)));
    centerActiveDate();
  }
  function centerActiveDate() {
    // Scroll only the date rail, without moving the page or hiding the language button.
    const active=nav.querySelector('.active');
    if(active && window.matchMedia('(max-width: 700px)').matches) nav.scrollLeft=active.offsetLeft-nav.offsetLeft-(nav.clientWidth-active.offsetWidth)/2;
  }
  function changeLanguage(next) {
    if(!languages[next] || next===language) return;
    const scrollY=window.scrollY;
    const disclosures=[...main.querySelectorAll('details')].map(d=>d.open);
    language=next;
    try { localStorage.setItem('japan-2026-language',language); } catch {}
    render();
    main.querySelectorAll('details').forEach((d,i)=>{d.open=disclosures[i];});
    window.scrollTo({top:scrollY,behavior:'instant'});
    document.querySelector('#language-announcement').textContent=t(language==='en'?'语言已切换为英文':language==='ja'?'语言已切换为日文':'语言已切换为中文');
  }
  function downloadMap() {
    const rows=[['名称','地址','日期','城市','状态','备注']];
    trip.hotels.forEach(h=>rows.push([h.zh,h.name+' '+h.address,short(h.in)+'–'+short(h.out),h.city,'已预订','']));
    trip.days.forEach(d=>{
      dayPlaces(d).filter(p=>!p.query.includes('Mitsui Garden')&&!p.query.includes('Hotel Hankyu')).forEach(p=>rows.push([
        p.name,p.address,d.date,d.city,p.status || (d.versionConflict?'拟定 / 版本待确认':'行程候选'),p.walk?placeNote(p):''
      ]));
    });
    const csv='\uFEFF'+rows.map((row,i)=>row.map((v,j)=>'"'+(i===0||[0,3,4,5].includes(j)?t(v):v).replace(/"/g,'""')+'"').join(',')).join('\r\n');
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}), href=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=href;a.download='japan-2026-map.csv';a.click();setTimeout(()=>URL.revokeObjectURL(href),1000);
  }
  document.addEventListener('click',e=>{
    const picker=document.querySelector('#language-switch');
    const languageButton=e.target.closest('[data-language]');
    if(languageButton){changeLanguage(languageButton.dataset.language);picker.open=false;picker.querySelector('summary').focus({preventScroll:true});return;}
    if(!e.target.closest('.language-switch')) picker.open=false;
    if(e.target.closest('.skip-link')){e.preventDefault();main.focus();main.scrollIntoView({block:'start'});return;}
    const b=e.target.closest('[data-image], [data-image-path]');
    if(b){imageTrigger=b;document.querySelector('#image-title').textContent=b.dataset.title;const img=document.querySelector('#full-image');img.src=b.dataset.imagePath || `assets/bookings/${b.dataset.image}.webp`;img.alt=b.dataset.imagePath?b.dataset.title:b.dataset.title+t('预订截图，个人信息已隐藏');dialog.showModal();}
    if(e.target.closest('#download-map'))downloadMap();
  });
  document.querySelector('#close-image').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>imageTrigger?.focus());
  document.addEventListener('keydown',e=>{if(e.key==='Escape' && document.querySelector('#language-switch').open){document.querySelector('#language-switch').open=false;document.querySelector('.language-switch summary').focus({preventScroll:true});}});
  let resizeFrame;
  window.addEventListener('resize',()=>{cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(centerActiveDate);});
  window.addEventListener('hashchange',()=>{render();window.scrollTo({top:0,behavior:'instant'});});
  render();
})();
