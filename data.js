// Public trip data only. Booking identifiers and original documents stay in .private/.
window.TRIP = {
  updated: '2026-10-04',
  itineraryVersion: 'word-provisional',
  sources: {
    meiji: {title:'明治神宫官方开放时间', url:'https://www.meijijingu.or.jp/en/opening/'},
    nezu: {title:'根津美术馆 · 开放时间与门票', url:'https://www.nezu-muse.or.jp/en/visit/'},
    scrambleSquare: {title:'Scramble Square 官方楼层与营业时间', url:'https://shibuya-scramble-square.com/faq/'},
    scrambleSquareView: {title:'12 楼夜景位置与实拍', url:'https://nightscape.tokyo/shibuya/shibuya-scramble-square-12f/'},
    shibuyaSky: {title:'SHIBUYA SKY 官方票务', url:'https://www.shibuya-scramble-square.com/sky/ticket/'},
    unitora: {title:'うに虎本店官网 · 营业时间与地址', url:'https://beyondtsukiji-hd.co.jp/shop/unitora-lunch/'},
    tsukiji: {title:'筑地市场官方营业说明', url:'https://www.tsukiji.or.jp/calendar/'},
    yakitoriOptions: {title:'10/12 烧鸟候选 · 照片、套餐与两人余位', url:'assets/guides/yakitori-oct12/'},
    kyotanba: {title:'银座京丹波 · OMAKASE 套餐与预约', url:'https://omakase.in/r/ju354312'},
    umi: {title:'海味 · 青山店官网与地址', url:'https://sushi-umi.co.jp/shop/aoyama/'},
    izumi: {title:'和ごころ泉 · 套餐与预约', url:'https://omakaseje.com/ja/restaurants/hc541098'},
    umiTabelog: {title:'海味 · 食べログ店铺资料', url:'https://tabelog.com/tokyo/A1306/A130603/13001179/'},
    aramaki: {title:'新まき · OMAKASE 预约与店铺资料', url:'https://omakase.in/r/wz508015'},
    takahashi: {title:'高はし · TableCheck 预约日历', url:'https://www.tablecheck.com/ja/shops/yakitoritakahashi/reserve?start_date=2026-10-12&num_people=2'},
    tower: {title:'东京塔官方开放时间', url:'https://ticket.tokyotower.co.jp/'},
    towerLights: {title:'东京塔官方亮灯说明', url:'https://www.tokyotower.co.jp/lightup/index.html'},
    tokyo: {title:'日本桥酒店官方交通说明', url:'https://www.gardenhotels.co.jp/nihonbashi-premier/eng/access/'},
    kyoto: {title:'京都三条 PREMIER 官方交通说明', url:'https://www.gardenhotels.co.jp/kyoto-sanjo-premier/eng/access/'},
    osaka: {title:'大阪酒店官方交通说明', url:'https://www.hankyu-hotel.com/hotel/respire/osaka/access/'},
    nex: {title:'JR 东日本 N’EX 官方说明', url:'https://www.jreast.co.jp/multi/nex/'},
    shinNihombashiMorning: {title:'JR 官方时刻表 · 新日本桥 → 东京', url:'https://timetables.jreast.co.jp/2610/train/110/114111.html'},
    smartExQr: {title:'Smart EX · QR 乘车与换乘指引', url:'https://smart-ex.jp/en/entraining/qr/display/'},
    smartEx: {title:'SmartEX · 新干线官方购票', url:'https://smart-ex.jp/en/'},
    tokyoStation: {title:'JR 东海 · 东京站入口与站内地图', url:'https://railway.jr-central.co.jp/station-guide/shinkansen/tokyo/index.html'},
    karasumaOike: {title:'乌丸御池站 · 电梯与出口', url:'https://www.city.kyoto.lg.jp/kotsu/page/0000009448.html'},
    jr: {title:'JR 西日本路线与车票', url:'https://www.westjr.co.jp/travel-information/en/tickets-passes/route-search/?LANG=en'}
  },
  hotels: [
    {id:'tokyo', city:'东京', zh:'三井花园酒店 日本桥 PREMIER', name:'Mitsui Garden Hotel Nihonbashi Premier Tokyo', in:'2026-10-10', out:'2026-10-13', nights:3, checkin:'15:00', checkout:'12:00', room:'高级双床 · 转角房 · 禁烟', address:'3-4-4 Nihonbashi Muromachi, Chuo-ku, Tokyo, 103-0022 Japan', ja:'東京都中央区日本橋室町3-4-4', access:'与三越前站、新日本桥站相连；东京站日本桥口步行最短约 11 分钟。拖行李时建议预留 15–20 分钟。', source:'tokyo', image:'hotel-tokyo', cancel:'10/6 23:59（酒店当地时间）', note:'按预订单，3 晚以上隔日清扫；额外清扫可向前台询问。', official:'https://www.gardenhotels.co.jp/nihonbashi-premier/eng/'},
    {id:'kyoto', city:'京都', zh:'三井花园酒店 京都三条 PREMIER', name:'Mitsui Garden Hotel Kyoto Sanjo PREMIER', in:'2026-10-13', out:'2026-10-16', nights:3, checkin:'15:00', checkout:'12:00', room:'高级双床 · 两张 120cm 床 · 禁烟', address:'45-1 Hishiya-cho, Nakagyo-ku, Kyoto, 604-8131 Japan', ja:'京都市中京区三条通東洞院東入菱屋町45番1', access:'京都站乘地铁乌丸线至乌丸御池，3 站约 6 分钟；带行李从 3-2 号出口乘电梯，步行约 5–8 分钟。新干线下车至酒店预留约 30–40 分钟。', source:'kyoto', image:'hotel-kyoto', cancel:'10/9 23:59（酒店当地时间）', note:'15:00 前到达先询问前台寄存行李，提前入住以当天安排为准。', official:'https://www.gardenhotels.co.jp/kyoto-sanjo-premier/eng/'},
    {id:'osaka', city:'大阪', zh:'阪急大阪龙仕柏酒店', name:'Hotel Hankyu RESPIRE OSAKA', in:'2026-10-16', out:'2026-10-18', nights:2, checkin:'15:00', checkout:'12:00', room:'30 层及以上 · 标准双床 · 禁烟', address:'1-1 Ofukacho, Kita-ku, Osaka, 530-0011 Japan', ja:'大阪府大阪市北区大深町1番1号', access:'JR 大阪站 3 楼连络桥出口步行约 3 分钟；Umekita 地下出口步行约 6 分钟。酒店大堂在 Yodobashi Umeda Tower 9 楼。', source:'osaka', image:'hotel-osaka', cancel:'10/14 23:59（酒店当地时间）', note:'预订单写入住接待时间至次日 05:00。10/18 建议早餐后提前退房，按机场计划出发。', official:'https://www.hankyu-hotel.com/en/hotel/respire/osaka/'}
  ],
  flights: [
    {id:'tokyo', title:'出发 · 旧金山至东京', airline:'日本航空', number:'JL57', from:'SFO', fromCity:'旧金山', to:'NRT', toCity:'东京成田', depart:'2026-10-09', arrive:'2026-10-10', depTime:'13:30', arrTime:'16:30', depZone:'PDT / UTC−7', arrZone:'JST / UTC+9', depTerminal:'国际航站楼 I', arrTerminal:'T2', duration:'11 小时', cabin:'经济舱', baggage:'手提 10kg；托运 2 件，每件 23kg（按预订单）', image:'flight-tokyo', note:'跨越日期变更线，抵达日期为日本时间 10/10。两位同行者在同一份去程预订单中。'},
    {id:'beijing', title:'离境 · 大阪至北京', airline:'中国国际航空', number:'CA928', from:'KIX', fromCity:'大阪关西', to:'PEK', toCity:'北京首都', depart:'2026-10-18', arrive:'2026-10-18', depTime:'14:00', arrTime:'16:30', depZone:'JST / UTC+9', arrZone:'CST / UTC+8', depTerminal:'T1', arrTerminal:'T3', duration:'3 小时 30 分', cabin:'超级经济舱', baggage:'手提 5kg；托运 2 件，每件 23kg（按预订单）', image:'flight-beijing', note:'此份离境预订对应 Ziqing。'},
    {id:'shanghai', title:'离境 · 大阪至上海', airline:'中国东方航空', number:'MU516', from:'KIX', fromCity:'大阪关西', to:'PVG', toCity:'上海浦东', depart:'2026-10-18', arrive:'2026-10-18', depTime:'14:20', arrTime:'16:10', depZone:'JST / UTC+9', arrZone:'CST / UTC+8', depTerminal:'T1', arrTerminal:'T1', duration:'2 小时 50 分', cabin:'经济舱', baggage:'手提 8kg；托运 2 件，每件 23kg（按预订单）', image:'flight-shanghai', note:'此份离境预订对应 Yuting；预订单座位为 42D。'}
  ],
  days: [
    {date:'2026-10-09', city:'飞行', group:'出发', title:'从旧金山出发', subtitle:'一觉醒来，就是东京。', hotel:null, tags:['去程已预订'], route:['SFO 国际航站楼','JL57 飞往东京'], events:[
      {time:'10:30',title:'抵达 SFO，办理值机与托运',status:'建议',type:'交通',detail:'按起飞前 3 小时规划预留。实际值机柜台、截止时间以日本航空通知为准；出发前核对证件、机票与行李。',place:'San Francisco International Airport International Terminal'},
      {time:'13:30',title:'JL57 起飞，目的地东京成田',status:'已预订',type:'航班',detail:'旧金山当地时间 10/9 13:30 起飞；飞行 11 小时，日本当地时间 10/10 16:30 抵达。',flight:'tokyo'}],meals:{lunch:'机场 / 机上用餐',dinner:'机上用餐'},todo:[]},
    {date:'2026-10-10', city:'东京', group:'东京', title:'抵达东京，住进日本桥', subtitle:'包车直接到酒店，放好行李再选晚饭。',hotel:'tokyo',tags:['16:30 抵达成田','包车接机 · 待落实','东京第 1 晚'],route:['成田机场 T2','包车直达','日本桥酒店','附近晚饭'],events:[
      {time:'16:30',title:'抵达成田机场 T2',status:'已预订',type:'航班',detail:'JL57 抵达成田 T2；入境、取行李与海关预计 60–90 分钟。',flight:'tokyo',place:'Narita International Airport Terminal 2'},
      {time:'出关后',title:'包车接机 · 成田 T2 → 日本桥酒店',status:'待预订',type:'交通',detail:'包车直达三井花园酒店日本桥 PREMIER。接机人待确认；车程约 1.5–2 小时。',steps:['完成入境、取行李和海关，进入 T2 到达大厅。','与司机会合（接头位置、联系方式待补）。','向司机确认目的地：三井ガーデンホテル日本橋プレミア，東京都中央区日本橋室町3-4-4。','行李上车后直接前往酒店，到达后办理入住。'],origin:'Narita Airport Terminal 2',place:'Mitsui Garden Hotel Nihonbashi Premier Tokyo',travelMode:'driving'},
      {time:'约 19–20 点',title:'酒店办理入住',status:'预计',type:'住宿',detail:'酒店 15:00 起入住。',hotel:'tokyo'},
      {time:'入住后',title:'晚饭首选 · 日本桥いちり寿喜烧',status:'现场候位',type:'餐饮',detail:'Sukiyaki Ichiri：Walk-in，不接受预约；酒店步行约 8–10 分钟。餐食最后点单 20:00，晚到或排队较长就选附近备选。',options:[
        {name:'日本桥いちり · 寿喜烧',kind:'首选 · Walk-in',walk:'约 8–10 分钟',hours:'11:00–21:00 · 餐食最后点单 20:00',address:'東京都中央区日本橋本町1-1-5 日本橋TNビル 1F',query:'Sukiyaki Ichiri Nihonbashi Tokyo 日本橋本町1-1-5',mapUrl:'https://www.google.com/maps/place/Sukiyaki+Ichiri+Nihonbashi+Tokyo/@35.6853196,139.776342,17z/data=!3m1!4b1!4m6!3m5!1s0x601889004d1c4c01:0xd546648fc9d92bad!8m2!3d35.6853196!4d139.776342!16s%2Fg%2F11lms5_xmp',detail:'现场候位。请使用本町 1-1-5 的新店地址。',sourceUrl:'https://tabelog.com/tokyo/A1302/A130202/13315727/',sourceTitle:'店家发布的食べログ门店资料',status:'现场候位'},
        {name:'7-Eleven · 日本桥室町3丁目店',kind:'便利店 · 最近',walk:'约 1–2 分钟 · 同栋楼 1F',hours:'24 小时营业',address:'東京都中央区日本橋室町3-4-4',query:'セブン-イレブン 日本橋室町3丁目店 東京都中央区日本橋室町3-4-4',detail:'酒店同楼 1F；饭团、便当、三明治、饮料。',sourceUrl:'https://www.e-map.ne.jp/p/yamato01/dtl/0352022021/',sourceTitle:'ヤマト官方取扱店资料',status:'备用'},
        {name:'FamilyMart · 日本桥本町二丁目店',kind:'便利店 · 备用',walk:'约 5–7 分钟',hours:'24 小时营业',address:'東京都中央区日本橋本町二丁目6番7号',query:'ファミリーマート 日本橋本町二丁目店 東京都中央区日本橋本町2-6-7',detail:'便当、饭团、炸鸡、饮料。',sourceUrl:'https://store.family.co.jp/points/59147',sourceTitle:'FamilyMart 官方门店资料',status:'备用'},
        {name:'なか卯 · 日本桥本石町店',kind:'简餐 · 亲子丼 / 乌冬',walk:'约 7–9 分钟',hours:'04:00–次日 03:00 · 03:00–04:00 休息',address:'東京都中央区日本橋本石町3-2-3 日本橋オリーブビル',query:'なか卯 日本橋本石町店 東京都中央区日本橋本石町3-2-3',detail:'亲子丼、乌冬；堂食或外带。',sourceUrl:'https://maps.nakau.co.jp/jp/detail/2555.html',sourceTitle:'なか卯官方门店资料',status:'备用'}
      ]}],meals:{lunch:'机上用餐',dinner:'日本桥いちり寿喜烧 · Walk-in；附近简餐 / 便利店备用'},todo:['落实包车接机']},
    {date:'2026-10-11',city:'东京',group:'东京',title:'明治神宫，原宿逛到涩谷',subtitle:'明治神宫、代代木公园、原宿、表参道，海味晚餐后去涩谷。',hotel:'tokyo',tags:['预计 07:00 酒店出发','17:00 海味已预订','饭后涩谷夜景','东京第 2 晚'],route:['原宿早餐','明治神宫','代代木公园','11:00 午餐','原宿 / Cat Street / 表参道','根津美术馆（待定）','海味 17:00','涩谷路口 / 八公像','Scramble Square 12F','歌舞伎町 / 酒吧（待定）'],events:[
      {time:'07:00–约 07:45',title:'酒店 → 原宿 / 明治神宫前',status:'预计',type:'交通',detail:'地铁全程约 40–50 分钟，含步行和换乘；预计 07:40–07:50 抵达原宿一侧。',steps:['从酒店进入三越前站，乘半藏门线往涩谷方向至表参道。','换乘千代田线往代代木上原方向，1 站到明治神宫前。','从 2 号出口一侧出站，步行至原宿站周边早餐店。'],origin:'Mitsui Garden Hotel Nihonbashi Premier Tokyo 東京都中央区日本橋室町3-4-4',place:'Harajuku Station Tokyo'},
      {time:'约 07:45–08:30',title:'原宿 · 咖啡与早餐',status:'待选',type:'餐饮',detail:'早到可吃 Doutor；猿田彦 08:00 开门。',options:[
        {name:'Doutor Coffee · 原宿店',kind:'最早开门 · 三明治与咖啡',walk:'约 2–4 分钟',origin:'Harajuku Station Tokyo',originLabel:'原宿站',hours:'周日 06:45–21:00 · 早餐套餐至 10:30',address:'東京都渋谷区神宮前1-13-18 第2大英ビル',query:'ドトールコーヒーショップ 原宿店 神宮前1-13-18',detail:'连锁咖啡店，适合到原宿后直接吃一顿简单早餐。',sourceUrl:'https://shop.doutor.co.jp/doutor/spot/detail?code=1010451',sourceTitle:'Doutor 官方门店资料',status:'候选'},
        {name:'猿田彦珈琲 · The Bridge 原宿站店',kind:'优先推荐 · 咖啡早餐',walk:'约 1–3 分钟 · 车站 2F',origin:'Harajuku Station Tokyo',originLabel:'原宿站',hours:'08:00–22:00 · 早餐 08:00–11:00',address:'東京都渋谷区神宮前1-18-20 原宿駅2階',query:'猿田彦珈琲 The Bridge 原宿駅店',detail:'在 JR 原宿站 2F、检票口外；紧邻明治神宫原宿口。若 08:00 吃早餐，08:30 再进入神宫。',sourceUrl:'https://sarutahiko.work/pages/the-bridge-harajyuku',sourceTitle:'猿田彦官方门店与早餐菜单',status:'候选'},
        {name:'パンとエスプレッソと · 表参道',kind:'面包与咖啡 · 表参道备选',walk:'约 5 分钟 · A2 出口',origin:'Omotesando Station Tokyo',originLabel:'表参道站',hours:'08:00–19:00 · 不定休',address:'東京都渋谷区神宮前3-4-9',query:'パンとエスプレッソと 表参道 神宮前3-4-9',detail:'想吃面包可选这家。距原宿站约 15–20 分钟步行；早餐会增加往返路程，也可留到逛表参道时吃。',sourceUrl:'https://bread-espresso.jp/shop/omotesando.html',sourceTitle:'店铺官网 · 营业时间与菜单',status:'候选'}
      ]},
      {time:'约 08:30–11:00',title:'明治神宫 + 代代木公园',status:'预计',type:'景点',detail:'08:30–10:00 明治神宫参拜、散步，含参道往返。之后从原宿口出，步行约 5–10 分钟至代代木公园原宿门；公园散步至约 10:45，再步行回原宿商圈。',places:['Meiji Jingu Tokyo','Yoyogi Park Harajuku Gate Tokyo'],source:'meiji'},
      {time:'11:00–12:00',title:'午餐 · 原宿 / 表参道',status:'待定',type:'餐饮',detail:'餐厅待定。',options:[
        {"name": "牛かつもと村 · 原宿店", "kind": "炸牛排 · 石板自烤", "rating": "4.8", "ratingChecked": "2026-09-30", "walk": "约 4–6 分钟", "origin": "Meiji Jingumae Station Tokyo", "originLabel": "明治神宫前站", "hours": "11:00–22:00 · 最后点单 21:30 · 无固定休息日", "address": "東京都渋谷区神宮前3-23-2 NSビル B1F", "query": "牛かつもと村 原宿店 神宮前3-23-2", "mapUrl": "https://www.google.com/maps/place/Gyukatsu+Motomura+Harajuku+Branch/data=!4m2!3m1!1s0x60188ca34344b32b:0xb1421ed29d7fe639", "detail": "薄衣炸牛排，端上来后在小石板上烤到喜欢的熟度。想吃一顿有特色的日式套餐可选这家；热门店，可能需要排队。", "sourceUrl": "https://www.gyukatsu-motomura.com/store/Harajuku", "sourceTitle": "もと村官方门店与菜单", "status": "候选"},
        {"name": "AFURI · 原宿店", "kind": "拉面 · 柚子盐味汤底", "rating": "4.5", "ratingChecked": "2026-09-30", "walk": "约 3–5 分钟 · 竹下口一侧", "origin": "Harajuku Station Tokyo", "originLabel": "原宿站", "hours": "10:00–23:00 · 年中无休 · 汤售完可能提前结束", "address": "東京都渋谷区千駄ヶ谷3-63-1 グランデフォレスタ1F", "query": "AFURI 原宿 千駄ヶ谷3-63-1", "mapUrl": "https://www.google.com/maps/place/AFURI+Harajuku/data=!4m2!3m1!1s0x60188cba4d7bad6d:0xcb6d1919ead5d016", "detail": "主打柚子盐味拉面，汤底清爽。适合晚上 17:00 吃海味之前，午餐只吃一碗面。门店仅接受无现金支付。", "sourceUrl": "https://afuri.com/findus/", "sourceTitle": "AFURI 官方门店资料", "status": "候选"},
        {"name": "まい泉 · 青山本店", "kind": "炸猪排 · 菲力 / 里脊套餐", "rating": "4.4", "ratingChecked": "2026-09-30", "walk": "约 3–5 分钟 · A2 出口", "origin": "Omotesando Station Tokyo", "originLabel": "表参道站", "hours": "11:00–22:00 · 最后点单 21:00 · 周日营业", "address": "東京都渋谷区神宮前4-8-5", "query": "とんかつ まい泉 青山本店 神宮前4-8-5", "mapUrl": "https://www.google.com/maps/place/Tonkatsu+Maisen+Aoyama/data=!4m2!3m1!1s0x60188d2dbaa7696b:0x73ec2569bd2d3eef", "detail": "以柔软的炸猪排出名，可选菲力或里脊套餐。若午餐时想先往表参道走，可选这里；从原宿站步行约 15–20 分钟。", "sourceUrl": "https://mai-sen.com/restaurant/aoyama/", "sourceTitle": "まい泉官方门店与菜单", "status": "候选"},
        {"name": "HENRY’S BURGER · 原宿店", "kind": "汉堡 · 和牛肉饼", "rating": "4.4", "ratingChecked": "2026-09-30", "walk": "约 5–7 分钟 · 7 号出口", "origin": "Meiji Jingumae Station Tokyo", "originLabel": "明治神宫前站", "hours": "11:00–20:00 · 周日营业", "address": "東京都渋谷区神宮前6-12-15 ハイネスト原宿1F", "query": "HENRY'S BURGER 原宿 神宮前6-12-15", "mapUrl": "https://www.google.com/maps/place/Henry%27s+Burger+Harajuku/data=!4m2!3m1!1s0x60188d000bb543a1:0x29693d696532c4a3", "detail": "粗绞和牛肉饼汉堡，搭配薯条和饮料。想换口味可选这里；晚餐较早，建议单层肉饼。", "sourceUrl": "https://www.google.com/maps/place/Henry%27s+Burger+Harajuku/data=!4m2!3m1!1s0x60188d000bb543a1:0x29693d696532c4a3", "sourceTitle": "Google Maps · 门店与营业时间", "status": "候选"}
      ]},
      {time:'12:00–16:30',title:'原宿 / Cat Street / 表参道 · 购物与咖啡',status:'预计',type:'游逛',detail:'原宿 → 竹下通 → Cat Street → 表参道。下午自由逛街，之后步行前往海味。',optionalVisit:{title:'根津美术馆 · 待定',time:'15:30–16:30 · 约 1 小时',detail:'购物结束早就去。从表参道站一带步行约 8–12 分钟；16:30 离馆后步行约 15–20 分钟到海味。',hours:'开放 10:00–17:00，最晚 16:30 入馆；门票待购买。',place:'根津美術館 東京都港区南青山6-5-1',source:'nezu'},places:['Harajuku Tokyo','Takeshita Street Harajuku Tokyo','Cat Street Shibuya','Omotesando Tokyo','根津美術館 東京都港区南青山6-5-1']},
      {time:'17:00–19:00',title:'海味 · 南青山寿司 Omakase',status:'已预订',type:'餐饮',detail:'两人，Omakase Course，用餐时间 2 小时。约 16:45–16:50 到店；表参道步行约 15–25 分钟，根津美术馆步行约 15–20 分钟。',confirmation:{images:[{image:'restaurant-umi-confirmation',title:'海味 · 10/11 17:00 两人预约确认'},{image:'restaurant-umi-details',title:'海味 · 套餐与两小时用餐确认'}],title:'海味 · 10/11 17:00 两人预约确认',price:'Omakase Course ¥44,800 / 人（含税），另加 10% 服务费。两人餐费加服务费约 ¥98,560；酒水另计。',note:'通过食べログ预约。到店出示确认邮件或预约记录；餐饮费用当天在餐厅支付。'},place:'海味 東京都港区南青山3-2-8 三南ビル1F',source:'umi',extraSource:'umiTabelog'},
      {time:'19:00–约 19:30',title:'海味 → 涩谷',status:'预计',type:'交通',detail:'步行约 5–8 分钟至外苑前站，乘银座线往涩谷方向，2 站到涩谷；含出站步行约 20–30 分钟。',steps:['海味步行至外苑前站。','乘银座线往涩谷方向，经表参道到涩谷。','出站后步行前往涩谷十字路口与八公像。'],origin:'海味 東京都港区南青山3-2-8 三南ビル1F',place:'Shibuya Scramble Crossing Tokyo'},
      {time:'约 19:30–20:00',title:'涩谷路口与忠犬八公像 · 打卡',status:'预计',type:'景点',detail:'拍十字路口夜景，再去涩谷站八公口旁的忠犬八公像；两处步行约 2–3 分钟。',places:['Shibuya Scramble Crossing Tokyo','Hachiko Memorial Statue Shibuya Tokyo']},
      {time:'20:00–20:40',title:'Shibuya Scramble Square · 12 楼夜景',status:'预计',type:'景点',detail:'从八公像步行到大楼、上 12 楼约 10–15 分钟。餐厅层公共窗边可俯瞰涩谷路口，免费，无需预约；留约 20–25 分钟拍照。餐厅层营业 11:00–23:00。',place:'Shibuya Scramble Square Tokyo 渋谷2-24-12',source:'scrambleSquare',extraSource:'scrambleSquareView'},
      {time:'约 20:40–21:15 · 可选',title:'涩谷 → 新宿歌舞伎町',status:'待定',type:'交通',detail:'JR 山手线到新宿，再步行至歌舞伎町，全程约 25–35 分钟。',origin:'Shibuya Station Tokyo',place:'Kabukicho Shinjuku Tokyo'},
      {time:'约 21:15 起 · 可选',title:'歌舞伎町 / 酒吧',status:'待定',type:'游逛',detail:'候选：新宿歌舞伎町、Golden Gai。',places:['Kabukicho Shinjuku Tokyo','Shinjuku Golden Gai Tokyo']},
      {time:'涩谷打卡后 / 酒吧后',title:'返回日本桥酒店',status:'预计',type:'交通',detail:'涩谷出发：银座线直达三越前，含步行约 35–45 分钟。若去歌舞伎町：步行至新宿三丁目，丸之内线到赤坂见附换银座线至三越前，全程约 45–55 分钟。',origin:'Shibuya Station Tokyo',place:'Mitsui Garden Hotel Nihonbashi Premier Tokyo 東京都中央区日本橋室町3-4-4'}],meals:{breakfast:'原宿咖啡早餐 · Doutor / 猿田彦待选',lunch:'原宿 / 表参道附近 · 待定',dinner:'17:00 海味 · 两人寿司 Omakase · 已预订'},todo:['确定午餐餐厅']},
    {date:'2026-10-12',city:'东京',group:'东京',title:'筑地海胆饭，东京经典一日',subtitle:'筑地、浅草、银座，烧鸟晚餐与东京塔夜景。',hotel:'tokyo',tags:['07:00 酒店出发','09:00 筑地出发','东京第 3 晚'],route:['筑地场外市场','浅草','银座','酒店放东西（可选）','京丹波 19:30','东京塔'],events:[
      {time:'07:00 出发',title:'酒店 → 筑地场外市场',status:'预计',type:'交通',detail:'出租车约 10–20 分钟；地铁全程约 25–35 分钟，预计 07:30–07:40 到うに虎。',steps:['步行约 8–10 分钟至日本桥站，乘都营浅草线往西马込 / 羽田机场方向，2 站到东银座。','东银座 5 / 6 号出口，步行约 5–8 分钟到市场及うに虎。'],origin:'Mitsui Garden Hotel Nihonbashi Premier Tokyo 東京都中央区日本橋室町3-4-4',place:'うに虎 本店 東京都中央区築地4-10-5'},
      {time:'约 07:30–09:00',title:'うに虎海胆饭 → 筑地场外市场',status:'拟定',type:'餐饮',detail:'先吃海胆饭，再逛市场。Unitora Nakadori：官网现称うに虎本店，07:00–17:00，无固定休息日。地址：東京都中央区築地4-10-5 MIHIROビル1F。10/12 为假日，部分市场店铺休息。',places:['うに虎 本店 東京都中央区築地4-10-5','Tsukiji Outer Market Tokyo'],source:'unitora',extraSource:'tsukiji'},
      {time:'09:00 出发',title:'筑地 → 浅草',status:'预计',type:'交通',detail:'步行至东银座，乘都营浅草线往押上方向直达浅草，全程约 30–40 分钟，预计 09:30–09:40 抵达。',steps:['筑地场外市场步行至东银座站。','乘都营浅草线往押上方向，到浅草站下车。','步行至浅草文化观光中心，开始游逛。'],origin:'Tsukiji Outer Market Tokyo',place:'Asakusa Culture Tourist Information Center Tokyo'},
      {time:'约 09:40–13:00',title:'浅草寺周边 · 景点与小吃',status:'预计',type:'景点',detail:'浅草文化观光中心 → 雷门 → 仲见世街 → 宝藏门 → 五重塔 → 浅草寺 → 浅草神社。抹茶店和小吃以我的 Google Maps 收藏为准。观光中心 09:00 开门；隅田川边拍晴空塔可留约 20–30 分钟。',places:['浅草文化观光中心 Asakusa Culture Tourist Information Center Tokyo','雷门 Kaminarimon Tokyo','仲见世街 Nakamise Shopping Street Tokyo','宝藏门 Hozomon Sensoji Tokyo','浅草寺五重塔 Sensoji Five Story Pagoda Tokyo','浅草寺 Sensoji Tokyo','浅草神社 Asakusa Shrine Tokyo','隅田公园 Sumida Park Asakusa Tokyo'],guides:[{title:'浅草景点路线图',path:'assets/guides/asakusa-sights.png',alt:'用户提供的浅草景点攻略图，标注雷门、仲见世街、宝藏门、五重塔、浅草寺和浅草神社，以及周边购物点'},{title:'浅草小吃攻略图',path:'assets/guides/asakusa-route.jpg',alt:'用户提供的浅草附近步行攻略地图，从浅草文化观光中心出发，标有浅草寺及沿途抹茶店、小吃店'}]},
      {time:'约 13:00 出发',title:'浅草 → 银座',status:'预计',type:'交通',detail:'银座线往涩谷方向直达银座，全程约 30–40 分钟。',origin:'Asakusa Station Tokyo Metro Ginza Line',place:'Ginza Tokyo'},
      {time:'约 13:40 起 · 逛至傍晚',title:'银座 · 购物与咖啡',status:'拟定',type:'购物',detail:'LOFT、伊东屋、无印良品、UNIQLO；其他候选店铺见攻略图和地点清单。晚餐前可回酒店放东西或直接前往京丹波。',places:['银座 LOFT Ginza Loft Tokyo','银座伊东屋 Ginza Itoya Tokyo','无印良品 银座店 MUJI Ginza Tokyo','UNIQLO 银座店 UNIQLO Ginza Tokyo','Bic Camera 有乐町店 Bic Camera Yurakucho Tokyo','LUMINE 有乐町 Lumine Yurakucho Tokyo','三丽鸥世界 银座店 Sanrio World Ginza Tokyo','松本清 银座 FLAG 店 Matsumoto Kiyoshi Ginza Flag Tokyo','Apple 银座店 Apple Ginza Tokyo','松屋银座 Matsuya Ginza Tokyo','银座三越 Ginza Mitsukoshi Tokyo','Dover Street Market Ginza Tokyo','GINZA SIX Tokyo','鬼冢虎 银座店 Onitsuka Tiger Ginza Tokyo','唐吉诃德 银座本馆 Don Quijote Ginza Honkan Tokyo'],guide:{title:'银座购物攻略图',path:'assets/guides/ginza-shopping.jpg',alt:'用户提供的银座购物地图，标注 LOFT、伊东屋、无印良品、UNIQLO、百货、杂货、药妆及品牌店'}},
      {time:'晚餐前 · 两种走法',title:'回酒店放东西 / 直接前往京丹波',status:'可选',type:'交通',detail:'回酒店：银座 → 日本桥酒店，地铁约 20–30 分钟；酒店 → 京丹波，地铁约 25–35 分钟，出租车约 15–25 分钟。直接到店：银座附近步行约 5–20 分钟，视最后一家店位置而定。以上为估算。',steps:['回酒店：约 18:00 离开银座，乘银座线往浅草方向到三越前，回酒店放东西。','约 18:35–18:40 从酒店出发，三越前乘银座线往涩谷方向到银座，步行到银座グランベルスクエア 2F 京丹波。','直接到店：购物后步行前往，约 19:15 到店。'],origin:'Mitsui Garden Hotel Nihonbashi Premier Tokyo 東京都中央区日本橋室町3-4-4',place:'銀座やきとり 京丹波 東京都中央区銀座7-2-18 銀座グランベルスクエア201',places:['Mitsui Garden Hotel Nihonbashi Premier Tokyo 東京都中央区日本橋室町3-4-4','銀座やきとり 京丹波 東京都中央区銀座7-2-18 銀座グランベルスクエア201'],source:'tokyo',extraSource:'kyotanba'},
      {time:'19:30–约 21:30',title:'银座京丹波 · 烧鸟晚餐',status:'已预订',type:'餐饮',detail:'10/12 19:30，两人吧台，滞留时间 2 小时。高坂鸡季节限定套餐。地址：東京都中央区銀座7-2-18 銀座グランベルスクエア201。',confirmation:{image:'restaurant-kyotanba',title:'京丹波 · 10/12 19:30 两人预约确认',price:'高坂鸡季节限定套餐 ¥22,000 / 人（含税），另加 10% 服务费。两人餐费加服务费约 ¥48,400，OMAKASE 预约费共 ¥780；酒水另计。',note:'到店出示 OMAKASE 预约记录或确认邮件。10/9 起取消收套餐费 50%，10/12 当天收 100%；预约费不可退。'},place:'銀座やきとり 京丹波 東京都中央区銀座7-2-18 銀座グランベルスクエア201',source:'kyotanba'},
      {time:'晚餐后 · 约 21:30',title:'京丹波 → 东京塔',status:'待定（拍照）',type:'交通',detail:'出租车约 10–20 分钟。',origin:'銀座やきとり 京丹波 東京都中央区銀座7-2-18 銀座グランベルスクエア201',place:'Tokyo Tower',travelMode:'driving'},
      {time:'约 22:00',title:'东京塔夜景 · 芝公园 / 赤羽桥',status:'拟定',type:'景点',detail:'主展望台 09:00–23:00，最晚 22:30 入场；顶部展望台至 22:45，最晚 22:15 入场。外观亮灯通常至 24:00；是否登塔待定。',place:'Tokyo Tower',places:['Tokyo Tower','Shiba Park Tokyo','Akabanebashi Station Tokyo'],source:'tower',extraSource:'towerLights'}],meals:{breakfast:'筑地海鲜早餐',lunch:'浅草寺商业街小吃',dinner:'19:30 银座京丹波 · 两人吧台 · 季节限定套餐 · 已预订'},todo:['确定东京塔是否登塔']},
    {date:'2026-10-13',city:'京都',group:'京都',title:'去京都，走进岚山小路',subtitle:'寄存行李，锦市场午饭，再去奥嵯峨与岚山。',hotel:'kyoto',tags:['08:18 Nozomi 331 · 已预订','约 11:00 到酒店','19:00 和ごころ泉 · 已预订','京都第 1 晚'],route:['07:00 东京酒店退房','东京站 08:18','京都三条酒店','锦市场午饭','打车约 40–50 分钟','爱宕念佛寺','祇王寺','常寂光寺','竹林小径','天龙寺','渡月桥','酒店入住','和ごころ泉 19:00'],events:[
      {"time": "07:00–07:10", "title": "东京酒店 · 退房", "status": "预计", "type": "住宿", "detail": "07:10 前完成退房，带走行李。早餐可在东京站买，车上吃。", "place": "Mitsui Garden Hotel Nihonbashi Premier Tokyo 東京都中央区日本橋室町3-4-4"},
      {"time": "07:10–08:00", "title": "日本桥酒店 → 东京站 · JR 总武快速线", "status": "预计", "type": "交通", "detail": "JR 1 站约 2 分钟，08:00 前到新干线站台。", "steps": ["07:10 从酒店出发，经地下通道前往 JR 新日本桥站；用 Suica / PASMO 进站，找「総武線快速・東京方面」站台。", "候选 07:22 发车，07:24 到东京站，1 站直达。错过后乘下一班东京方向列车。", "东京站下车后跟随「東海道・山陽新幹線」标识；地下站台到新干线站台预留 20–25 分钟，08:00 前到站台。", "换乘闸机：先扫 Smart EX 的 QR-Ticket，再刷刚才进站用的 Suica / PASMO，拿走座位信息纸条。JR 这段车费另从 IC 卡扣除；两人各用自己的乘车码和 IC 卡。"], "origin": "Mitsui Garden Hotel Nihonbashi Premier Tokyo 東京都中央区日本橋室町3-4-4", "place": "Tokyo Station", "travelMode": "transit", "hidePlaces": true, "routeInsideSteps": true},
      {"time": "08:18–10:29", "title": "Nozomi 331 · 东京 → 京都", "status": "已预订", "type": "交通", "detail": "直达 2 小时 11 分钟，两人普通车指定席。", "steps": ["08:00 前到新干线站台，核对电子屏上的「のぞみ331号 / NOZOMI 331」，到 5 号车厢候车位置等车。", "上车找到 5 号车厢 18D、18E；E 靠窗，D 靠过道。放好行李后可吃早餐。", "10:29 在京都站下车；用各自的 Smart EX QR-Ticket 出站，再前往地铁乌丸线。"], "origin": "Tokyo Station", "place": "Kyoto Station", "confirmation": {"summary": "车票详情与预约确认", "title": "Nozomi 331 · 10/13 两人车票确认", "price": "Smart EX 两人合计 ¥27,940，平均 ¥13,970 / 人。", "note": "已确认：2026/10/13，Nozomi 331，东京 08:18 → 京都 10:29；N700 系列 16 节编组，普通车指定席，5 号车厢 18D、18E。乘车使用 Smart EX 的 QR-Ticket。", "images": [{"path": "assets/bookings/train-nozomi331.svg", "title": "Nozomi 331 · 10/13 两人车票确认", "label": "查看车票确认信息"}]}, "hidePlaces": true, "hideRouteLink": true, "routeInsideSteps": true},
      {"time": "10:29–11:00", "title": "京都站 → 京都三条酒店", "status": "预计", "type": "交通", "detail": "乌丸线 3 站直达，预计 11:00 到酒店。", "steps": ["10:29 京都站下车，出新干线区域后跟随「地下鉄・烏丸線」标识，到地铁站台预留约 10–15 分钟。", "刷 Suica / PASMO 进地铁站，乘「国際会館方面」列车；京都 → 五条 → 四条 → 乌丸御池，3 站约 6 分钟，无需换乘。", "乌丸御池站走北改札口，乘 3-2 号出口电梯到地面，再步行约 5–8 分钟到酒店。"], "origin": "Kyoto Station", "place": "Mitsui Garden Hotel Kyoto Sanjo PREMIER 京都市中京区三条通東洞院東入菱屋町45番1", "travelMode": "transit", "hidePlaces": true, "routeInsideSteps": true},
      {"time": "11:00–11:15", "title": "京都酒店 · 寄存行李", "status": "预计", "type": "住宿", "detail": "到前台办理行李寄存；15:00 起入住，傍晚回来拿行李和房卡。", "hotel": "kyoto"},
      {time:'11:15–12:45',title:'锦市场 · 午饭逛吃',status:'拟定',type:'餐饮',detail:'酒店步行约 10–15 分钟。玉子烧、鲷鱼烧等小吃；花道鳗鱼饭待定。',places:['Nishiki Market Kyoto','うなぎや花道 京都錦市場店 京都市中京区中魚屋町503','三木鶏卵 京都錦市場']},
      {time:'12:45–约 13:30',title:'锦市场 → 爱宕念佛寺 · 打车',status:'预计',type:'交通',detail:'车程约 40–50 分钟，预计 13:30 到达。',steps:['12:45 左右从锦市场走到附近可停车的道路，叫出租车。','给司机看目的地：愛宕念仏寺，京都市右京区嵯峨鳥居本深谷町2-5。','车程约 40–50 分钟，预计 13:30 到寺院入口。'],origin:'Nishiki Market Kyoto',place:'Otagi Nenbutsuji Kyoto',travelMode:'driving',hidePlaces:true,routeInsideSteps:true},
      {"time": "13:30–17:30", "title": "奥嵯峨 → 岚山 · 步行反穿", "status": "预计", "type": "景点", "detail": "爱宕念佛寺 → 祇王寺 → 常寂光寺 → 竹林小径 → 天龙寺 → 渡月桥。", "places": ["Otagi Nenbutsuji Kyoto", "Gio-ji Kyoto", "Jojakko-ji Kyoto", "Arashiyama Bamboo Forest Kyoto", "Tenryu-ji Kyoto", "Togetsukyo Bridge Kyoto"], "hidePlaces": true, "routeStops": [{"time": "13:30–14:10", "title": "爱宕念佛寺", "status": "预计", "type": "景点", "detail": "罗汉石像与苔庭，游览约 40 分钟。", "place": "Otagi Nenbutsuji Kyoto", "hidePlaces": true, "visitInfo": {"paragraphs": ["09:00–16:00；周三、周六休息。10/13 周二开放。", "成人 ¥1,000 / 人；两人 ¥2,000。", "到入口受付现场购票，无需提前订时段。"], "links": [{"url": "https://www.otagiji.com/visit-jp", "title": "官网 · 参观信息"}, {"url": "https://xhslink.cn/o/43uHE68LtTj", "title": "小红书 · 岚山反穿攻略"}]}}, {"time": "14:40–15:05", "title": "祇王寺", "status": "预计", "type": "景点", "detail": "从爱宕念佛寺沿嵯峨鸟居本步行约 25–30 分钟；苔庭游览约 25 分钟。", "place": "Gio-ji Kyoto", "hidePlaces": true, "visitInfo": {"paragraphs": ["09:00 开门，16:30 停止入场，16:50 结束参观。", "成人 ¥500 / 人；两人 ¥1,000。", "入口受付现场购票；本路线买单寺票。"], "links": [{"url": "https://www.giouji.or.jp/access/", "title": "官网 · 参观信息"}]}}, {"time": "15:20–16:00", "title": "常寂光寺", "status": "预计", "type": "景点", "detail": "从祇王寺步行约 10–15 分钟；游览约 40 分钟，寺内有台阶与上坡。", "place": "Jojakko-ji Kyoto", "hidePlaces": true, "visitInfo": {"paragraphs": ["09:00–17:00，16:30 停止入场；全年开放。", "成人 ¥600 / 人；两人 ¥1,200。", "入口受付现场购票，官网明确无需预约。"], "links": [{"url": "https://jojakko-ji.or.jp/faq/", "title": "官网 · 参观信息"}]}}, {"time": "16:10–16:25", "title": "竹林小径", "status": "预计", "type": "景点", "detail": "从常寂光寺步行约 10 分钟；穿过竹林拍照，接天龙寺北门。", "place": "Arashiyama Bamboo Forest Kyoto", "hidePlaces": true, "visitInfo": {"paragraphs": ["公共步道，全天开放；免费，无需购票或预约。"], "links": [{"url": "https://www.japan.travel/en/spot/1141/", "title": "日本观光局 · 岚山竹林"}]}}, {"time": "16:25–17:00", "title": "天龙寺", "status": "预计", "type": "景点", "detail": "从竹林侧北门入园，先逛曹源池庭园；17:00 前离园。", "place": "Tenryu-ji Kyoto", "hidePlaces": true, "visitInfo": {"paragraphs": ["庭园 08:30–17:00；北门与庭园受付 16:50 停止售票。", "庭园 ¥500 / 人；两人 ¥1,000。北门现场购票，无需预约。", "室内诸堂另加 ¥300 / 人；16:30 停止售票，16:45 关闭。想进入室内需在16:30前到诸堂受付，北门入园后还需步行。", "若前面走慢，缩短竹林拍照时间，优先保证天龙寺庭园的参观时间。"], "links": [{"url": "https://www.tenryuji.com/visit/", "title": "官网 · 参观信息"}]}}, {"time": "17:10–17:30", "title": "渡月桥", "status": "预计", "type": "景点", "detail": "从天龙寺步行约 5–10 分钟；桥边与桂川拍照约 20 分钟。", "place": "Togetsukyo Bridge Kyoto", "hidePlaces": true, "visitInfo": {"paragraphs": ["公共桥梁，通行自由；免费，无需购票或预约。"], "links": [{"url": "https://ja.kyoto.travel/tourism/single01.php?category_id=8&tourism_id=2682", "title": "京都观光官网 · 渡月桥"}]}}]},
      {time:'17:30–18:55',title:'岚山 → 酒店入住 → 和ごころ泉',status:'预计',type:'交通',detail:'先回酒店入住、取行李；18:55 到餐厅。',steps:['17:30 从渡月桥一带出发；公共交通返酒店约 45–50 分钟，出租车约 35–45 分钟。','约 18:20 到酒店，办理入住、取行李。','18:40 从酒店出发，沿东洞院通步行约 13–15 分钟（约 1 公里）；18:55 到和ごころ泉。'],origin:'Mitsui Garden Hotel Kyoto Sanjo PREMIER 京都市中京区三条通東洞院東入菱屋町45番1',place:'和ごころ泉 京都府京都市下京区匂天神町634-3',travelMode:'walking',hidePlaces:true,routeInsideSteps:true},
      {time:'19:00',title:'和ごころ泉 · 怀石晚餐',status:'已预订',type:'餐饮',detail:'两人吧台，夜のおまかせコース①；18:55 到店。',place:'和ごころ泉 京都府京都市下京区匂天神町634-3',hidePlaces:true,confirmation:{summary:'套餐详情与预约确认',title:'和ごころ泉 · 10/13 19:00 两人预约确认',price:'套餐费用已预付；酒水及追加费用现场结算。',note:'2026/10/13（周二）19:00 JST，2 位，吧台，夜のおまかせコース①。到店出示确认邮件或预约记录；请提前 5 分钟到达，未联系而迟到可能被取消。',images:[{path:'assets/bookings/restaurant-izumi.svg',title:'和ごころ泉 · 10/13 19:00 两人预约确认',label:'查看预约确认信息'}]},visitInfo:{summary:'地址与到店要求',paragraphs:['地址：京都府京都市下京区匂天神町634-3。','Smart casual；不穿 T 恤、短裤或凉鞋。','避免浓香水及明显的衣物柔顺剂气味。'],links:[{url:'https://omakaseje.com/ja/restaurants/hc541098',title:'和ごころ泉 · 套餐与预约'}]}}],meals:{breakfast:'东京站便当 / 三明治 · 车上吃',lunch:'锦市场逛吃 · 玉子烧、鲷鱼烧等；花道鳗鱼饭待定',dinner:'19:00 · 和ごころ泉 · 已预订'},todo:[],alternative:'原 PDF：寄存行李后去二条城 → 锦市场 → 寺町通 → 河原町 → 鸭川 / 先斗町；岚山安排在 10/15。'},
    {
  "date": "2026-10-14",
  "city": "京都",
  "group": "京都",
  "title": "千本鸟居，东山与祇园",
  "subtitle": "07:00 酒店出发，伏见稻荷、清水寺与东山；烧肉晚餐后散步鸭川。",
  "hotel": "kyoto",
  "tags": [
    "07:00 酒店出发",
    "千本鸟居 · 不登顶",
    "18:00 弘烧肉 · 已预订",
    "京都第 2 晚"
  ],
  "route": [
    "伏见稻荷",
    "打车至清水寺",
    "午饭",
    "三年坂 / 二年坂",
    "八坂塔",
    "石塀小路",
    "高台寺",
    "八坂神社",
    "祇园 / 花见小路",
    "弘 祇园山名庵烧肉",
    "鸭川 · 饭后散步"
  ],
  "events": [
    {
      "time": "07:00–07:45",
      "title": "京都三条酒店 → 伏见稻荷",
      "type": "交通",
      "status": "预计",
      "detail": "07:00 酒店出发，地铁 + JR，门到门约 35–45 分钟。",
      "steps": [
        "酒店步行约 3–5 分钟到乌丸御池站，乘乌丸线往竹田方向；3 站约 6 分钟到京都站。",
        "京都站按「JR・奈良線」标识换乘，步行约 8–10 分钟，乘停靠稻荷站的列车。",
        "京都 → 东福寺 → 稻荷，车程约 5 分钟；稻荷站出站即到大社入口。两段都可使用 Suica / PASMO。"
      ],
      "origin": "Mitsui Garden Hotel Kyoto Sanjo PREMIER 京都市中京区三条通東洞院東入菱屋町45番1",
      "place": "Fushimi Inari Taisha Kyoto",
      "travelMode": "transit",
      "hidePlaces": true,
      "routeInsideSteps": true
    },
    {
      "time": "07:45–09:00",
      "title": "伏见稻荷 · 千本鸟居",
      "type": "景点",
      "status": "预计",
      "detail": "楼门 → 本殿 → 千本鸟居 → 奥社奉拜所折返；不登顶，含拍照约 1 小时 15 分钟。",
      "place": "Fushimi Inari Taisha Kyoto",
      "hidePlaces": true,
      "visitInfo": {
        "paragraphs": [
          "全年开放，昼夜均可参拜；免费，无需购票或预约。",
          "千本鸟居通往奥社奉拜所，走完这一段返回山下，不继续往山顶攀爬。"
        ],
        "links": [
          {
            "url": "https://inari.jp/trip/map01/",
            "title": "官网 · 大社地图"
          }
        ]
      }
    },
    {
      "time": "09:00–09:45",
      "title": "伏见稻荷 → 清水寺 · 打车",
      "type": "交通",
      "status": "预计",
      "detail": "车程约 20–30 分钟；下车后上坡步行约 10–15 分钟。",
      "steps": [
        "从伏见稻荷附近叫出租车，目的地：清水寺附近的五条坂／清水坂可下车处。",
        "预计车程约 20–30 分钟；下车后仍需步行上坡约 10–15 分钟到清水寺入口，出租车无法开到清水舞台。"
      ],
      "origin": "Fushimi Inari Taisha Kyoto",
      "place": "Kiyomizu-dera Kyoto",
      "travelMode": "driving",
      "hidePlaces": true,
      "routeInsideSteps": true
    },
    {
      "time": "09:45–11:15",
      "title": "清水寺",
      "type": "景点",
      "status": "预计",
      "detail": "仁王门、清水舞台与境内参观，预留约 1.5 小时，之后下山吃午饭。",
      "place": "Kiyomizu-dera Kyoto",
      "hidePlaces": true,
      "visitInfo": {
        "paragraphs": [
          "10 月日间 06:00–18:00，全年开放。",
          "成人 ¥500 / 人；两人 ¥1,000。付费参观区域入口现场购票，无需提前预约。"
        ],
        "links": [
          {
            "url": "https://www.kiyomizudera.or.jp/en/visit/",
            "title": "官网 · 参观信息"
          }
        ]
      }
    },
    {
      "time": "11:30–12:30",
      "title": "午餐 · 清水寺下山后",
      "type": "餐饮",
      "status": "待定",
      "detail": "清水坂／三年坂附近，餐厅待定。"
    },
    {
      "time": "12:30–17:00",
      "title": "东山 → 祇园 · 步行游逛",
      "type": "游逛",
      "status": "预计",
      "detail": "三年坂 → 二年坂 → 八坂塔 → 石塀小路 → 高台寺 → 八坂神社 → 祇园 → 花见小路。",
      "places": [
        "Sannenzaka Kyoto",
        "Ninenzaka Kyoto",
        "Yasaka Pagoda Kyoto",
        "Ishibe Koji Kyoto",
        "Kodaiji Kyoto",
        "Yasaka Shrine Kyoto",
        "Hanamikoji Kyoto"
      ],
      "hidePlaces": true,
      "routeStops": [
        {
          "time": "12:30–13:30",
          "title": "三年坂 → 二年坂",
          "detail": "清水寺下山后沿石板坡道慢逛、拍照与看小店，预留约 1 小时。",
          "place": "Ninenzaka Kyoto"
        },
        {
          "time": "13:30–13:50",
          "title": "法观寺 · 八坂塔",
          "detail": "从二年坂步行约 5 分钟；沿街拍八坂塔，预留约 15 分钟。先按外观拍照，不安排登塔。",
          "place": "Yasaka Pagoda Kyoto"
        },
        {
          "time": "13:50–14:10",
          "title": "石塀小路",
          "detail": "从八坂塔步行约 5–10 分钟；穿过小路接宁宁之道，遵守现场拍摄标识。",
          "place": "Ishibe Koji Kyoto"
        },
        {
          "time": "14:10–15:10",
          "title": "高台寺 · 入内待定",
          "detail": "沿宁宁之道到高台寺；若入内参观预留约 1 小时，不入内则继续往八坂神社。",
          "place": "Kodaiji Kyoto",
          "visitInfo": {
            "paragraphs": [
              "09:00–17:30；17:00 停止入场。",
              "成人 ¥800 / 人；两人 ¥1,600。入口受付现场购票。",
              "10/14 不在秋季夜间特别参观期间；2026 年秋季夜间特别参观从 10/23 开始。"
            ],
            "links": [
              {
                "url": "https://www.kodaiji.com/haikan.html",
                "title": "官网 · 参观信息"
              }
            ]
          }
        },
        {
          "time": "15:20–15:50",
          "title": "八坂神社",
          "detail": "从高台寺步行约 10 分钟，参拜约 30 分钟。",
          "place": "Yasaka Shrine Kyoto",
          "visitInfo": {
            "paragraphs": [
              "全天开放，参拜免费，无需预约。"
            ],
            "links": [
              {
                "url": "https://www.yasaka-jinja.or.jp/access/",
                "title": "官网 · 参观信息"
              }
            ]
          }
        },
        {
          "time": "16:00–17:00",
          "title": "祇园 → 花见小路",
          "detail": "从八坂神社沿四条通走入祇园，步行约 5–10 分钟；花见小路与周边街巷慢逛约 1 小时。",
          "place": "Hanamikoji Kyoto"
        }
      ],
      "guides": [
        {
          "title": "东山步行路线 · 地图截图",
          "path": "assets/guides/kyoto-higashiyama/walking-map.jpg",
          "alt": "用户提供的清水寺、三年坂、二年坂、石塀小路至八坂神社步行路线截图"
        },
        {
          "title": "东山步行路线 · 攻略截图",
          "path": "assets/guides/kyoto-higashiyama/walking-route.jpg",
          "alt": "用户提供的清水寺至鸭川步行顺序与时长参考截图"
        }
      ]
    },
    {
      "time": "18:00–约 20:00",
      "title": "弘 祇园山名庵 · 烧肉晚餐",
      "status": "已预订",
      "type": "餐饮",
      "detail": "两人，18:00 已预订；从花见小路步行约 10–15 分钟，17:50 左右到店。",
      "place": "京やきにく 弘 祇園山名庵 京都市東山区弁財天町16",
      "hidePlaces": true,
      "visitInfo": {
        "summary": "订位与菜单",
        "paragraphs": [
          "营业 17:00–23:00；餐食最后点单 22:00，饮品 22:30。",
          "提供单点菜单；套餐信息未列在本次确认中。"
        ],
        "links": [
          {
            "url": "https://yakiniku-hiro.com/shop/yamanaan.php",
            "title": "HIRO 官网 · 菜单与店铺信息"
          },
          {
            "url": "https://yoyaku.toreta.in/yamanaan/",
            "title": "HIRO 官方订位"
          }
        ]
      },
      "confirmation": {
        "summary": "预约确认",
        "title": "弘祇园山名庵 · 10/14 两人预约确认",
        "note": "Kyoto Kaiseki Yakiniku (BBQ) HIRO Gion Yamana-an · Upcoming reservation。2026/10/14（周三）18:00（JST），2 位。确认信息未列出套餐。"
      }
    },
    {
      "time": "约 20:00–20:40",
      "title": "鸭川 · 晚饭后散步",
      "type": "游逛",
      "status": "预计",
      "detail": "弘祇园山名庵步行约 5–10 分钟到四条大桥，沿鸭川散步约 20–30 分钟。",
      "place": "Shijo Bridge Kyoto"
    }
  ],
  "meals": {
    "breakfast": "出发前简单早餐 · 待定",
    "lunch": "11:30 清水坂／三年坂附近 · 待定",
    "dinner": "18:00 · 弘 祇园山名庵烧肉 · 已预订"
  },
  "todo": []
},
    {
      "date": "2026-10-15",
      "city": "京都",
      "group": "京都",
      "title": "宇治抹茶，奈良看鹿与日落",
      "subtitle": "",
      "hotel": "kyoto",
      "tags": [
        "08:00 酒店出发",
        "17:23 奈良日落",
        "京都第 3 晚"
      ],
      "route": [
        "京都",
        "平等院",
        "宇治川",
        "宇治神社",
        "宇治上神社",
        "抹茶拉面",
        "中村藤吉 · 候选",
        "JR 奈良站",
        "春日大社",
        "东大寺",
        "若草山一重目",
        "近铁奈良站",
        "京都"
      ],
      "events": [
        {
          "time": "08:00–09:10",
          "title": "京都酒店 → 宇治 · 地铁 + JR 奈良线",
          "type": "交通",
          "status": "预计",
          "detail": "约 08:50–09:00 到 JR 宇治站，步行约 10–15 分钟到平等院。",
          "origin": "Mitsui Garden Hotel Kyoto Sanjo PREMIER 京都市中京区菱屋町45-1",
          "place": "Byodo-in Uji",
          "travelMode": "transit",
          "hidePlaces": true,
          "routeInsideSteps": true,
          "steps": [
            "08:00 出发，步行约 5–8 分钟到乌丸御池站；乘乌丸线往竹田方向到京都站，3 站约 6 分钟。",
            "京都站转 JR 奈良线，预留约 10–15 分钟；选停靠宇治的みやこ路快速，车程约 20–25 分钟，不用预约。",
            "约 08:50–09:00 到 JR 宇治站，从南口沿宇治桥通、平等院表参道步行约 10–15 分钟，09:10 左右到平等院。"
          ]
        },
        {
          "time": "09:10–11:30",
          "title": "宇治 · 平等院、宇治川与两座神社",
          "type": "游逛",
          "status": "预计",
          "detail": "平等院 → 橘桥 / 朝雾桥 → 宇治神社 → 宇治上神社 → 表参道午餐。",
          "routeStops": [
            {
              "time": "09:10–10:10",
              "title": "平等院",
              "detail": "庭园、凤凰堂外观与博物馆，预留约 1 小时。",
              "place": "Byodo-in Uji",
              "visitInfo": {
                "paragraphs": [
                  "庭园 08:45–17:30（17:15 停止入场）；博物馆 09:00–17:00（16:45 停止入场）。",
                  "成人 ¥700，含庭园与博物馆，现场购票。本次不排凤凰堂内部参观。"
                ],
                "links": [
                  {
                    "url": "https://www.byodoin.or.jp/guide/",
                    "title": "官方开放时间与门票"
                  }
                ]
              }
            },
            {
              "time": "10:10–10:30",
              "title": "宇治川 · 橘桥与朝雾桥",
              "detail": "从平等院步行过橘桥与朝雾桥，河边拍照后去宇治神社。",
              "place": "Asagiri Bridge Uji"
            },
            {
              "time": "10:30–10:50",
              "title": "宇治神社",
              "detail": "朝雾桥旁，参拜与看兔子御守约 20 分钟；境内免费、自由参拜。",
              "place": "Uji Shrine Kyoto",
              "visitInfo": {
                "paragraphs": [
                  "境内自由参拜；御守与御朱印至 16:30，无需预约。"
                ],
                "links": [
                  {
                    "url": "https://www.uji-jinja.com/access/index.html",
                    "title": "官方开放时间与门票"
                  }
                ]
              }
            },
            {
              "time": "10:55–11:10",
              "title": "宇治上神社",
              "detail": "从宇治神社步行约 5 分钟；参拜约 15 分钟。",
              "place": "Ujigami Shrine Kyoto",
              "visitInfo": {
                "paragraphs": [
                  "免费。开门 05:00–16:00；授与所 09:00–15:50。"
                ],
                "links": [
                  {
                    "url": "https://www.ujikamijinja.jp/cont4/main.html",
                    "title": "官方开放时间与门票"
                  }
                ]
              }
            },
            {
              "time": "11:10–11:30",
              "title": "回平等院表参道 · 午餐",
              "detail": "从宇治上神社步行约 15–20 分钟，过朝雾桥回西岸，去田中九商店平等院店。",
              "place": "田中九商店 平等院店 宇治蓮華9-1"
            }
          ],
          "guides": [
            {
              "title": "宇治 · 步行路线图",
              "path": "assets/guides/uji-nara/uji-route.svg",
              "alt": "宇治站、平等院、宇治川、宇治神社、宇治上神社、抹茶拉面与中村藤吉候选的步行顺序"
            },
            {
              "title": "宇治 / 奈良攻略截图 ①",
              "path": "assets/guides/uji-nara/guide-1.png",
              "alt": "用户提供的宇治与奈良一日游攻略"
            },
            {
              "title": "宇治 / 奈良攻略截图 ②",
              "path": "assets/guides/uji-nara/guide-2.png",
              "alt": "宇治步行路线与奈良景点攻略"
            }
          ],
          "visitInfo": {
            "summary": "打开宇治步行导航",
            "paragraphs": [],
            "links": [
              {
                "title": "JR 宇治站 → 平等院 · 步行",
                "url": "https://www.google.com/maps/dir/?api=1&origin=JR+Uji+Station+Kyoto&destination=Byodo-in+Uji&travelmode=walking"
              },
              {
                "title": "平等院 → 宇治川 → 两座神社",
                "url": "https://www.google.com/maps/dir/?api=1&origin=Byodo-in+Uji&destination=Ujigami+Shrine+Kyoto&travelmode=walking&waypoints=Asagiri+Bridge+Uji%7CUji+Shrine+Kyoto"
              },
              {
                "title": "宇治上神社 → 表参道午餐",
                "url": "https://www.google.com/maps/dir/?api=1&origin=Ujigami+Shrine+Kyoto&destination=%E7%94%B0%E4%B8%AD%E4%B9%9D%E5%95%86%E5%BA%97+%E5%B9%B3%E7%AD%89%E9%99%A2%E5%BA%97+%E5%AE%87%E6%B2%BB%E8%93%AE%E8%8F%AF9-1&travelmode=walking&waypoints=Asagiri+Bridge+Uji"
              }
            ]
          }
        },
        {
          "time": "11:30–12:15",
          "title": "宇治午餐 · 抹茶拉面（候选）",
          "type": "餐饮",
          "status": "待定",
          "detail": "田中九商店 平等院店，现场候位；用餐和排队共留 45 分钟。",
          "place": "田中九商店 平等院店 宇治蓮華9-1",
          "visitInfo": {
            "paragraphs": [
              "10:30–17:30，周三休息；10/15 周四可安排。不接受预约。",
              "抹茶面有盐味 / 酱油汤底，也有抹茶饺子；现场候位，长队就改附近简餐。"
            ],
            "links": [
              {
                "url": "https://tabelog.com/kyoto/A2607/A260701/26027071/",
                "title": "店铺营业与预约资料"
              }
            ],
            "summary": "营业时间与用餐详情"
          }
        },
        {
          "time": "12:15–12:50",
          "title": "中村藤吉本店 · 抹茶甜点与伴手礼（候选）",
          "type": "餐饮",
          "status": "待定",
          "detail": "午餐后步行约 10–15 分钟，回 JR 宇治站前顺路去；排队长就买外带。",
          "place": "中村藤吉本店 宇治壱番10",
          "hidePlaces": true,
          "visitInfo": {
            "summary": "营业、候位与路线",
            "paragraphs": [
              "本店咖啡厅 10:00–17:30（LO 16:30，受付至 16:00），不接受座位预约；会排队。",
              "不提前排开门队。堂食仅在候位短、时间够时安排；可选外带甜点或茶叶，12:50 前往车站。"
            ],
            "links": [
              {
                "title": "中村藤吉本店 · 官网",
                "url": "https://tokichi.jp/pages/honten-store-page"
              },
              {
                "title": "午餐 → 中村藤吉 → JR 宇治站",
                "url": "https://www.google.com/maps/dir/?api=1&origin=%E7%94%B0%E4%B8%AD%E4%B9%9D%E5%95%86%E5%BA%97+%E5%B9%B3%E7%AD%89%E9%99%A2%E5%BA%97+%E5%AE%87%E6%B2%BB%E8%93%AE%E8%8F%AF9-1&destination=JR+Uji+Station+Kyoto&travelmode=walking&waypoints=%E4%B8%AD%E6%9D%91%E8%97%A4%E5%90%89%E6%9C%AC%E5%BA%97+%E5%AE%87%E6%B2%BB%E5%A3%B1%E7%95%AA10"
              }
            ]
          }
        },
        {
          "time": "12:50–约 13:45",
          "title": "宇治 → JR 奈良站 · JR 奈良线",
          "type": "交通",
          "status": "预计",
          "detail": "步行去宇治站，JR 快速直达奈良，车程约 30–40 分钟。",
          "origin": "JR Uji Station Kyoto",
          "place": "JR Nara Station",
          "travelMode": "transit",
          "hidePlaces": true,
          "routeInsideSteps": true,
          "steps": [
            "12:50 左右到 JR 宇治站候车；目标约 13:00–13:10 乘奈良方向みやこ路快速，车程约 30–40 分钟。从中村藤吉本店到车站步行约 2–3 分钟。"
          ]
        },
        {
          "time": "约 13:45–16:40",
          "title": "奈良 · 春日大社、小鹿与东大寺",
          "type": "游逛",
          "status": "预计",
          "detail": "JR 奈良站步行出发 → 春日大社 → 奈良公园 → 东大寺 → 若草山南入口。",
          "routeStops": [
            {
              "time": "13:45–14:40",
              "title": "JR 奈良站 → 春日大社 · 步行",
              "detail": "约 13:35–13:50 到 JR 奈良站，走东口；沿三条通 → 兴福寺外侧 → 奈良公园 → 春日大社参道步行。公园边缘约 20 分钟，本殿前约 50–60 分钟。",
              "place": "Kasuga Taisha Nara",
              "visitInfo": {
                "summary": "步行导航与公交备选",
                "paragraphs": [
                  "目标 14:30–14:45 到春日大社。公交不必坐；若 JR 列车晚到或走累了，可改坐往春日大社本殿的公交，保留登山时间。"
                ],
                "links": [
                  {
                    "title": "JR 奈良站 → 春日大社 · 步行",
                    "url": "https://www.google.com/maps/dir/?api=1&origin=JR+Nara+Station&destination=Kasuga+Taisha+Nara&travelmode=walking&waypoints=Kofukuji+Nara"
                  }
                ]
              }
            },
            {
              "time": "14:40–15:15",
              "title": "春日大社",
              "detail": "先逛石灯笼参道与本殿，约 35 分钟；特别参拜看排队情况决定。",
              "place": "Kasuga Taisha Nara",
              "visitInfo": {
                "paragraphs": [
                  "10 月境内一般参拜 06:30–17:30，免费；特别参拜 09:00–16:00，¥700／人，现场购票。"
                ],
                "links": [
                  {
                    "url": "https://www.kasugataisha.or.jp/about/basic/",
                    "title": "官方开放时间与门票"
                  },
                  {
                    "title": "春日大社 · 参拜费用",
                    "url": "https://www.kasugataisha.or.jp/news/2024/14235/"
                  }
                ]
              }
            },
            {
              "time": "15:15–15:45",
              "title": "奈良公园",
              "detail": "往东大寺步行约 20–25 分钟，途中看鹿、拍照；预留约 30 分钟。",
              "place": "Nara Park"
            },
            {
              "time": "15:45–16:20",
              "title": "东大寺 · 大佛殿",
              "detail": "南大门、大佛殿，参观约 35 分钟。",
              "place": "Todai-ji Great Buddha Hall Nara",
              "visitInfo": {
                "paragraphs": [
                  "10 月大佛殿 07:30–17:30；成人 ¥800，现场现金购票，无需预约。"
                ],
                "links": [
                  {
                    "url": "https://www.todaiji.or.jp/information/haikan/",
                    "title": "官方开放时间与门票"
                  }
                ]
              }
            },
            {
              "time": "16:20–16:40",
              "title": "步行至若草山南入口",
              "detail": "从大佛殿步行约 15–20 分钟到山脚南入口；16:40 买票入山。",
              "place": "34.6843245,135.8470358"
            },
            {
              "time": "时间充裕才去",
              "title": "二月堂",
              "detail": "东大寺的木廊佛堂，可俯瞰奈良。绕行与参拜加约 25–30 分钟；至少提前半小时结束前面行程才加，16:40 仍需到南入口。",
              "place": "Todaiji Nigatsudo Nara",
              "visitInfo": {
                "paragraphs": [
                  "参拜免费，24 小时可参拜；平台不使用三脚架。"
                ],
                "links": [
                  {
                    "url": "https://www.todaiji.or.jp/information/nigatsudo/",
                    "title": "官方开放时间与门票"
                  }
                ]
              }
            }
          ],
          "guides": [
            {
              "title": "奈良 · 步行路线图",
              "path": "assets/guides/uji-nara/nara-route.svg",
              "alt": "从 JR 奈良步行至春日大社、东大寺和若草山，再到近铁奈良站回京都的路线"
            }
          ],
          "visitInfo": {
            "summary": "奈良步行导航",
            "paragraphs": [],
            "links": [
              {
                "title": "春日大社 → 东大寺 → 若草山南入口",
                "url": "https://www.google.com/maps/dir/?api=1&origin=Kasuga+Taisha+Nara&destination=34.6843245%2C135.8470358&travelmode=walking&waypoints=Todai-ji+Great+Buddha+Hall+Nara"
              }
            ]
          }
        },
        {
          "time": "16:40–17:55",
          "title": "若草山 · 一重目看日落",
          "type": "景点",
          "status": "预计",
          "detail": "一重目看日落，约 17:23；17:30 开始下山。",
          "hidePlaces": true,
          "routeStops": [
            {
              "time": "16:40–17:05",
              "title": "山脚南入口 → 一重目",
              "detail": "南入口现场买票，¥150 / 人；沿南侧步道上行约 500 米，预留 20–30 分钟。",
              "place": "34.6843245,135.8470358"
            },
            {
              "time": "17:05–17:30",
              "title": "日落定位 · 若草山一重目",
              "detail": "定位 34.6873838, 135.8485886；在一重目西向开阔处看奈良市区与日落，不继续登三重目。",
              "place": "34.6873838,135.8485886",
              "mapUrl": "https://www.google.com/maps/search/?api=1&query=34.6873838,135.8485886&query_place_id=ChIJI4oSYwA5AWARXQvHwYEUlWA"
            },
            {
              "time": "17:30–17:55",
              "title": "下山 → 出口专用门",
              "detail": "下行约 20–30 分钟，按官方图走南北入口之间的出口专用门；17:00 后仍可从这里离山。"
            }
          ],
          "routeSummary": "展开入口、日落定位与上下山时间",
          "visitInfo": {
            "summary": "门票、入口时间与地图",
            "paragraphs": [
              "南入口 09:00–17:00；北入口 09:00–16:30。本次走南入口，16:40 到达；山脚南入口地图定位为 34.6843245, 135.8470358。",
              "日落约 17:23，17:30 下山；带手机照明。雨天不登山。山顶、山顶停车场和山顶入山料金所是三重目方向，这次不要导航到那里。"
            ],
            "links": [
              {
                "title": "山脚南入口 · 精确定位",
                "url": "https://www.google.com/maps/search/?api=1&query=34.6843245,135.8470358"
              },
              {
                "title": "一重目 · 日落观景定位",
                "url": "https://www.google.com/maps/search/?api=1&query=34.6873838,135.8485886&query_place_id=ChIJI4oSYwA5AWARXQvHwYEUlWA"
              },
              {
                "title": "若草山官方步道与出口地图",
                "url": "https://www.pref.nara.lg.jp/documents/2378/20251023155602.pdf"
              },
              {
                "title": "若草山 · 官方参观信息",
                "url": "https://www.pref.nara.lg.jp/site/park/2585.html"
              },
              {
                "title": "10 月奈良日落时间",
                "url": "https://eco2.mtk.nao.ac.jp/koyomi/dni/2026/s3010.html"
              }
            ]
          },
          "guides": [
            {
              "title": "若草山 · 官方步道图（入口 / 一重目 / 出口）",
              "path": "assets/guides/uji-nara/wakakusa-official-map.png",
              "alt": "若草山保胜会官方地图，标明南北入口、一重目、三重目与17点后出口专用门"
            }
          ]
        },
        {
          "time": "17:55–18:40",
          "title": "若草山山脚 → 近铁奈良站 · 步行",
          "type": "交通",
          "status": "预计",
          "detail": "山脚到车站约 35–45 分钟；从一重目算起，下山加走到车站共约 55–75 分钟。",
          "origin": "34.6843245,135.8470358",
          "place": "Kintetsu Nara Station",
          "travelMode": "walking",
          "hidePlaces": true,
          "routeInsideSteps": true,
          "steps": [
            "17:55 左右离山，经奈良公园 → 登大路 → 近铁奈良站 / 东向商店街，预计 18:35–18:40 到。",
            "累了可从山脚步行约 10–15 分钟到「東大寺大仏殿・春日大社前」，乘近铁奈良站方向公交；候车时间另加。"
          ]
        },
        {
          "time": "18:40–19:30",
          "title": "晚餐 · 随当天心情选",
          "type": "餐饮",
          "status": "待定",
          "detail": "近铁奈良站 / 东向商店街附近找饭，不预约；也可直接回京都再吃。",
          "place": "Higashimuki Shopping Street Nara"
        },
        {
          "time": "19:30–约 20:50",
          "title": "奈良 → 京都酒店",
          "type": "交通",
          "status": "预计",
          "detail": "候选 19:46 近铁急行，20:43 直达乌丸御池；步行回酒店。",
          "origin": "Kintetsu Nara Station",
          "place": "Mitsui Garden Hotel Kyoto Sanjo PREMIER 京都市中京区菱屋町45-1",
          "travelMode": "transit",
          "hidePlaces": true,
          "routeInsideSteps": true,
          "steps": [
            "19:30 左右离开晚餐店，走到「近鉄奈良駅」，19:35–19:40 前进站；不是 JR 奈良站。",
            "候选 19:46「急行 国際会館行き」→ 20:43「烏丸御池」，57 分钟直达。经过大和西大寺、竹田都不用下车；列车继续进入京都地铁乌丸线。可刷 Suica，无需特急券。",
            "乌丸御池下车，北改札口出站后步行约 5–8 分钟，约 20:50 到酒店。若错过直通急行，选京都方向列车；到近铁京都站后再转乌丸线。"
          ],
          "visitInfo": {
            "summary": "回程班次与打车备选",
            "paragraphs": [
              "“约一小时”指近铁奈良 → 乌丸御池的列车时间。从一重目开始下山到酒店，不吃晚饭也要约 2–2.5 小时，包含下山、步行到站、候车和列车。",
              "可安排奈良 → 京都的跨城出租车。奈良近铁出租车有京都站直送服务，官网预留 1.5–2 小时；送京都三条酒店需另询价，不保证比铁路快。",
              "若打车，请酒店或出租车公司提前安排，从山脚可停车的道路接；一重目草坡不能上车。临时叫车要确认司机接单、目的地和费用。"
            ],
            "links": [
              {
                "title": "近铁官方 · 19:46 直通急行",
                "url": "https://eki.kintetsu.co.jp/norikae/T7?dw=0&sf=5212&time=1940&tx=1-306"
              },
              {
                "title": "奈良近铁出租车 · 京都直送",
                "url": "https://www.narakintaxi.co.jp/sightseeing/fixed_course.html"
              }
            ]
          }
        }
      ],
      "meals": {
        "breakfast": "酒店 / 附近简餐",
        "lunch": "11:30 宇治抹茶拉面；饭后抹茶甜点待定",
        "dinner": "奈良现场选店 / 回京都吃 · 不预约"
      },
      "todo": []
    },
    {
  "date": "2026-10-16",
  "city": "大阪",
  "group": "大阪",
  "title": "大阪南区，18:30 まほろば蟹宴",
  "subtitle": "",
  "hotel": "osaka",
  "tags": [
    "京都 → 大阪",
    "09:45 寄存行李",
    "18:30 まほろば · 已预订",
    "大阪第 1 晚"
  ],
  "route": [
    "梅田酒店",
    "通天阁",
    "おおやま · 牛肠锅午餐",
    "难波八阪神社",
    "黑门市场",
    "道顿堀",
    "心斋桥",
    "橘子街",
    "割烹まほろば 蟹"
  ],
  "events": [
    {
      "time": "08:05–08:20",
      "title": "京都酒店退房",
      "type": "住宿",
      "status": "预计",
      "detail": "早餐后带齐行李，到前台退房。"
    },
    {
      "time": "08:20–约 09:45",
      "title": "京都酒店 → 大阪酒店 · 阪急直达",
      "type": "交通",
      "status": "预计",
      "detail": "步行到乌丸站，阪急京都线直达大阪梅田，再步行到酒店；门到门约 85 分钟。",
      "origin": "Mitsui Garden Hotel Kyoto Sanjo PREMIER 京都市中京区菱屋町45-1",
      "place": "Hotel Hankyu RESPIRE OSAKA 大阪市北区大深町1-1",
      "travelMode": "transit",
      "hidePlaces": true,
      "routeInsideSteps": true,
      "steps": [
        "08:20 酒店出发，带行李步行并下到乌丸站站台，预留 15–20 分钟；按电梯指示进站。",
        "候选班次：08:46 乌丸 → 09:32 大阪梅田，阪急京都线「特急」，直达约 46 分钟。",
        "普通车刷 Suica 进出站，不用预约或另买特急券；有空座就坐。PRiVACE 指定席需另买座位券；行李放身边，不占通道。",
        "大阪梅田下车，出站后步行约 5 分钟到阪急大阪龙仕柏酒店，乘电梯到 9F 前台；出站至前台共预留约 10–15 分钟。"
      ]
    },
    {
      "time": "09:45–10:05",
      "title": "大阪酒店 · 寄存行李",
      "type": "住宿",
      "status": "预计",
      "detail": "到 9F 前台寄存行李，晚饭后回来入住；15:00 起可入住。",
      "hotel": "osaka"
    },
    {
      "time": "10:05–10:45",
      "title": "梅田酒店 → 通天阁",
      "type": "交通",
      "status": "预计",
      "detail": "御堂筋线直达动物园前，含步行约 35–40 分钟。",
      "origin": "Hotel Hankyu RESPIRE OSAKA 大阪市北区大深町1-1",
      "place": "Tsutenkaku Osaka",
      "travelMode": "transit",
      "hidePlaces": true,
      "routeInsideSteps": true,
      "steps": [
        "从酒店步行约 8–10 分钟到御堂筋线梅田站，乘往天王寺 / 中百舌鸟方向的车，到动物园前，车程约 20–25 分钟。",
        "动物园前站出站，穿过新世界，步行约 8–10 分钟到通天阁。"
      ]
    },
    {
      "time": "10:45–12:30",
      "title": "通天阁 / 新世界 → 牛肠锅午餐",
      "type": "游逛",
      "status": "预计",
      "detail": "通天阁外观拍照，11:40 在难波 Parks 吃牛肠锅。",
      "routeStops": [
        {
          "time": "10:45–11:15",
          "title": "通天阁与新世界",
          "detail": "塔下街景与通天阁外观拍照，约 30 分钟。",
          "place": "Tsutenkaku Osaka",
          "visitInfo": {
            "paragraphs": [
              "仅外观拍照，不登塔；免费，无需购票。"
            ],
            "links": [
              {
                "url": "https://tsutenkaku.co.jp/annai/index.html",
                "title": "官方开放时间与门票"
              }
            ]
          }
        },
        {
          "time": "11:15–11:40",
          "title": "步行 → 难波 Parks 6F",
          "detail": "通天阁到难波 Parks 步行约 20 分钟，再乘电梯到 6F；共预留约 25 分钟。",
          "place": "博多もつ鍋 おおやま なんば店 大阪市浪速区難波中2-10-70 なんばパークス6F"
        },
        {
          "time": "11:40–12:30",
          "title": "博多もつ鍋 おおやま なんば店 · 牛肠锅午餐",
          "detail": "未预约，到店候位；用餐预留约 50 分钟。",
          "place": "博多もつ鍋 おおやま なんば店 大阪市浪速区難波中2-10-70 なんばパークス6F",
          "visitInfo": {
            "summary": "营业时间、菜单与订位",
            "paragraphs": [
              "11:00–23:00；午餐菜单 11:00–16:00。难波 Parks 6F，休息日随商场。",
              "可 walk-in，满座需候位；也可在 TableCheck 只订午餐座位，当天选菜。",
              "官网午餐牛肠锅定食 ¥2,068 / 人（含税）：牛肠锅、明太子、柚子萝卜，搭配杂烩面或米饭。味噌、酱油、水炊风三种汤底；以当天菜单为准。"
            ],
            "links": [
              {
                "url": "https://www.motu-ooyama.com/shop/nanba/",
                "title": "おおやま · 官方菜单与地址"
              },
              {
                "url": "https://www.tablecheck.com/ja/shops/ooyama-nanba/reserve",
                "title": "TableCheck · 午餐订位"
              },
              {
                "url": "https://r.gnavi.co.jp/plan/kr6spbep0000/course/",
                "title": "店家菜单 · 无预约到店说明"
              }
            ]
          }
        }
      ]
    },
    {
      "time": "12:30–18:20",
      "title": "难波八阪神社 → 黑门市场 → 道顿堀 → 心斋桥 → 橘子街",
      "type": "游逛",
      "status": "预计",
      "detail": "午餐后从难波 Parks 出发；17:50 左右从橘子街步行去まほろば。",
      "routeStops": [
        {
          "time": "12:30–12:45",
          "title": "步行 → 难波八阪神社",
          "detail": "从难波 Parks 6F 下楼，步行到八阪神社，共约 10–15 分钟。",
          "place": "Namba Yasaka Shrine Osaka"
        },
        {
          "time": "12:45–13:10",
          "title": "难波八阪神社",
          "detail": "狮子殿与境内拍照，约 25 分钟。",
          "place": "Namba Yasaka Shrine Osaka",
          "visitInfo": {
            "paragraphs": [
              "06:00–17:00，免费，无需预约。"
            ],
            "links": [
              {
                "url": "https://www.ittoko-minami.net/spots/namba-yasaka-jinja",
                "title": "官方开放时间与门票"
              }
            ]
          }
        },
        {
          "time": "13:10–13:50",
          "title": "黑门市场 · 逛逛",
          "detail": "从八阪神社步行约 20–25 分钟，13:35–13:50 逛市场。",
          "place": "Kuromon Market Osaka"
        },
        {
          "time": "13:50–14:40",
          "title": "道顿堀",
          "detail": "从黑门市场步行约 10–15 分钟；戎桥、格力高广告牌拍照约 30 分钟。",
          "place": "Dotonbori Glico Sign Osaka"
        },
        {
          "time": "14:40–16:00",
          "title": "心斋桥",
          "detail": "沿心斋桥筋北上逛街，约 1 小时 20 分钟。",
          "place": "Shinsaibashi-suji Shopping Street Osaka"
        },
        {
          "time": "16:00–17:50",
          "title": "橘子街",
          "detail": "从心斋桥步行约 10–15 分钟到堀江，逛 Orange Street 的服装与小店。",
          "place": "Orange Street Osaka"
        },
        {
          "time": "17:50–18:20",
          "title": "橘子街 → まほろば",
          "detail": "步行约 20–25 分钟，18:20 左右到店。",
          "place": "割烹まほろば 蟹 東心斎橋1-4-20"
        }
      ]
    },
    {
      "time": "18:30–约 21:00",
      "title": "割烹まほろば 蟹 · 螃蟹晚餐",
      "type": "餐饮",
      "status": "已预订",
      "detail": "两位，Mahoroba Crab Course；18:20 左右到店，用餐预留约 2–2.5 小时。",
      "place": "割烹まほろば 蟹 東心斎橋1-4-20",
      "hidePlaces": true,
      "confirmation": {
        "summary": "套餐详情与预约确认",
        "title": "まほろば · 10/16 18:30 两人预约确认",
        "note": "2026/10/16（周五）18:30 JST，2 位，Mahoroba Crab Course。到店出示预约记录或确认邮件。确认截图未列出价格、席位类型及付款方式。",
        "images": [
          {
            "path": "assets/bookings/restaurant-mahoroba.svg",
            "title": "まほろば · 10/16 18:30 两人预约确认",
            "label": "查看预约确认信息"
          }
        ]
      },
      "visitInfo": {
        "summary": "地址与步行导航",
        "paragraphs": [
          "地址：大阪府大阪市中央区東心斎橋1-4-20，1F。",
          "从橘子街步行约 20–25 分钟。"
        ],
        "links": [
          {
            "url": "https://www.google.com/maps/dir/?api=1&origin=Orange+Street+Osaka&destination=%E5%89%B2%E7%83%B9%E3%81%BE%E3%81%BB%E3%82%8D%E3%81%B0+%E8%9F%B9+%E6%9D%B1%E5%BF%83%E6%96%8E%E6%A9%8B1-4-20&travelmode=walking",
            "title": "橘子街 → まほろば · 步行导航"
          },
          {
            "url": "https://tabelog.com/osaka/A2701/A270201/27154942/",
            "title": "まほろば · 店铺信息"
          }
        ]
      }
    },
    {
      "time": "约 21:00–21:45",
      "title": "晚餐后 → 梅田酒店入住",
      "type": "交通",
      "status": "预计",
      "detail": "步行到心斋桥站，御堂筋线直达梅田；取行李入住。",
      "origin": "Shinsaibashi Station Osaka",
      "place": "Hotel Hankyu RESPIRE OSAKA 大阪市北区大深町1-1",
      "travelMode": "transit",
      "hidePlaces": true,
      "routeInsideSteps": true,
      "steps": [
        "まほろば到心斋桥站步行约 8–12 分钟；御堂筋线往江坂 / 千里中央方向到梅田，约 12–15 分钟，再走约 8–10 分钟回酒店。"
      ]
    }
  ],
  "meals": {
    "breakfast": "酒店 / 附近简餐",
    "lunch": "11:40 おおやま难波店 · 牛肠锅 · 未预约",
    "dinner": "18:30 · 割烹まほろば 蟹 · 已预订"
  },
  "todo": []
},
    {
      "date": "2026-10-17",
      "city": "大阪",
      "group": "大阪",
      "title": "大阪城与梅田购物日",
      "subtitle": "",
      "hotel": "osaka",
      "tags": [
        "大阪城 + 梅田",
        "大阪第 2 晚"
      ],
      "route": [
        "大阪城",
        "JO-TERRACE 午餐",
        "梅田",
        "Grand Front",
        "LUCUA",
        "友都八喜 / 百货（备选）"
      ],
      "events": [
        {
          "time": "09:00–09:35",
          "title": "梅田酒店 → 大阪城公园",
          "type": "交通",
          "status": "预计",
          "detail": "JR 大阪环状线到森之宫，含步行约 30–35 分钟。",
          "origin": "Hotel Hankyu RESPIRE OSAKA 大阪市北区大深町1-1",
          "place": "Morinomiya Station Osaka",
          "travelMode": "transit",
          "hidePlaces": true,
          "routeInsideSteps": true,
          "steps": [
            "步行约 5–10 分钟到 JR 大阪站，乘大阪环状线外环「京桥・鹤桥方面」，森之宫站下车，约 15 分钟。",
            "森之宫站出站后步行约 5 分钟进入公园，再往护城河和天守阁方向走。"
          ]
        },
        {
          "time": "09:35–11:45",
          "title": "大阪城公园 · 护城河与天守阁",
          "type": "景点",
          "status": "预计",
          "detail": "从森之宫侧进，经过护城河、天守阁外观，再往大阪城公园站一侧走。入天守阁待定。",
          "place": "Osaka Castle",
          "visitInfo": {
            "paragraphs": [
              "公园、护城河与天守阁外观免费。天守阁入内待定：09:00–18:00（17:30 停止入场），成人 ¥1,200；现场或官网购票。",
              "若入天守阁，在上午这段里留约 1 小时，缩短公园散步；中午仍在大阪城附近吃饭。"
            ],
            "links": [
              {
                "url": "https://www.osakacastle.net/guide/?lang=ja",
                "title": "官方开放时间与门票"
              }
            ]
          }
        },
        {
          "time": "11:45–13:00",
          "title": "JO-TERRACE · 大阪城附近午餐",
          "type": "餐饮",
          "status": "待定",
          "detail": "从天守阁步行约 15–20 分钟；12:00–13:00 吃午餐，选一家。",
          "place": "JO-TERRACE OSAKA",
          "routeStops": [
            {
              "time": "午餐候选",
              "title": "名代 千房 · 大阪烧",
              "detail": "想吃大阪特色就选大阪烧 / 炒面，约 45–60 分钟。",
              "place": "名代 千房 JO-TERRACE OSAKA",
              "visitInfo": {
                "paragraphs": [
                  "周六 11:00–20:00，最后点单 19:00。"
                ],
                "links": [
                  {
                    "url": "https://jo-terrace.jp/shop/",
                    "title": "官方开放时间与门票"
                  }
                ],
                "summary": "营业时间与用餐详情"
              }
            },
            {
              "time": "午餐候选",
              "title": "さち福や · 日式定食",
              "detail": "烤鱼、炸物等定食，适合简单吃一顿，约 40–50 分钟。",
              "place": "さち福や JO-TERRACE OSAKA",
              "visitInfo": {
                "paragraphs": [
                  "11:00–21:00，最后点单 20:30。"
                ],
                "links": [
                  {
                    "url": "https://jo-terrace.jp/shop/",
                    "title": "官方开放时间与门票"
                  }
                ],
                "summary": "营业时间与用餐详情"
              }
            }
          ],
          "routeSummary": "午餐候选与店铺详情"
        },
        {
          "time": "13:00–13:30",
          "title": "大阪城公园站 → 梅田",
          "type": "交通",
          "status": "预计",
          "detail": "午餐区步行约 3–5 分钟到车站，JR 回大阪站约 10 分钟。",
          "origin": "Osakajokoen Station",
          "place": "Osaka Station",
          "travelMode": "transit",
          "hidePlaces": true,
          "routeInsideSteps": true,
          "steps": [
            "乘大阪环状线内环「大阪・樱之宫方面」，经京桥、樱之宫、天满到大阪站。"
          ]
        },
        {
          "time": "13:30–18:30",
          "title": "梅田购物 · 商场自由选",
          "type": "购物",
          "status": "预计",
          "detail": "主要逛 Grand Front、LUCUA；百货、HEP FIVE 与友都八喜作为备选。",
          "routeStops": [
            {
              "time": "13:30–15:00",
              "title": "Grand Front Osaka",
              "detail": "大阪站北侧，服饰、户外品牌与生活用品；约 1.5 小时。",
              "place": "Grand Front Osaka",
              "visitInfo": {
                "paragraphs": [
                  "商店 11:00–21:00。"
                ],
                "links": [
                  {
                    "url": "https://www.gfo-sc.jp/",
                    "title": "商场官网与营业时间"
                  }
                ],
                "summary": "营业时间与店铺资料"
              }
            },
            {
              "time": "15:00–16:30",
              "title": "LUCUA / LUCUA 1100",
              "detail": "从 Grand Front 步行约 5 分钟，逛服装与杂货；约 1.5 小时。",
              "place": "LUCUA Osaka",
              "visitInfo": {
                "paragraphs": [
                  "商店 10:30–20:30。"
                ],
                "links": [
                  {
                    "url": "https://www.lucua.jp/",
                    "title": "商场官网与营业时间"
                  }
                ],
                "summary": "营业时间与店铺资料"
              }
            },
            {
              "time": "16:30–18:30",
              "title": "后半段 · 从下面选店",
              "detail": "按购物清单挑 1–2 家，累了可先回酒店放东西休息。",
              "place": "Osaka Station"
            },
            {
              "time": "备选",
              "title": "阪急百货 · 梅田本店",
              "detail": "百货、美妆与伴手礼。",
              "place": "Hankyu Umeda Main Store Osaka",
              "visitInfo": {
                "paragraphs": [
                  "百货 10:00–20:00。"
                ],
                "links": [
                  {
                    "url": "https://www.hankyu-dept.co.jp/",
                    "title": "商场官网与营业时间"
                  }
                ],
                "summary": "营业时间与店铺资料"
              }
            },
            {
              "time": "备选",
              "title": "大丸百货 · 梅田店",
              "detail": "大阪站南侧；作为百货购物备选。",
              "place": "Daimaru Umeda Osaka",
              "visitInfo": {
                "paragraphs": [
                  "10:00–20:00；部分楼层改装中，先看楼层目录。"
                ],
                "links": [
                  {
                    "url": "https://www.daimaru.co.jp/umedamise/",
                    "title": "商场官网与营业时间"
                  }
                ],
                "summary": "营业时间与店铺资料"
              }
            },
            {
              "time": "备选",
              "title": "友都八喜 · 梅田",
              "detail": "酒店同栋附近，电子产品、相机、玩具；买完方便回酒店。",
              "place": "Yodobashi Camera Multimedia Umeda",
              "visitInfo": {
                "paragraphs": [
                  "09:30–22:00。"
                ],
                "links": [
                  {
                    "url": "https://global.yodobashi/stores/yodobashi_camera/umeda/",
                    "title": "商场官网与营业时间"
                  }
                ],
                "summary": "营业时间与店铺资料"
              }
            },
            {
              "time": "备选",
              "title": "HEP FIVE",
              "detail": "年轻服饰与动漫周边，购物备选。",
              "place": "HEP FIVE Osaka",
              "visitInfo": {
                "paragraphs": [
                  "商店 11:00–21:00。"
                ],
                "links": [
                  {
                    "url": "https://www.hepfive.jp/",
                    "title": "商场官网与营业时间"
                  }
                ],
                "summary": "营业时间与店铺资料"
              }
            }
          ],
          "guide": {
            "title": "梅田购物攻略截图",
            "path": "assets/guides/osaka-umeda/shopping.png",
            "alt": "用户提供的梅田商场购物攻略"
          },
          "routeSummary": "购物顺序与商场详情"
        },
        {
          "time": "18:30–20:00",
          "title": "梅田晚餐 · 待定",
          "type": "餐饮",
          "status": "待定",
          "detail": "梅田附近吃晚饭；饭后回酒店整理行李。"
        }
      ],
      "meals": {
        "breakfast": "酒店 / 附近简餐",
        "lunch": "12:00 JO-TERRACE · 大阪烧 / 定食",
        "dinner": "18:30 梅田附近 · 待定"
      },
      "todo": []
    },
    {
      "date": "2026-10-18",
      "city": "离境",
      "group": "大阪",
      "title": "从关西机场，各自回家",
      "subtitle": "",
      "hotel": null,
      "checkoutHotel": "osaka",
      "tags": [
        "14:00 北京",
        "14:20 上海",
        "约 10:20 到 T1"
      ],
      "route": [
        "梅田酒店",
        "大阪站",
        "HARUKA 直达",
        "关西机场 T1",
        "北京 / 上海"
      ],
      "events": [
        {
          "time": "07:30–08:45",
          "title": "早餐、整理行李与退房",
          "type": "住宿",
          "status": "预计",
          "detail": "07:30–08:15 早餐，08:30–08:45 到前台退房。",
          "hotel": "osaka"
        },
        {
          "time": "08:45–09:10",
          "title": "酒店 → 大阪站地下 HARUKA 站台",
          "type": "交通",
          "status": "预计",
          "detail": "带行李步行、找入口和下到站台约 20–25 分钟。",
          "origin": "Hotel Hankyu RESPIRE OSAKA 大阪市北区大深町1-1",
          "place": "Osaka Station Umekita Underground Gate",
          "travelMode": "transit",
          "hidePlaces": true,
          "routeInsideSteps": true,
          "steps": [
            "08:45 从 9F 前台出发，乘电梯离开酒店，向 JR 大阪站「うめきた地下口」走；酒店地面至地下口约 6 分钟。",
            "带已取好的 HARUKA 车票进站，跟随「关西机场」指示到地下 21 号站台；09:10 前到车厢候车位置。"
          ]
        },
        {
          "time": "09:19–约 10:04",
          "title": "HARUKA 13 · 大阪 → 关西机场（候选）",
          "type": "交通",
          "status": "待预订",
          "detail": "约 45 分钟直达，普通车指定席待购买。",
          "place": "Kansai Airport Station",
          "hidePlaces": true,
          "visitInfo": {
            "paragraphs": [
              "候选 HARUKA 13：大阪 09:19 → 关西机场约 10:04，车程 45 分钟；当前按周末官方时刻参考，车票尚未预订。",
              "建议普通车指定席，有行李区；不能只刷 IC 卡乘坐，需有效 HARUKA 车票 / 特急券。",
              "符合短期滞在资格可网上买 HARUKA 单程优惠票：大阪 → 机场 ¥1,800／人，含普通车指定席。到大阪后提前取票，别留到出发早上。",
              "备选出租车：酒店直达 T1，约 60–90 分钟，09:00 前出发；费用按接送报价或计价器，另计高速费。行李多、想门到门时再选。",
              "备选机场巴士：阪急三番街上车 → T1，车程约 60 分钟，¥1,800／人，行李放行李舱；先到先乘，不预约，路上与等车另留时间。"
            ],
            "links": [
              {
                "url": "https://www.westjr.co.jp/travel-information/en/tickets-passes/oneway/haruka/",
                "title": "JR 西日本 · HARUKA 购票"
              },
              {
                "title": "JR 官方周末班次参考",
                "url": "https://timetable.jr-odekake.net/train-timetable/21791?date=20260418"
              },
              {
                "title": "关西机场巴士 · 梅田路线",
                "url": "https://www.kate.co.jp/timetable/detail/UM/"
              }
            ]
          }
        },
        {
          "time": "10:04–10:20",
          "title": "机场站 → T1 国际出发柜台",
          "type": "交通",
          "status": "预计",
          "detail": "步行约 10–15 分钟到 T1 4F；比 14:00 航班提前约 3 小时 40 分钟。",
          "origin": "Kansai Airport Station",
          "place": "Kansai International Airport Terminal 1",
          "travelMode": "transit",
          "hidePlaces": true,
          "routeInsideSteps": true,
          "steps": [
            "机场站出闸走连通桥到 T1，乘电梯到 4F 国际出发大厅。不要往 T2 接驳巴士方向走。"
          ]
        },
        {
          "time": "10:20–12:00",
          "title": "T1 · 值机、托运与出境",
          "type": "交通",
          "status": "预计",
          "detail": "各自找国航 / 东航柜台，柜台开放后值机托运，再过安检与出境。"
        },
        {
          "time": "12:00–13:00",
          "title": "免税购物 / 午餐",
          "type": "购物",
          "status": "预计",
          "detail": "出境后逛免税店，简单吃午餐；13:00 起分别前往登机口。"
        },
        {
          "time": "14:00",
          "title": "CA928 · 大阪 → 北京",
          "type": "航班",
          "status": "已预订",
          "detail": "KIX T1 起飞，北京当地时间 16:30 抵达 PEK T3。",
          "flight": "beijing"
        },
        {
          "time": "14:20",
          "title": "MU516 · 大阪 → 上海",
          "type": "航班",
          "status": "已预订",
          "detail": "KIX T1 起飞，上海当地时间 16:10 抵达 PVG T1。",
          "flight": "shanghai"
        }
      ],
      "meals": {
        "breakfast": "酒店 / 附近简餐",
        "lunch": "机场 / 机上用餐",
        "dinner": "抵达后自行安排"
      },
      "todo": [
        "购买 10/18 HARUKA 指定席并取票"
      ]
    }
  ]
};
