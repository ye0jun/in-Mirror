function Subway() {
    this.show = true;
    this.container = new ImContainer({
        'debug': false,
        'name' : 'ui_subway'
    });
    this.container.setPosition({
        x: 800,
        y: 500
    });
    this.lastUpdateTime = Date.now();
    this.data = {"교대":[{"station_id":"0330","line_number":"3"},{"station_id":"0223","line_number":"2"}],"남부터미널":[{"station_id":"0331","line_number":"3"}],"양재":[{"station_id":"0332","line_number":"3"},{"station_id":"4308","line_number":"S"}],"매봉":[{"station_id":"0333","line_number":"3"}],"도곡":[{"station_id":"0334","line_number":"3"},{"station_id":"1025","line_number":"B"}],"대치":[{"station_id":"0335","line_number":"3"}],"대청":[{"station_id":"0337","line_number":"3"}],"일원":[{"station_id":"0338","line_number":"3"}],"수서":[{"station_id":"0339","line_number":"3"},{"station_id":"1030","line_number":"B"}],"가락시장":[{"station_id":"0340","line_number":"3"},{"station_id":"2818","line_number":"8"}],"경찰병원":[{"station_id":"0341","line_number":"3"}],"오금":[{"station_id":"0342","line_number":"3"},{"station_id":"2558","line_number":"5"}],"당고개":[{"station_id":"0409","line_number":"4"}],"상계":[{"station_id":"0410","line_number":"4"}],"노원":[{"station_id":"0411","line_number":"4"},{"station_id":"2715","line_number":"7"}],"쌍문":[{"station_id":"0413","line_number":"4"}],"수유":[{"station_id":"0414","line_number":"4"}],"미아":[{"station_id":"0415","line_number":"4"}],"미아사거리":[{"station_id":"0416","line_number":"4"}],"길음":[{"station_id":"0417","line_number":"4"}],"한성대입구":[{"station_id":"0419","line_number":"4"}],"혜화":[{"station_id":"0420","line_number":"4"}],"동대문":[{"station_id":"0421","line_number":"4"},{"station_id":"0155","line_number":"1"}],"동대문역사문화공원":[{"station_id":"0422","line_number":"4"},{"station_id":"0205","line_number":"2"},{"station_id":"2537","line_number":"5"}],"충무로":[{"station_id":"0423","line_number":"4"},{"station_id":"0321","line_number":"3"}],"명동":[{"station_id":"0424","line_number":"4"}],"회현":[{"station_id":"0425","line_number":"4"}],"서울":[{"station_id":"0426","line_number":"4"},{"station_id":"0150","line_number":"1"},{"station_id":"1291","line_number":"A"}],"삼각지":[{"station_id":"0428","line_number":"4"},{"station_id":"2629","line_number":"6"}],"신용산":[{"station_id":"0429","line_number":"4"}],"이촌":[{"station_id":"0430","line_number":"4"},{"station_id":"1008","line_number":"K"}],"동작":[{"station_id":"0431","line_number":"4"},{"station_id":"4120","line_number":"9"}],"총신대입구(이수)":[{"station_id":"0432","line_number":"4"},{"station_id":"2738","line_number":"7"}],"남태령":[{"station_id":"0434","line_number":"4"}],"남영":[{"station_id":"1002","line_number":"1"}],"노량진":[{"station_id":"1004","line_number":"1"},{"station_id":"4117","line_number":"9"}],"영등포":[{"station_id":"1006","line_number":"1"}],"신도림":[{"station_id":"1007","line_number":"1"},{"station_id":"0234","line_number":"2"}],"서빙고":[{"station_id":"1009","line_number":"K"}],"한남":[{"station_id":"1010","line_number":"K"}],"응봉":[{"station_id":"1012","line_number":"K"}],"왕십리":[{"station_id":"1013","line_number":"K"},{"station_id":"2541","line_number":"5"},{"station_id":"1845","line_number":"B"},{"station_id":"0208","line_number":"2"}],"외대앞":[{"station_id":"1016","line_number":"1"}],"신이문":[{"station_id":"1017","line_number":"1"}],"석계":[{"station_id":"1018","line_number":"1"},{"station_id":"2645","line_number":"6"}],"월계":[{"station_id":"1020","line_number":"1"}],"녹천":[{"station_id":"1021","line_number":"1"}],"시청":[{"station_id":"0151","line_number":"1"},{"station_id":"0201","line_number":"2"}],"종각":[{"station_id":"0152","line_number":"1"}],"종로3가":[{"station_id":"0153","line_number":"1"},{"station_id":"0319","line_number":"3"},{"station_id":"2535","line_number":"5"}],"종로5가":[{"station_id":"0154","line_number":"1"}],"신설동":[{"station_id":"0156","line_number":"1"},{"station_id":"0246","line_number":"2"},{"station_id":"4713","line_number":"UI"}],"제기동":[{"station_id":"0157","line_number":"1"}],"동묘앞":[{"station_id":"0159","line_number":"1"},{"station_id":"2637","line_number":"6"}],"을지로입구":[{"station_id":"0202","line_number":"2"}],"을지로3가":[{"station_id":"0203","line_number":"2"},{"station_id":"0320","line_number":"3"}],"을지로4가":[{"station_id":"0204","line_number":"2"},{"station_id":"2536","line_number":"5"}],"상왕십리":[{"station_id":"0207","line_number":"2"}],"한양대":[{"station_id":"0209","line_number":"2"}],"뚝섬":[{"station_id":"0210","line_number":"2"}],"건대입구":[{"station_id":"0212","line_number":"2"},{"station_id":"2729","line_number":"7"}],"구의":[{"station_id":"0213","line_number":"2"}],"강변":[{"station_id":"0214","line_number":"2"}],"잠실나루":[{"station_id":"0215","line_number":"2"}],"잠실새내":[{"station_id":"0217","line_number":"2"}],"삼성":[{"station_id":"0219","line_number":"2"}],"선릉":[{"station_id":"0220","line_number":"2"},{"station_id":"1023","line_number":"B"}],"강남":[{"station_id":"0222","line_number":"2"},{"station_id":"4307","line_number":"S"}],"서초":[{"station_id":"0224","line_number":"2"}],"방배":[{"station_id":"0225","line_number":"2"}],"사당":[{"station_id":"0226","line_number":"2"},{"station_id":"0433","line_number":"4"}],"서울대입구":[{"station_id":"0228","line_number":"2"}],"봉천":[{"station_id":"0229","line_number":"2"}],"신림":[{"station_id":"0230","line_number":"2"}],"신대방":[{"station_id":"0231","line_number":"2"}],"구로디지털단지":[{"station_id":"0232","line_number":"2"}],"문래":[{"station_id":"0235","line_number":"2"}],"영등포구청":[{"station_id":"0236","line_number":"2"},{"station_id":"2524","line_number":"5"}],"당산":[{"station_id":"0237","line_number":"2"},{"station_id":"4113","line_number":"9"}],"홍대입구":[{"station_id":"0239","line_number":"2"},{"station_id":"1293","line_number":"A"},{"station_id":"1264","line_number":"K"}],"신촌":[{"station_id":"0240","line_number":"2"}],"이대":[{"station_id":"0241","line_number":"2"}],"아현":[{"station_id":"0242","line_number":"2"}],"충정로":[{"station_id":"0243","line_number":"2"},{"station_id":"2532","line_number":"5"}],"신답":[{"station_id":"0245","line_number":"2"}],"도림천":[{"station_id":"0247","line_number":"2"}],"양천구청":[{"station_id":"0248","line_number":"2"}],"신정네거리":[{"station_id":"0249","line_number":"2"}],"용두":[{"station_id":"0250","line_number":"2"}],"까치산":[{"station_id":"0260","line_number":"2"},{"station_id":"2519","line_number":"5"}],"지축":[{"station_id":"0309","line_number":"3"}],"구파발":[{"station_id":"0310","line_number":"3"}],"연신내":[{"station_id":"0311","line_number":"3"},{"station_id":"2615","line_number":"6"}],"불광":[{"station_id":"0312","line_number":"3"},{"station_id":"2613","line_number":"6"}],"녹번":[{"station_id":"0313","line_number":"3"}],"홍제":[{"station_id":"0314","line_number":"3"}],"무악재":[{"station_id":"0315","line_number":"3"}],"독립문":[{"station_id":"0316","line_number":"3"}],"동대입구":[{"station_id":"0322","line_number":"3"}],"금호":[{"station_id":"0324","line_number":"3"}],"옥수":[{"station_id":"0325","line_number":"3"},{"station_id":"1011","line_number":"K"}],"압구정":[{"station_id":"0326","line_number":"3"}],"신사":[{"station_id":"0327","line_number":"3"}],"고속터미널":[{"station_id":"0329","line_number":"3"},{"station_id":"2736","line_number":"7"},{"station_id":"4123","line_number":"9"}],"일산":[{"station_id":"1275","line_number":"K"}],"탄현":[{"station_id":"1276","line_number":"K"}],"금릉":[{"station_id":"1279","line_number":"K"}],"금촌":[{"station_id":"1280","line_number":"K"}],"파주":[{"station_id":"1283","line_number":"K"}],"문산":[{"station_id":"1284","line_number":"K"}],"광운대":[{"station_id":"1308","line_number":"G"},{"station_id":"1019","line_number":"1"}],"상봉":[{"station_id":"1309","line_number":"G"},{"station_id":"1202","line_number":"K"},{"station_id":"2722","line_number":"7"}],"망우":[{"station_id":"1310","line_number":"G"},{"station_id":"1203","line_number":"K"}],"갈매":[{"station_id":"1312","line_number":"G"}],"별내":[{"station_id":"1313","line_number":"G"}],"사릉":[{"station_id":"1315","line_number":"G"}],"금곡":[{"station_id":"1316","line_number":"G"}],"천마산":[{"station_id":"1318","line_number":"G"}],"마석":[{"station_id":"1319","line_number":"G"}],"청평":[{"station_id":"1321","line_number":"G"}],"상천":[{"station_id":"1322","line_number":"G"}],"굴봉산":[{"station_id":"1324","line_number":"G"}],"백양리":[{"station_id":"1325","line_number":"G"}],"남춘천":[{"station_id":"1328","line_number":"G"}],"쌍용(나사렛대)":[{"station_id":"1402","line_number":"1"}],"아산":[{"station_id":"1403","line_number":"1"}],"탕정":[{"station_id":"1404","line_number":"1"}],"풍기":[{"station_id":"1406","line_number":"1"}],"온양온천":[{"station_id":"1407","line_number":"1"}],"신창":[{"station_id":"1408","line_number":"1"}],"원당":[{"station_id":"1951","line_number":"3"}],"백석":[{"station_id":"1954","line_number":"3"}],"마두":[{"station_id":"1955","line_number":"3"}],"주엽":[{"station_id":"1957","line_number":"3"}],"대화":[{"station_id":"1958","line_number":"3"}],"방화":[{"station_id":"2511","line_number":"5"}],"개화산":[{"station_id":"2512","line_number":"5"}],"김포공항":[{"station_id":"2513","line_number":"5"},{"station_id":"4207","line_number":"A"},{"station_id":"4102","line_number":"9"}],"마곡":[{"station_id":"2515","line_number":"5"}],"발산":[{"station_id":"2516","line_number":"5"}],"우장산":[{"station_id":"2517","line_number":"5"}],"화곡":[{"station_id":"2518","line_number":"5"}],"신정":[{"station_id":"2520","line_number":"5"}],"목동":[{"station_id":"2521","line_number":"5"}],"오목교":[{"station_id":"2522","line_number":"5"}],"신길":[{"station_id":"2526","line_number":"5"},{"station_id":"1032","line_number":"1"}],"여의나루":[{"station_id":"2528","line_number":"5"}],"마포":[{"station_id":"2529","line_number":"5"}],"공덕":[{"station_id":"2530","line_number":"5"},{"station_id":"2627","line_number":"6"},{"station_id":"1262","line_number":"K"},{"station_id":"1292","line_number":"A"}],"애오개":[{"station_id":"2531","line_number":"5"}],"서대문":[{"station_id":"2533","line_number":"5"}],"광화문":[{"station_id":"2534","line_number":"5"}],"마포구청":[{"station_id":"2621","line_number":"6"}],"망원":[{"station_id":"2622","line_number":"6"}],"합정":[{"station_id":"2623","line_number":"6"},{"station_id":"0238","line_number":"2"}],"상수":[{"station_id":"2624","line_number":"6"}],"대흥":[{"station_id":"2626","line_number":"6"}],"효창공원앞":[{"station_id":"2628","line_number":"6"},{"station_id":"1261","line_number":"K"}],"이태원":[{"station_id":"2631","line_number":"6"}],"한강진":[{"station_id":"2632","line_number":"6"}],"버티고개":[{"station_id":"2633","line_number":"6"}],"약수":[{"station_id":"2634","line_number":"6"},{"station_id":"0323","line_number":"3"}],"신당":[{"station_id":"2636","line_number":"6"},{"station_id":"0206","line_number":"2"}],"창신":[{"station_id":"2638","line_number":"6"}],"보문":[{"station_id":"2639","line_number":"6"},{"station_id":"4712","line_number":"UI"}],"고려대":[{"station_id":"2641","line_number":"6"}],"상월곡":[{"station_id":"2643","line_number":"6"}],"태릉입구":[{"station_id":"2646","line_number":"6"},{"station_id":"2719","line_number":"7"}],"화랑대":[{"station_id":"2647","line_number":"6"}],"장암":[{"station_id":"2711","line_number":"7"}],"도봉산":[{"station_id":"2712","line_number":"7"},{"station_id":"1903","line_number":"1"}],"수락산":[{"station_id":"2713","line_number":"7"}],"마들":[{"station_id":"2714","line_number":"7"}],"청구":[{"station_id":"2538","line_number":"5"},{"station_id":"2635","line_number":"6"}],"신금호":[{"station_id":"2539","line_number":"5"}],"행당":[{"station_id":"2540","line_number":"5"}],"마장":[{"station_id":"2542","line_number":"5"}],"장한평":[{"station_id":"2544","line_number":"5"}],"군자":[{"station_id":"2545","line_number":"5"},{"station_id":"2727","line_number":"7"}],"아차산":[{"station_id":"2546","line_number":"5"}],"천호":[{"station_id":"2548","line_number":"5"},{"station_id":"2812","line_number":"8"}],"강동":[{"station_id":"2549","line_number":"5"}],"길동":[{"station_id":"2550","line_number":"5"}],"명일":[{"station_id":"2552","line_number":"5"}],"고덕":[{"station_id":"2553","line_number":"5"}],"둔촌동":[{"station_id":"2555","line_number":"5"}],"방이":[{"station_id":"2557","line_number":"5"}],"개롱":[{"station_id":"2559","line_number":"5"}],"거여":[{"station_id":"2560","line_number":"5"}],"응암":[{"station_id":"2611","line_number":"6"}],"역촌":[{"station_id":"2612","line_number":"6"}],"구산":[{"station_id":"2616","line_number":"6"}],"새절":[{"station_id":"2617","line_number":"6"}],"증산":[{"station_id":"2618","line_number":"6"}],"대공원":[{"station_id":"1452","line_number":"4"}],"과천":[{"station_id":"1453","line_number":"4"}],"인덕원":[{"station_id":"1455","line_number":"4"}],"평촌":[{"station_id":"1456","line_number":"4"}],"금정":[{"station_id":"1458","line_number":"4"},{"station_id":"1708","line_number":"1"}],"가산디지털단지":[{"station_id":"1702","line_number":"1"},{"station_id":"2748","line_number":"7"}],"관악":[{"station_id":"1705","line_number":"1"}],"안양":[{"station_id":"1706","line_number":"1"}],"군포":[{"station_id":"1709","line_number":"1"}],"성균관대":[{"station_id":"1711","line_number":"1"}],"화서":[{"station_id":"1712","line_number":"1"}],"독산":[{"station_id":"1714","line_number":"1"}],"세류":[{"station_id":"1715","line_number":"1"}],"세마":[{"station_id":"1717","line_number":"1"}],"오산대":[{"station_id":"1718","line_number":"1"}],"오산":[{"station_id":"1719","line_number":"1"}],"송탄":[{"station_id":"1721","line_number":"1"}],"서정리":[{"station_id":"1722","line_number":"1"}],"평택":[{"station_id":"1724","line_number":"1"}],"직산":[{"station_id":"1726","line_number":"1"}],"당정":[{"station_id":"1729","line_number":"1"}],"서동탄":[{"station_id":"1749","line_number":"1"}],"광명":[{"station_id":"1750","line_number":"1"}],"산본":[{"station_id":"1751","line_number":"4"}],"대야미":[{"station_id":"1752","line_number":"4"}],"상록수":[{"station_id":"1754","line_number":"4"}],"중앙":[{"station_id":"1756","line_number":"4"}],"고잔":[{"station_id":"1757","line_number":"4"}],"안산":[{"station_id":"1759","line_number":"4"}],"신길온천":[{"station_id":"1760","line_number":"4"}],"오이도":[{"station_id":"1762","line_number":"4"},{"station_id":"1877","line_number":"SU"}],"수리산":[{"station_id":"1763","line_number":"4"}],"오류동":[{"station_id":"1802","line_number":"1"}],"역곡":[{"station_id":"1803","line_number":"1"}],"송내":[{"station_id":"1805","line_number":"1"}],"부평":[{"station_id":"1806","line_number":"1"},{"station_id":"3120","line_number":"I"}],"주안":[{"station_id":"1809","line_number":"1"},{"station_id":"3218","line_number":"I2"}],"제물포":[{"station_id":"1810","line_number":"1"}],"인천":[{"station_id":"1812","line_number":"1"},{"station_id":"1891","line_number":"SU"}],"구일":[{"station_id":"1813","line_number":"1"}],"소사":[{"station_id":"1814","line_number":"1"}],"간석":[{"station_id":"1816","line_number":"1"}],"도원":[{"station_id":"1817","line_number":"1"}],"중동":[{"station_id":"1822","line_number":"1"}],"도화":[{"station_id":"1823","line_number":"1"}],"수원":[{"station_id":"1846","line_number":"B"},{"station_id":"1713","line_number":"1"}],"서울숲":[{"station_id":"1847","line_number":"B"}],"압구정로데오":[{"station_id":"1848","line_number":"B"}],"선정릉":[{"station_id":"1850","line_number":"B"},{"station_id":"4127","line_number":"9"}],"가천대":[{"station_id":"1851","line_number":"B"}],"야탑":[{"station_id":"1854","line_number":"B"}],"수내":[{"station_id":"1856","line_number":"B"}],"정자":[{"station_id":"1857","line_number":"B"},{"station_id":"4312","line_number":"S"}],"오리":[{"station_id":"1859","line_number":"B"}],"이매":[{"station_id":"1860","line_number":"B"},{"station_id":"1502","line_number":"KK"}],"죽전":[{"station_id":"1862","line_number":"B"}],"구성":[{"station_id":"1863","line_number":"B"}],"기흥":[{"station_id":"1865","line_number":"B"},{"station_id":"4501","line_number":"E"}],"상갈":[{"station_id":"1866","line_number":"B"}],"영통":[{"station_id":"1868","line_number":"B"}],"망포":[{"station_id":"1869","line_number":"B"}],"수원시청":[{"station_id":"1871","line_number":"B"}],"월곶":[{"station_id":"1879","line_number":"SU"}],"소래포구":[{"station_id":"1880","line_number":"SU"}],"인천논현":[{"station_id":"1881","line_number":"SU"}],"남동인더스파크":[{"station_id":"1883","line_number":"SU"}],"원인재":[{"station_id":"1884","line_number":"SU"},{"station_id":"3130","line_number":"I"}],"연수":[{"station_id":"1885","line_number":"SU"}],"도봉":[{"station_id":"1902","line_number":"1"}],"회룡":[{"station_id":"1905","line_number":"1"},{"station_id":"4602","line_number":"U"}],"의정부":[{"station_id":"1906","line_number":"1"}],"녹양":[{"station_id":"1908","line_number":"1"}],"양주":[{"station_id":"1909","line_number":"1"}],"덕계":[{"station_id":"1910","line_number":"1"}],"지행":[{"station_id":"1912","line_number":"1"}],"동두천중앙":[{"station_id":"1913","line_number":"1"}],"소요산":[{"station_id":"1916","line_number":"1"}],"마전(무정차)":[{"station_id":"1917","line_number":"1"}],"구룡":[{"station_id":"1026","line_number":"B"}],"개포동":[{"station_id":"1027","line_number":"B"}],"대모산입구":[{"station_id":"1028","line_number":"B"}],"복정":[{"station_id":"1031","line_number":"B"},{"station_id":"2821","line_number":"8"}],"회기":[{"station_id":"1200","line_number":"K"},{"station_id":"1015","line_number":"1"},{"station_id":"1306","line_number":"G"}],"중랑":[{"station_id":"1201","line_number":"K"},{"station_id":"1307","line_number":"G"}],"양원":[{"station_id":"1204","line_number":"K"}],"구리":[{"station_id":"1205","line_number":"K"}],"양정":[{"station_id":"1207","line_number":"K"}],"덕소":[{"station_id":"1208","line_number":"K"}],"팔당":[{"station_id":"1210","line_number":"K"}],"운길산":[{"station_id":"1211","line_number":"K"}],"아신":[{"station_id":"1215","line_number":"K"}],"오빈":[{"station_id":"1216","line_number":"K"}],"용문":[{"station_id":"1219","line_number":"K"}],"대곡":[{"station_id":"1249","line_number":"K"},{"station_id":"1953","line_number":"3"}],"신촌(경의중앙선)":[{"station_id":"1252","line_number":"K"}],"서강대":[{"station_id":"1263","line_number":"K"}],"가좌":[{"station_id":"1265","line_number":"K"}],"디지털미디어시티":[{"station_id":"1266","line_number":"K"},{"station_id":"2619","line_number":"6"},{"station_id":"1294","line_number":"A"}],"화전":[{"station_id":"1268","line_number":"K"}],"행신":[{"station_id":"1270","line_number":"K"}],"곡산":[{"station_id":"1272","line_number":"K"}],"백마":[{"station_id":"1273","line_number":"K"}],"발곡":[{"station_id":"4601","line_number":"U"}],"범골":[{"station_id":"4603","line_number":"U"}],"경전철의정부":[{"station_id":"4604","line_number":"U"}],"의정부시청":[{"station_id":"4605","line_number":"U"}],"흥선":[{"station_id":"4606","line_number":"U"}],"의정부중앙":[{"station_id":"4607","line_number":"U"}],"동오":[{"station_id":"4608","line_number":"U"}],"새말":[{"station_id":"4609","line_number":"U"}],"효자":[{"station_id":"4611","line_number":"U"}],"곤제":[{"station_id":"4612","line_number":"U"}],"어룡":[{"station_id":"4613","line_number":"U"}],"탑석":[{"station_id":"4615","line_number":"U"}],"판교":[{"station_id":"1501","line_number":"KK"},{"station_id":"4311","line_number":"S"}],"원흥":[{"station_id":"1948","line_number":"3"}],"청량리":[{"station_id":"0158","line_number":"1"},{"station_id":"1305","line_number":"G"},{"station_id":"1014","line_number":"K"}],"성수":[{"station_id":"0211","line_number":"2"}],"잠실":[{"station_id":"0216","line_number":"2"},{"station_id":"2815","line_number":"8"}],"역삼":[{"station_id":"0221","line_number":"2"}],"낙성대":[{"station_id":"0227","line_number":"2"}],"대림":[{"station_id":"0233","line_number":"2"},{"station_id":"2746","line_number":"7"}],"삼동":[{"station_id":"1503","line_number":"KK"}],"경기광주":[{"station_id":"1504","line_number":"KK"}],"초월":[{"station_id":"1505","line_number":"KK"}],"청라국제도시":[{"station_id":"4210","line_number":"A"}],"언주":[{"station_id":"4126","line_number":"9"}],"삼성중앙":[{"station_id":"4128","line_number":"9"}],"봉은사":[{"station_id":"4129","line_number":"9"}],"종합운동장":[{"station_id":"4130","line_number":"9"},{"station_id":"0218","line_number":"2"}],"대방":[{"station_id":"1005","line_number":"1"}],"창동":[{"station_id":"1022","line_number":"1"},{"station_id":"0412","line_number":"4"}],"봉명":[{"station_id":"1401","line_number":"1"}],"배방":[{"station_id":"1405","line_number":"1"}],"구로":[{"station_id":"1701","line_number":"1"}],"석수":[{"station_id":"1704","line_number":"1"}],"명학":[{"station_id":"1707","line_number":"1"}],"의왕":[{"station_id":"1710","line_number":"1"}],"병점":[{"station_id":"1716","line_number":"1"}],"진위":[{"station_id":"1720","line_number":"1"}],"지제":[{"station_id":"1723","line_number":"1"}],"성환":[{"station_id":"1725","line_number":"1"}],"천안":[{"station_id":"1728","line_number":"1"}],"개봉":[{"station_id":"1801","line_number":"1"}],"부천":[{"station_id":"1804","line_number":"1"}],"백운":[{"station_id":"1807","line_number":"1"}],"동인천":[{"station_id":"1811","line_number":"1"}],"부개":[{"station_id":"1815","line_number":"1"}],"강매":[{"station_id":"1269","line_number":"K"}],"온수":[{"station_id":"1821","line_number":"1"},{"station_id":"2752","line_number":"7"}],"방학":[{"station_id":"1901","line_number":"1"}],"망월사":[{"station_id":"1904","line_number":"1"}],"가능":[{"station_id":"1907","line_number":"1"}],"덕정":[{"station_id":"1911","line_number":"1"}],"보산":[{"station_id":"1914","line_number":"1"}],"삼송":[{"station_id":"1950","line_number":"3"}],"정발산":[{"station_id":"1956","line_number":"3"}],"성신여대입구":[{"station_id":"0418","line_number":"4"},{"station_id":"4711","line_number":"UI"}],"숙대입구":[{"station_id":"0427","line_number":"4"}],"선바위":[{"station_id":"1450","line_number":"4"}],"경마공원":[{"station_id":"1451","line_number":"4"}],"정부과천청사":[{"station_id":"1454","line_number":"4"}],"범계":[{"station_id":"1457","line_number":"4"}],"반월":[{"station_id":"1753","line_number":"4"}],"한대앞":[{"station_id":"1755","line_number":"4"}],"초지":[{"station_id":"1758","line_number":"4"}],"정왕":[{"station_id":"1761","line_number":"4"}],"송정":[{"station_id":"2514","line_number":"5"}],"양평":[{"station_id":"2523","line_number":"5"}],"중계":[{"station_id":"2716","line_number":"7"}],"하계":[{"station_id":"2717","line_number":"7"}],"공릉":[{"station_id":"2718","line_number":"7"}],"중화":[{"station_id":"2721","line_number":"7"}],"면목":[{"station_id":"2723","line_number":"7"}],"용마산":[{"station_id":"2725","line_number":"7"}],"중곡":[{"station_id":"2726","line_number":"7"}],"뚝섬유원지":[{"station_id":"2730","line_number":"7"}],"청담":[{"station_id":"2731","line_number":"7"}],"강남구청":[{"station_id":"2732","line_number":"7"},{"station_id":"1849","line_number":"B"}],"논현":[{"station_id":"2734","line_number":"7"}],"반포":[{"station_id":"2735","line_number":"7"}],"남성":[{"station_id":"2739","line_number":"7"}],"숭실대입구":[{"station_id":"2740","line_number":"7"}],"신대방삼거리":[{"station_id":"2743","line_number":"7"}],"보라매":[{"station_id":"2744","line_number":"7"}],"남구로":[{"station_id":"2747","line_number":"7"}],"철산":[{"station_id":"2749","line_number":"7"}],"광명사거리":[{"station_id":"2750","line_number":"7"}],"천왕":[{"station_id":"2751","line_number":"7"}],"부천종합운동장":[{"station_id":"2754","line_number":"7"}],"춘의":[{"station_id":"2755","line_number":"7"}],"부천시청":[{"station_id":"2757","line_number":"7"}],"상동":[{"station_id":"2758","line_number":"7"}],"삼산체육관":[{"station_id":"2759","line_number":"7"}],"부평구청":[{"station_id":"2761","line_number":"7"},{"station_id":"3118","line_number":"I"}],"강동구청":[{"station_id":"2813","line_number":"8"}],"석촌":[{"station_id":"2816","line_number":"8"}],"송파":[{"station_id":"2817","line_number":"8"}],"문정":[{"station_id":"2819","line_number":"8"}],"장지":[{"station_id":"2820","line_number":"8"}],"산성":[{"station_id":"2822","line_number":"8"}],"단대오거리":[{"station_id":"2824","line_number":"8"}],"신흥":[{"station_id":"2825","line_number":"8"}],"모란":[{"station_id":"2827","line_number":"8"},{"station_id":"1853","line_number":"B"}],"계양":[{"station_id":"3110","line_number":"I"},{"station_id":"4208","line_number":"A"}],"박촌":[{"station_id":"3112","line_number":"I"}],"임학":[{"station_id":"3113","line_number":"I"}],"작전":[{"station_id":"3116","line_number":"I"}],"갈산":[{"station_id":"3117","line_number":"I"}],"동수":[{"station_id":"3121","line_number":"I"}],"간석오거리":[{"station_id":"3123","line_number":"I"}],"인천시청":[{"station_id":"3124","line_number":"I"},{"station_id":"3221","line_number":"I2"}],"예술회관":[{"station_id":"3125","line_number":"I"}],"문학경기장":[{"station_id":"3127","line_number":"I"}],"선학":[{"station_id":"3128","line_number":"I"}],"신연수":[{"station_id":"3129","line_number":"I"}],"동춘":[{"station_id":"3131","line_number":"I"}],"동막":[{"station_id":"3132","line_number":"I"}],"지식정보단지":[{"station_id":"3135","line_number":"I"}],"인천대입구":[{"station_id":"3136","line_number":"I"}],"국제업무지구":[{"station_id":"3138","line_number":"I"}],"개화":[{"station_id":"4101","line_number":"9"}],"공항시장":[{"station_id":"4103","line_number":"9"}],"신방화":[{"station_id":"4104","line_number":"9"}],"마곡나루":[{"station_id":"4105","line_number":"9"}],"가양":[{"station_id":"4107","line_number":"9"}],"증미":[{"station_id":"4108","line_number":"9"}],"등촌":[{"station_id":"4109","line_number":"9"}],"신목동":[{"station_id":"4111","line_number":"9"}],"선유도":[{"station_id":"4112","line_number":"9"}],"여의도":[{"station_id":"4115","line_number":"9"},{"station_id":"2527","line_number":"5"}],"샛강":[{"station_id":"4116","line_number":"9"}],"흑석":[{"station_id":"4119","line_number":"9"}],"구반포":[{"station_id":"4121","line_number":"9"}],"신반포":[{"station_id":"4122","line_number":"9"}],"사평":[{"station_id":"4124","line_number":"9"}],"신논현":[{"station_id":"4125","line_number":"9"}],"검암":[{"station_id":"4209","line_number":"A"},{"station_id":"3207","line_number":"I2"}],"운서":[{"station_id":"4211","line_number":"A"}],"인천국제공항":[{"station_id":"4213","line_number":"A"}],"강남대":[{"station_id":"4502","line_number":"E"}],"지석":[{"station_id":"4503","line_number":"E"}],"동백":[{"station_id":"4505","line_number":"E"}],"초당":[{"station_id":"4506","line_number":"E"}],"시청·용인대":[{"station_id":"4509","line_number":"E"}],"명지대":[{"station_id":"4510","line_number":"E"}],"운동장·송담대":[{"station_id":"4512","line_number":"E"}],"고진":[{"station_id":"4513","line_number":"E"}],"둔전":[{"station_id":"4515","line_number":"E"}],"전대·에버랜드":[{"station_id":"4517","line_number":"E"}],"태평":[{"station_id":"1852","line_number":"B"}],"서현":[{"station_id":"1855","line_number":"B"}],"미금":[{"station_id":"1858","line_number":"B"}],"보정":[{"station_id":"1861","line_number":"B"}],"신갈":[{"station_id":"1864","line_number":"B"}],"청명":[{"station_id":"1867","line_number":"B"}],"매탄권선":[{"station_id":"1870","line_number":"B"}],"달월":[{"station_id":"1878","line_number":"SU"}],"호구포":[{"station_id":"1882","line_number":"SU"}],"송도":[{"station_id":"1886","line_number":"SU"}],"먹골":[{"station_id":"2720","line_number":"7"}],"사가정":[{"station_id":"2724","line_number":"7"}],"어린이대공원":[{"station_id":"2728","line_number":"7"}],"학동":[{"station_id":"2733","line_number":"7"}],"내방":[{"station_id":"2737","line_number":"7"}],"상도":[{"station_id":"2741","line_number":"7"}],"신풍":[{"station_id":"2745","line_number":"7"}],"까치울":[{"station_id":"2753","line_number":"7"}],"신중동":[{"station_id":"2756","line_number":"7"}],"굴포천":[{"station_id":"2760","line_number":"7"}],"몽촌토성":[{"station_id":"2814","line_number":"8"}],"남한산성입구":[{"station_id":"2823","line_number":"8"}],"용답":[{"station_id":"0244","line_number":"2"}],"경복궁":[{"station_id":"0317","line_number":"3"}],"안국":[{"station_id":"0318","line_number":"3"}],"잠원":[{"station_id":"0328","line_number":"3"}],"학여울":[{"station_id":"0336","line_number":"3"}],"용산":[{"station_id":"1003","line_number":"1"},{"station_id":"1290","line_number":"K"}],"한티":[{"station_id":"1024","line_number":"B"}],"신원":[{"station_id":"1213","line_number":"K"}],"양평(경의중앙선)":[{"station_id":"1217","line_number":"K"}],"김유정":[{"station_id":"1327","line_number":"G"}],"금천구청":[{"station_id":"1703","line_number":"1"}],"두정":[{"station_id":"1727","line_number":"1"}],"동암":[{"station_id":"1808","line_number":"1"}],"매교":[{"station_id":"1872","line_number":"B"}],"동두천":[{"station_id":"1915","line_number":"1"}],"화정":[{"station_id":"1952","line_number":"3"}],"영등포시장":[{"station_id":"2525","line_number":"5"}],"상일동":[{"station_id":"2554","line_number":"5"}],"월드컵경기장":[{"station_id":"2620","line_number":"6"}],"월곡":[{"station_id":"2642","line_number":"6"}],"장승배기":[{"station_id":"2742","line_number":"7"}],"암사":[{"station_id":"2811","line_number":"8"}],"테크노파크":[{"station_id":"3134","line_number":"I"}],"노들":[{"station_id":"4118","line_number":"9"}],"양재시민의숲":[{"station_id":"4309","line_number":"S"}],"검단오류":[{"station_id":"3201","line_number":"I2"}],"왕길":[{"station_id":"3202","line_number":"I2"}],"검단사거리":[{"station_id":"3203","line_number":"I2"}],"마전":[{"station_id":"3204","line_number":"I2"}],"완정":[{"station_id":"3205","line_number":"I2"}],"독정":[{"station_id":"3206","line_number":"I2"}],"검바위":[{"station_id":"3208","line_number":"I2"}],"아시아드경기장":[{"station_id":"3209","line_number":"I2"}],"서구청":[{"station_id":"3210","line_number":"I2"}],"가정":[{"station_id":"3211","line_number":"I2"}],"가정중앙시장":[{"station_id":"3212","line_number":"I2"}],"석남":[{"station_id":"3213","line_number":"I2"}],"서부여성회관":[{"station_id":"3214","line_number":"I2"}],"인천가좌":[{"station_id":"3215","line_number":"I2"}],"가재울":[{"station_id":"3216","line_number":"I2"}],"주안국가산단":[{"station_id":"3217","line_number":"I2"}],"인하대":[{"station_id":"1888","line_number":"SU"}],"숭의":[{"station_id":"1889","line_number":"SU"}],"신포":[{"station_id":"1890","line_number":"SU"}],"시민공원":[{"station_id":"3219","line_number":"I2"}],"석바위시장":[{"station_id":"3220","line_number":"I2"}],"석천사거리":[{"station_id":"3222","line_number":"I2"}],"모래내시장":[{"station_id":"3223","line_number":"I2"}],"만수":[{"station_id":"3224","line_number":"I2"}],"남동구청":[{"station_id":"3225","line_number":"I2"}],"인천대공원":[{"station_id":"3226","line_number":"I2"}],"운연":[{"station_id":"3227","line_number":"I2"}],"곤지암":[{"station_id":"1506","line_number":"KK"}],"신둔도예촌":[{"station_id":"1507","line_number":"KK"}],"이천":[{"station_id":"1508","line_number":"KK"}],"부발":[{"station_id":"1509","line_number":"KK"}],"세종대왕릉":[{"station_id":"1510","line_number":"KK"}],"여주":[{"station_id":"1511","line_number":"KK"}],"지평":[{"station_id":"1220","line_number":"K"}],"야당":[{"station_id":"1277","line_number":"K"}],"답십리":[{"station_id":"2543","line_number":"5"}],"광나루":[{"station_id":"2547","line_number":"5"}],"굽은다리":[{"station_id":"2551","line_number":"5"}],"올림픽공원":[{"station_id":"2556","line_number":"5"}],"마천":[{"station_id":"2561","line_number":"5"}],"독바위":[{"station_id":"2614","line_number":"6"}],"광흥창":[{"station_id":"2625","line_number":"6"}],"녹사평":[{"station_id":"2630","line_number":"6"}],"안암":[{"station_id":"2640","line_number":"6"}],"돌곶이":[{"station_id":"2644","line_number":"6"}],"봉화산":[{"station_id":"2648","line_number":"6"}],"동천":[{"station_id":"4314","line_number":"S"}],"수지구청":[{"station_id":"4315","line_number":"S"}],"성복":[{"station_id":"4316","line_number":"S"}],"상현":[{"station_id":"4317","line_number":"S"}],"광교중앙":[{"station_id":"4318","line_number":"S"}],"광교":[{"station_id":"4319","line_number":"S"}],"북한산우이":[{"station_id":"4701","line_number":"UI"}],"솔밭공원":[{"station_id":"4702","line_number":"UI"}],"419민주묘지":[{"station_id":"4703","line_number":"UI"}],"가오리":[{"station_id":"4704","line_number":"UI"}],"화계":[{"station_id":"4705","line_number":"UI"}],"삼양":[{"station_id":"4706","line_number":"UI"}],"삼양사거리":[{"station_id":"4707","line_number":"UI"}],"솔샘":[{"station_id":"4708","line_number":"UI"}],"북한산보국문":[{"station_id":"4709","line_number":"UI"}],"정릉":[{"station_id":"4710","line_number":"UI"}],"수진":[{"station_id":"2826","line_number":"8"}],"귤현":[{"station_id":"3111","line_number":"I"}],"계산":[{"station_id":"3114","line_number":"I"}],"경인교대입구":[{"station_id":"3115","line_number":"I"}],"부평시장":[{"station_id":"3119","line_number":"I"}],"부평삼거리":[{"station_id":"3122","line_number":"I"}],"인천터미널":[{"station_id":"3126","line_number":"I"}],"캠퍼스타운":[{"station_id":"3133","line_number":"I"}],"센트럴파크":[{"station_id":"3137","line_number":"I"}],"양천향교":[{"station_id":"4106","line_number":"9"}],"염창":[{"station_id":"4110","line_number":"9"}],"국회의사당":[{"station_id":"4114","line_number":"9"}],"공항화물청사":[{"station_id":"4212","line_number":"A"}],"청계산입구":[{"station_id":"4310","line_number":"S"}],"어정":[{"station_id":"4504","line_number":"E"}],"삼가":[{"station_id":"4508","line_number":"E"}],"김량장":[{"station_id":"4511","line_number":"E"}],"보평":[{"station_id":"4514","line_number":"E"}],"경기도청북부청사":[{"station_id":"4610","line_number":"U"}],"송산":[{"station_id":"4614","line_number":"U"}],"영종":[{"station_id":"4217","line_number":"A"}],"도농":[{"station_id":"1206","line_number":"K"}],"도심":[{"station_id":"1209","line_number":"K"}],"양수":[{"station_id":"1212","line_number":"K"}],"국수":[{"station_id":"1214","line_number":"K"}],"원덕":[{"station_id":"1218","line_number":"K"}],"서울(경의중앙선)":[{"station_id":"1251","line_number":"K"}],"수색":[{"station_id":"1267","line_number":"K"}],"능곡":[{"station_id":"1271","line_number":"K"}],"풍산":[{"station_id":"1274","line_number":"K"}],"운정":[{"station_id":"1278","line_number":"K"}],"월롱":[{"station_id":"1282","line_number":"K"}],"신내":[{"station_id":"1311","line_number":"G"}],"퇴계원":[{"station_id":"1314","line_number":"G"}],"평내호평":[{"station_id":"1317","line_number":"G"}],"대성리":[{"station_id":"1320","line_number":"G"}],"가평":[{"station_id":"1323","line_number":"G"}],"강촌":[{"station_id":"1326","line_number":"G"}],"춘천":[{"station_id":"1329","line_number":"G"}]};
    this.lineColor = {
        "1" : {color : "063896"},
        "2" : {color : "67c361"},
        "3" : {color : "ff7639"},
        "4" : {color : "3573d0"},
        "5" : {color : "8840b3"},
        "6" : {color : "994e1a"},
        "7" : {color : "606c11"},
        "8" : {color : "e4256f"},
        "9" : {color : "be9e2e"},
        "K" : {color : "7fc3a6"},
        "A" : {color : "73b8e3"},
        "G" : {color : "7fc3a6"},
        "B" : {color : "ecb130"},
        "SU" : {color : "ecb130"},
        "K" : {color : "2fa880"},
        "U" : {color : "fd8e25"},
        "KK" : {color : "2c77ee"},
        "I" : {color : "2c77ee"},
        "I2" : {color : "fdb75a"},
        "UI" : {color : "cac438"},
        "S" : {color : "a70830"},
        "E" : {color : "82cd7d"}
    };
    this.subwayName = "어린이대공원";
    this.subwayLine = 7;

    this.subwayIcon = PIXI.Sprite.fromImage('images/subway.png');
    this.subwayIcon.scale.x = 0.35;
    this.subwayIcon.scale.y = 0.35;
    this.subwayIcon.anchor.set(0.5);
    this.subwayIcon.x = 0;
    this.subwayIcon.y = 0;
    this.container.addChild(this.subwayIcon);

    this.leftArrow = PIXI.Sprite.fromImage('images/arrow_left.png');
    this.leftArrow.scale.x = 0.5;
    this.leftArrow.scale.y = 0.5;
    this.leftArrow.anchor.set(0.5);
    this.leftArrow.x = -200;
    this.leftArrow.y = 0;
    this.container.addChild(this.leftArrow);

    this.rightArrow = PIXI.Sprite.fromImage('images/arrow_right.png');
    this.rightArrow.scale.x = 0.5;
    this.rightArrow.scale.y = 0.5;
    this.rightArrow.anchor.set(0.5);
    this.rightArrow.x = 200;
    this.rightArrow.y = 0;
    this.container.addChild(this.rightArrow);

    var texture = PIXI.Texture.fromImage('images/white10.png');
    var row = new PIXI.extras.TilingSprite(
        texture,
        100, 2
    );
    row.anchor.set(0.5);
    row.x = -120;
    row.y = 0;
    this.container.addChild(row);
    var row2 = new PIXI.extras.TilingSprite(
        texture,
        100, 2
    );
    row2.anchor.set(0.5);
    row2.x = 120;
    row2.y = 0;
    this.container.addChild(row2);

    var soon = new PIXI.Text('곧 도착', {
        fontFamily: 'chevyM',
        fontSize: 20,
        fill: 0xffffff
    });
    soon.x = -120;
    soon.y = -20;
    soon.anchor.set(0.5);
    this.container.addChild(soon);

    var soon2 = new PIXI.Text('곧 도착', {
        fontFamily: 'chevyM',
        fontSize: 20,
        fill: 0xffffff
    });
    soon2.x = 120;
    soon2.y = -20;
    soon2.anchor.set(0.5);
    this.container.addChild(soon2);

    this.downTime = new PIXI.Text('8분 57초', {
        fontFamily: 'chevyM',
        fontSize: 20,
        fill: 0xffffff
    });
    this.downTime.x = -120;
    this.downTime.y = 20;
    this.downTime.anchor.set(0.5);
    this.container.addChild(this.downTime);

    this.upTime = new PIXI.Text('7분 57초', {
        fontFamily: 'chevyM',
        fontSize: 20,
        fill: 0xffffff
    });
    this.upTime.x = 120;
    this.upTime.y = 20;
    this.upTime.anchor.set(0.5);
    this.container.addChild(this.upTime);

    this.drawBottom('606c11', this.subwayLine, this.subwayName);
    this.getData(this.subwayName, this.subwayLine);
}

