export const stepInfo = [
    {
        num: "01",
        text: {
            us: {text: "Arts & crafts", font: {d: 9.8, m: 7.1, t: 10}, margin: {d: -1, m: -15, t: 22}},
            ru: {text: "Искусства & ремесла", font: {d: 7.1, m: 4.4, t: 7}, margin: {d: 1, m: -13, t: 30}},
            tj: {text: "Санъат & ҳунар", font: {d: 8.9, m: 6.1, t: 8.65}, margin: {d: -1, m: -15, t: 29}}
        },
        desc: {
            us: 
                {
                    text: `Handicrafts serve as a tangible representation of the intellectual and aesthetic essence 
                        of the Tajiks, intricately intertwined with their lifestyle, culture, and mythology.
                        <div class='space'></div>
                        There are nearly 200 unique arts and crafts still practiced within the Tajik communities, 
                        many as old as the Eastern Iranian civilization itself.
                        <div class='space'></div>
                        <div class='space'></div>`,
                    link: '/arts'
                },
            ru: 
                {
                    text: `Народные промыслы являются воплощением и интеллектуального, и эстетического 
                        наследия таджиков. Они неразрывно связаны с их образом жизни, культурой и мифологией.
                        <div class='space'></div>
                        Среди таджиков до сих пор сохранилось около 200 уникальных видов 
                        искусства и ремесел, многие из которых возникли наравне с формированием восточноиранской цивилизации.
                        <div class='space'></div>
                        <div class='space'></div>`,
                    link: '/arts?ru'
                },
            tj: 
                {
                    text: `Ҳунарҳои мардумӣ намунаи моддии фикрӣ ва зебоишиносии тоҷикон буда, 
                        бо тарзи зиндагӣ, фарҳанг ва асотири тоҷикон пайвастаанд.
                        <div class='space'></div>
                        Дар байни тоҷикони олам, то ҳол, тахминан 200 намуди ҳунарҳои хос ва беҳамто вуҷуд доранд, 
                        ки қадимии бисёрашон баробари қадимии тамаддуни эрониёни шарқӣ ҳастанд.
                        <div class='space'></div>
                        <div class='space'></div>`,
                    link: '/arts?tj'
                },
        },
        outer: [
            {size: 16, bottom: {d: "-3%", t: "-2%"}, right: {d: "27%", t: "18%"}},
            {size: 12, bottom: {d: "3%", t: "25%"}, right: {d: "7.7%", t: "7%"}},
            {size: 30, top: {d: "-13.2%", t: "-7.2%"}, right: {d: "-3%", t: "-4.5%"}}
        ],
        inner: [
            {size: 15, bottom: {d: "-1.75%", t: "-1.5%"}, right: {d: "27.5%", t: "18.5%"}, img: "/homeImages/craft3.png"},
            {size: 11, bottom: {d: "3.5%", t: "25.5%"}, right: {d: "7.2%", t: "6.5%"}, img: "/homeImages/craft2.png"},
            {size: 29, top: {d: "-13%", t: "-6.5%"}, right: {d: "-1.2%", t: "-2.2%"}, img: "/homeImages/craft1.png"}
        ],
    },
    {
        num: "02",
        text: {
            us: {text: "Customs", font: {d: 9.3, m: 5.8, t: 9.3}, margin: {d: 4.5, m: -15, t: 15}},
            ru: {text: "Обычаи", font: {d: 9.5, m: 6.1, t: 9.8}, margin: {d: 3.5, m: -15, t: 15}},
            tj: {text: "Расму оин", font: {d: 8, m: 7.5, t: 9.5}, margin: {d: -1, m: -15, t: 14}}
        },
        desc: {
            us: 
                {
                    text: `Tajik customs and traditions reflect a mix of Persian, Islamic, Zoroastrian, and Central Asian heritage. 
                        Celebrations like Navrüz, Mehrgon and weddings are filled with spirituality and are accompanied by colorful 
                        rituals, traditional clothing, and folk songs and dances. 
                        <div class='space'></div>
                        The culture values hospitality and finds artistic richness in classical poetry, folklore, and ornate handicrafts.
                        <div class='space'></div>
                        <div class='space'></div>`,
                    link: "/customs"
                },
            ru:  {
                    text: `Таджикские обычаи и традиции отражают смесь персидского, исламского, 
                        зороастрийского и центральноазиатского наследия. 
                        Такие праздники, как Навруз, Мехрган и свадьбы пропитаны духовностью и сопровождаются народными песнями, 
                        танцами и обрядами.
                        <div class='space'></div>
                        Культура отличается гостеприимством и большое значение придается 
                        классической поэзии, фольклору и ремеслам.           
                        <div class='space'></div>
                        <div class='space'></div>`,
                    link: "/customs?ru"
                },
            tj: {
                    text: `Дар урфу одат ва анъанаҳои тоҷикон омезиши маданияти форсӣ, исломӣ, зардуштӣ ва Осиёи Марказӣ зоҳир мешаванд.
                        Ҷашнвораҳо, аз қабили Наврӯзу Меҳргон ва 
                        тӯйҳо саршори расму оинҳои рангоранг, либосҳои маҳаллӣ ва суруду рақсҳои мардумӣ ҳастанд.
                        <div class='space'></div>
                        Тоҷикон мардуми меҳмоннавоз буда, дар ин фарҳанг ашъори классикӣ, фолклор ва ҳунарҳои дастӣ ҷои махсусро ишғол мекунанд.
                        <div class='space'></div>
                        <div class='space'></div>`,
                    link: "/customs?tj",
                },
        },
        outer: [
            {size: 16, top: {d: "-7%", t: "-2%"}, right: {d: "29%", t: "32%"}},
            {size: 12, bottom: {d: "1%", t: "50%"}, right: {d: "35%", t: "2%"}},
            {size: 30, top: {d: "17%", t: "55%"}, right: {d: "0.5%", t: "1%"}}
        ],
        inner: [
            {size: 15, top: {d: "-7.5%", t: "-2.5%"}, right: {d: "29.7%", t: "32.7%"}, img: "/homeImages/custom3.png"},
            {size: 11, bottom: {d: "1.5%", t: "50.5%"}, right: {d: "35%", t: "2.5%"}, img: "/homeImages/custom2.png"},
            {size: 29, top: {d: "17%", t: "55%"}, right: {d: "1.5%", t: "2%"}, img: "/homeImages/custom1.png"}
        ],
    },
    {
        num: "03",
        text: {
            us: {text: "Cuisine", font: {d: 11, m: 6.8, t: 11}, margin: {d: 3.5, m: -15, t: 30}},
            ru: {text: "Кухня", font: {d: 11.7, m: 7.6, t: 11}, margin: {d: 1, m: -15, t: 29}},
            tj: {text: "Ғизоҳо", font: {d: 10.7, m: 6.65, t: 10.5}, margin: {d: 4, m: -15, t: 31}}
        },
        desc: {
            us: {
                text: `Tajik cuisine, an intricate fusion of Middle Eastern, Central, East, and South 
                    Asian influences with recent additions from Eastern Europe, boasts a unique flavor profile. 
                    The culinary artistry, shaped over centuries along with the diverse geography of Tajik-inhabited lands, 
                    has given rise to a special highland cuisine centered around grains and dairy, distinguishing it from 
                    the meat and vegetable-centric fare prevalent in the culinary practices of lowland Tajiks.
                    <div class='space'></div>
                    <div class='space'></div>`,
                link: "/cuisine"
            },
            ru: {
                text: `Таджикская кухня, представляющая собой сложное сочетание влияний Ближнего Востока, Центральной, 
                    Восточной и Южной Азии с недавними добавками из Восточной Европы, может похвастаться уникальным вкусовым профилем. 
                    Кулинарное мастерство, формировавшееся на протяжении веков вместе с разнообразной географией населенных таджиками 
                    земель, породило особую высокогорную кухню, основанную на зерновых и молочных продуктах, что отличает ее от 
                    мясных и овощных блюд, преобладающих в кулинарии равнинных таджиков.
                    <div class='space'></div>
                    <div class='space'></div>`,
                link: "/cuisine?ru"
            },
            tj: {
                text: `Таомҳои тоҷикӣ дар натиҷаи таъсироти ғизоҳои Шарқи Наздик, Осиёи Миёна, Шарқӣ ва Ҷанубӣ ва дар садсолаи охир бо 
                    иловаҳои хӯрокҳои Аврупои Шарқӣ ба вуҷуд омада, дорои маззаҳои гуногун мебошанд. Санъати ошпазӣ дар тӯли асрҳо ва 
                    вобаста ба ҷуғрофиёи ҳархелаи заминҳои тоҷикнишин ташаккул ёфта, ҳар як минтақа хосияти худро дорад. Хӯрокҳои 
                    баландкӯҳиён асосан аз ғалладона ва маҳсулоти ширӣ иборат буда, аз ғизоҳои гӯштӣ ва сабзавотии тоҷикони водинишин 
                    фарқ мекунанд.
                    <div class='space'></div>
                    <div class='space'></div>`,
                link: "/cuisine?tj"
                }
        },
        outer: [
            {size: 16, top: {d: "-1.5%", t: "50%"}, right: {d: "27%", t: "3.5%"}},
            {size: 12, top: {d: "55%", t: "80%"}, right: {d: "87.5%", t: "15%"}},
            {size: 30, top: {d: "25%", t: "-8%"}, right: {d: "0%", t: "15%"}}
        ],
        inner: [
            {size: 15, top: {d: "0%", t: "50.5%"}, right: {d: "27.5%", t: "2.5%"}, img: "/homeImages/cuisine3.png"},
            {size: 11, top: {d: "55%", t: "80.5%"}, right: {d: "88%", t: "15.5%"}, img: "/homeImages/cuisine2.png"},
            {size: 29, top: {d: "25%", t: "-8%"}, right: {d: "1%", t: "16%"}, img: "/homeImages/cuisine1.png"}
        ],
    },
    {
        num: "04",
        text: {
            us: {text: "Language & literature", font: {d: 6.8, m: 4.35, t: 6.85}, margin: {d: 3, m: -13, t: 30}},
            ru: {text: "Язык & литература", font: {d: 6.8, m: 4.2, t: 6.8}, margin: {d: 2, m: -13, t: 25}},
            tj: {text: "Забон & адабиёт", font: {d: 9, m: 5.7, t: 9}, margin: {d: -1, m: -13, t: 27}}
        },
        desc: {
            us: {
                text: `The languages spoken by the Tajik peoples, whether belonging to the Western or 
                    Eastern Iranian language continua, lie at the core of their identity and have 
                    been paramount for their survival.
                    <div class='space'></div>
                    They encode Tajik people's unique worldviews, their ancestral wisdom, 
                    their stories, and their songs. These languages stand as a testament of resilience, 
                    serving as a bridge connecting the past and the present — defining who Tajiks are.
                    <div class='space'></div>
                    <div class='space'></div>`,
                link: "/language"
                },
            ru: {
                text: `Языки, на которых говорят таджикские народы, независимо от того, принадлежат ли они к западному или 
                    восточно-иранскому языковому континууму, лежат в основе их идентичности и имеют первостепенное значение для их выживания.
                    В них закодированы уникальное мировоззрение, исконная мудрость, рассказы и песни таджикского народа. Эти языки являются 
                    свидетельством устойчивости и служат мостом, соединяющим прошлое и настоящее таджиков.
                    <div class='space'></div>
                    <div class='space'></div>`,
                link: "/language?ru"
                },
            tj: {
                text: `Забонҳои мардуми тоҷик, ки чи ба гурӯҳи забонҳои эронии ғарбӣ ва чи шарқӣ дахл доранд, 
                    сарчашмаи ҳастӣ ва қавитарин исботи фарҳанги куҳани тоҷикон ҳастанд. Онҳо ҷаҳонбинии махсус, 
                    ҳикмати аҷдодӣ, достонҳо ва таронаҳои тоҷиконро дар бар мегиранд. Ин забонҳо сабаби зинда мондани 
                    тоҷикон буда, гузашташонро бо имрӯзашон мепайванданд.
                    <div class='space'></div>
                    <div class='space'></div>`,
                link: "/language?tj"
                }
        },
        outer: [
            {size: 16, top: {d: "1.2%", t: "53.5%"}, right: {d: "0%", t: "3%"}},
            {size: 12, top: {d: "0%", t: "4%"}, right: {d: "30%", t: "51%"}},
            {size: 30, bottom: {d: "-8%", t: "62%"}, right: {d: "9.5%", t: "-5%"}},
        ],
        inner: [
            {size: 15, top: {d: "-1%", t: "54%"}, right: {d: "2%", t: "3%"}, img: "/homeImages/lang3.png"},
            {size: 11, top: {d: "1.5%", t: "4.5%"}, right: {d: "29.5%", t: "50%"}, img: "/homeImages/lang2.png"},
            {size: 29, bottom: {d: "-6.75%", t: "62.5%"}, right: {d: "10%", t: "-4.5%"}, img: "/homeImages/lang1.png"}
        ],
    },
    {
        num: "05",
        text: {
            us: {text: "History", font: {d: 10.1, m: 6.25, t: 10}, margin: {d: 5, m: -15, t: 20}},
            ru: {text: "История", font: {d: 8.79, m: 5.4, t: 8.7}, margin: {d: 5, m: -15, t: 20}},
            tj: {text: "Таърих", font: {d: 10.7, m: 6.7, t: 10.5}, margin: {d: 3.5, m: -16, t: 20}}
        },
        desc: {
            us: {
                text: `The Tajiks are indigenous people of Central Asia with a history spanning over two millennia. 
                    As descendants of Sogdians, Bactrians and Khwarazmians, they were pivotal in establishing the early farming 
                    traditions and trade practices in the region. Throughout centuries, Central Asia evolved into a crossroads of 
                    civilizations, resulting in a Turco-Persian symbiosis, which sculpted the unique identity of the Tajik people. 
                    <div class='space'></div>
                    <div class='space'></div>`,
                link: "/history"
                },
            ru: {
                text: `Таджики – коренной народ Центральной Азии, история которого насчитывает более двух тысячелетий. Будучи потомками 
                    согдийцев, бактрийцев и хорезмийцев, они сыграли большую роль в установлении ранних традиций земледелия и торговли 
                    в регионе. На протяжении веков Центральная Азия превратилась в перекресток цивилизаций, что привело к тюрко-персидскому 
                    симбиозу, который сформировал уникальную идентичность таджикского народа.
                    <div class='space'></div>
                    <div class='space'></div>`,
                link: "/history?ru"
                },
            tj: {
                text: `Тоҷикон мардуми муқимии Осиёи Миёна буда, дорандаи таърихи беш аз ду ҳазорсола ҳастанд. Онҳо ҳамчун насли суғдиён, 
                    бохтариён ва хоразмиён ба ташаккули анъанаҳои нахустини кишоварзӣ ва тиҷорат дар минтақа ҳиссаи бузурге гузоштаанд. Дар давоми 
                    садсолаҳо, Осиёи Марказӣ ба чорроҳаи тамаддунҳо табдил ёфта, ки дар натиҷа симбиози турку форс ба вуҷуд омада, ба  
                    худшиносии мардуми тоҷик таъсири бузурге расонидааст.
                    <div class='space'></div>
                    <div class='space'></div>`,
                link: "/history?tj"
            }
        },
        outer: [
            {size: 16, top: {d: "1%", t: "3%"}, right: {d: "27%", t: "3%"}},
            {size: 12, top: {d: "-1%", t: "1%"}, right: {d: "50%", t: "33%"}},
            {size: 30, bottom: {d: "-5%", t: "-4%"}, right: {d: "1%", t: "1.5%"}}
        ],
        inner: [
            {size: 15, top: {d: "2.25%", t: "3.5%"}, right: {d: "27.5%", t: "3.5%"}, img: "/homeImages/history3.png"},
            {size: 11, top: {d: "0.5%", t: "2%"}, right: {d: "52%", t: "35%"}, img: "/homeImages/history2.png"},
            {size: 29, bottom: {d: "-3.5%", t: "-3.5%"}, right: {d: "1.5%", t: "1.5%"}, img: "/homeImages/history1.png"}
        ],
    },
];