Subway.prototype.drawBottom = function (color, line, name) {
    this.subwayLine = line;
    this.subwayName = name;
    this.graphics = new PIXI.Graphics();
    this.graphics.beginFill(0xffffff);
    this.graphics.lineStyle(7, "0x"+color, 1);
    this.graphics.drawRoundedRect(-215, 60, 430, 60, 33);
    this.graphics.endFill();
    this.graphics.beginFill(0x000000);
    this.graphics.drawRoundedRect(-110, 60, 220, 60, 33);
    this.graphics.endFill();

    this.container.addChild(this.graphics);

    this.station = new PIXI.Text(name, {
        fontFamily: 'chevyM',
        fontSize: 24,
        fill: 0xffffff
    });
    this.station.x = 10;
    this.station.y = 90;
    this.station.anchor.set(0.5);
    this.container.addChild(this.station);

    this.graphics2 = new PIXI.Graphics();
    this.graphics2.beginFill("0x"+color);
    this.graphics2.drawCircle(this.station.x - this.station.width / 2 - 20, 90, 15);
    this.graphics2.endFill();
    this.container.addChild(this.graphics2);

    this.subwayNum = new PIXI.Text(line, {
        fontFamily: 'FuturaMedium',
        fontSize: 22,
        fill: 0xffffff
    });
    this.subwayNum.x = this.station.x - this.station.width / 2 - 20;
    this.subwayNum.y = this.station.y;
    this.subwayNum.anchor.set(0.5);
    this.container.addChild(this.subwayNum);

    this.preStation = new PIXI.Text('하행선', {
        fontFamily: 'chevyM',
        fontSize: 20,
        fill: 0x000000
    });
    this.preStation.x = -160;
    this.preStation.y = this.station.y;
    this.preStation.anchor.set(0.5);
    this.container.addChild(this.preStation);

    this.nextStation = new PIXI.Text('상행선', {
        fontFamily: 'chevyM',
        fontSize: 20,
        fill: 0x000000
    });
    this.nextStation.x = 160;
    this.nextStation.y = this.station.y;
    this.nextStation.anchor.set(0.5);
    this.container.addChild(this.nextStation);
}

Subway.prototype.destroyBottom = function () {
    this.graphics.destroy();
    this.graphics2.destroy();
    this.subwayNum.destroy();
    this.station.destroy();
    this.preStation.destroy();
    this.nextStation.destroy();
}

Subway.prototype.getData = function (_name, _line) {
    // _stationCode, _week, _inOut, callback
    var obj = this.data[_name];
    var stationCode = "";
    for(var i =0; i < obj.length; i++) {
        if(obj[i]['line_number'] == _line) {
            stationCode = obj[i].station_id;
        }
    }
    var startIndex = 1; // 데이터 시작 번호
    var endIndex = 999; // 데이터 끝 번호
    // var stationCode = _stationCode; // 전철역코드 (ex : 2728 어린이대공원)
    var weekTag = 1; // 요일 (1.평일/2.토요일/3.공휴일)
    var inOutTag = 1; // 상,하행선( 1:상행 2:하행 )
    
    $.ajax({
        url: "http://openAPI.seoul.go.kr:8088/4a71676f4e736f6e37387862697775/json/SearchSTNTimeTableByIDService/" + startIndex + "/" + endIndex + "/" + stationCode + "/" + weekTag + "/" + inOutTag + "/ ",
        dataType: "json",
        async: false,
        success: function (data) {
            
            var obj = data.SearchSTNTimeTableByIDService.row;
            var _arriveTime = [];
            var now = new Date();
            for(var i = 0; i < obj.length; i++) {
                var time = obj[i].ARRIVETIME;
                var spl = time.split(":");
                if (parseInt(spl[0]) >= 24) {
                    var myDate = new Date();
                    var tomorrow = myDate.getDate();
                    myDate.setDate(tomorrow + 1);
                    var year = myDate.getFullYear();
                    var month = myDate.getMonth() + 1;
                    var day = myDate.getDate();
                    var newTime = '0'+(parseInt(spl[0])-24 +":" + spl[1]+":"+spl[2]);
                    var target = new Date(year+"/"+month+"/"+day+" "+newTime);
                    _arriveTime.push(target.getTime() - now.getTime());
                } else {
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth()+1;
                    var day = date.getDate();
                    var target = new Date(year+"/"+month+"/"+day+" "+time);
                    _arriveTime.push(target.getTime() - now.getTime());
                }
            }
            var fast = indexOfSmallest(_arriveTime);
            
            var arriveTime = msToTime(_arriveTime[fast]);
            var _time = arriveTime.split(":");
            
            if(parseInt(_time[0]) > 0){
                this.upTime.text = _time[0] +"시간 "+_time[1]+"분";
            } else {
                this.upTime.text = _time[1] +"분 " + _time[2]+"초";
            }
            
        }.bind(this)
    });
    var inOutTag = 2; // 상,하행선( 1:상행 2:하행 )
    $.ajax({
        url: "http://openAPI.seoul.go.kr:8088/4a71676f4e736f6e37387862697775/json/SearchSTNTimeTableByIDService/" + startIndex + "/" + endIndex + "/" + stationCode + "/" + weekTag + "/" + inOutTag + "/ ",
        dataType: "json",
        async: false,
        success: function (data) {
            var obj = data.SearchSTNTimeTableByIDService.row;
            var _arriveTime = [];
            var now = new Date();
            for(var i = 0; i < obj.length; i++) {
                var time = obj[i].ARRIVETIME;
                var spl = time.split(":");
                if (parseInt(spl[0]) >= 24) {
                    var myDate = new Date();
                    var tomorrow = myDate.getDate();
                    myDate.setDate(tomorrow + 1);
                    var year = myDate.getFullYear();
                    var month = myDate.getMonth() + 1;
                    var day = myDate.getDate();
                    var newTime = '0'+(parseInt(spl[0])-24 +":" + spl[1]+":"+spl[2]);
                    var target = new Date(year+"/"+month+"/"+day+" "+newTime);
                    _arriveTime.push(target.getTime() - now.getTime());
                } else {
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth()+1;
                    var day = date.getDate();
                    var target = new Date(year+"/"+month+"/"+day+" "+time);
                    _arriveTime.push(target.getTime() - now.getTime());
                }
            }
            var fast = indexOfSmallest(_arriveTime);
            
            var arriveTime = msToTime(_arriveTime[fast]);
            var _time = arriveTime.split(":");
            
            if(parseInt(_time[0]) > 0){
                this.downTime.text = _time[0] +"시간 "+_time[1]+"분";
            } else {
                this.downTime.text = _time[1] +"분 " + _time[2]+"초";
            }
            
        }.bind(this)
    });
    if(_name != this.subwayName || _line != this.subwayLine) {
        this.destroyBottom();
        this.drawBottom(this.lineColor[_line]['color'], _line, _name);
    }
}

function indexOfSmallest(a) {
    var lowest = a.length - 1;
    for (var i = 1; i < a.length; i++) { 
        if (a[i] < a[lowest] && a[i] > 0) lowest = i;
    }
    return lowest;
}

function msToTime(duration) {
    var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
