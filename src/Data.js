export const navBarData = {
    
        navItems : [
            {target: 'about', label: 'Unsere Ziele'}, 
            {target: 'contact', label: 'Mitmachen'}
        ]
    ,
    
        logo : { href:'../Images/013-tree.svg' ,alt:'#dannibleibt'}
}

export const bannerData = {
    bannerHeadline : 'Stoppt die A49, stoppt die Rodung der Wälder!',
    bannerText : `Die Autobahn A49 soll zwischen Stadtallendorf und Gemünden durch ein europarechtlich geschütztes Flora - Fauna - Habitat und ein wichtiges Trinkwasserschutzgebiet gebaut werden.  Dafür sollen ca. viele Hektar gesunder Mischwald in den Waldstücken “Herrenwald” bei Stadtallendorf, dem “Danneröder Forst” bei Dannenrod und dem “Wutholz” bei Maulbach gerodet werden.\n
    Wie kann man helfen, die Rodung der Wälder und den Bau der A49 zu verhindern? Wir wollen den Bundestag mit einer Petition überzeugen, die Rodungen und den Bau zu stoppen. Um der Petition noch mehr Nachdruck zu verleihen, wollen wir außerdem jedem Bundestagsabgeordneten einen individuellen Brief schicken. Hier kommst du ins Spiel!\n Noch nicht überzeugt? Auf unserer Seite findest du weitere Infos.
    `,
    
    bannerButtonTarget : 'contact',
    bannerButtonText : 'Jetzt mithelfen!',
}

export const descriptionData = {
    cards: [
        {
            label: 'Persönlicher Brief', 
            headline:'Ein persönlicher Brief an alle Abgeordneten des Bundestages.' ,
            text: `Um unserer Petition mehr Gewicht zu verleihen, ist es ein weiteres Ziel, allen Abgeordneten des Bundestags einen persönlichen Brief zu schreiben.
            Wir werden Briefe an alle 709 Abgeordnete schreiben und brauchen daher mindestens 709 helfende Hände und dafür brauchen wir deine Hilfe. 
            Durch die individuellen Briefe wollen wir versuchen, an die Menschen hinter den Politiker*innen zu kommen. Was spricht für den Bau der A49? Was dagegen? Was ist mit der Kompromisslösung 'Planfall 2'?  
            <br/><br/>
            Wenn du uns unterstützen willst, den Bau der A49 zu stoppen, schreib uns über das Kontaktformular und wir melden uns bei dir. 
            <br/><br/>
            Wir brauchen auch noch viele weitere Briefeschreiber*innen. Am besten aus ganz Deutschland, um einen direkten Bezug zu den Abgeordneten herzustellen.
            Kennst du noch welche? Teile unsere Seite mit ihnen!`
            , 
            href:'../Images/021-letter-3.svg',
            alt:'Icon letter writing'
        },
        {
            label: 'Petition', 
            headline:'Petition und Kompromisslösung', 
            text: `Mit unserer Petition wollen wir den Bundestag auffordern, der Rodung und dem Bau der A49 Einhalt zu gebieten. Weitere Infos folgen in Kürze! 
            Wenn du nichts über die Petition verpassen möchtest, kannst du dich über das Kontaktformular in einen Verteiler eintragen lassen. Sobald es Neuigkeiten gibt, geben wir dir dann Bescheid.  
            `, 
            href:'../Images/015-petition.svg',
            alt:'Icon petition'
        },
        {
            label: 'Planfall 2', 
            headline:'Der Planfall 2 - ein Kompromiss zur A49' ,
            text: `Der Kompromiss besteht aus 9 km Bundesstraße statt 30 km Autobahn und ist ein echter Gewinn in allen Bereichen.
                Wie soll das gehen? Die Autobahn bleibt vierspurig bis Treysa und wird dann zwei/
                dreispurig auf der geplanten Trasse der A49 weitergeführt. Schließlich erfolgt ein Anschluss
                an die Straße zwischen Neustadt und Stadtallendorf (B454). 
                <br/><br/>
                Dieses Verbindungsstück wäre keine 2 km lang. Statt einer Autobahn würde also eine neue Bundesstraße zwischen Treysa
                und Stadtallendorf gebaut werden. Dieser Kompromiss steht deshalb nicht im Widerspruch
                zur infrastrukturellen Anbindung der Region oder wirtschaftlichen Interessen!
                <br/>
                <img src='../Images/1B_Karte.jpg' alt='Karte von Planfall 2' style='width:100%;'/>
            `, 
            href:'../Images/002-road.svg',
            alt:'Icon street in forest'
        },
        {
            label: 'Vergleich A49 & P2',
            headline: 'Vergleich von Durchbau der A49 zum Planfall 2 (P2) für Stadtallendorf',
            type: 'table',
            table: [

                        {headline: '<h3>Durchbau: A49</h3>',
                        text: '(30 km Autobahn von Treysa bis Anschlussstelle A5 zu bauen)'},
                        {
                            headline: '<h3>Kompromiss : P2</h3>',
                            text: '(9 km Bundesstraße von Treysa bis Stadtallendorf zu bauen)'
                        },


                        {
                            headline: 'Auswirkungen der A49:',
                            text: '<img src="../Images/auswirkung_A49_Karte.jpg" alt="Auswirkung A49 als Karte" style="width:100%;"/>'
                        },
                        {
                            headline: 'Auswirkungen von P2:',
                            text: '<img src="../Images/auswirkung_P2_Karte.jpg" alt="Auswirkung P2 als Karte" style="width:100%;"/>'
                        },
                        
                        {
                            headline: 'Entlastungswirkung auf',
                            list: [
                            'B3: sehr gut',
                            'B454 (Neustadt / Wiera): gut',
                            ]
                        },
                                                {
                            headline: 'Entlastungswirkung auf',
                            list: [
                                'B3: sehr gut',
                                'B454 (Neustadt / Wiera): optimal'
                                ]
                        },

                        {
                            headline: 'Anbindung in Richtung Kassel (Norden):',
                            list: ['sehr gut',]
                        },
                        {
                            headline: 'Anbindung in Richtung Kassel (Norden):',
                            list: [
                                'sehr gut: 13 km 2/3 spurig, der Rest vierspurig und alles ohne Ortsdurchfahrten.',
                                'Nur knapp 2 km sind neu zu planen (Spange zur B454). Wenn dies nicht möglich ist, kann die Bundesstraße auf der planfestgestellten Trasse bis zum Gewerbegebiet Stadtallendorf durchgebaut werden. → Baurecht für P2 schon jetzt vorhanden!'
                            ]
                        },

                        {
                            headline: 'Anbindung in Richtung Süden (Gießen / Frankfurt):',
                            list: [
                                'Strecke über Marburg ist etwa gleich lang',
                                'Strecke durch den Ebsdorfer Grund ist kürzer und ebener => A49 verbessert die Anbindung in Richtung Süden nicht',
                            ]
                        },
                        {
                            headline: 'Anbindung in Richtung Süden (Gießen / Frankfurt):',
                            list: [
                                'Verzicht auf eine dritte Möglichkeit von Stadtallendorf aus gleichgut nach Gießen zu kommen',
                            ]
                        },

                        {
                            headline: 'Belastung:',
                            list: [
                                'bis zu 72 % mehr Verkehr in Stadtallendorf<br/><img src="../Images/belastung_a49_karte.jpg" style="width: 100%;"/><br/>hr / Quelle DEGES'
                            ]
                        },
                                                {
                            headline: 'Belastung:',
                            list: [
                                'Zwischen 29,3 % und 36,3 % mehr Verkehr in Stadtallendorf',
                                '(Quelle: Belastungsprognose der hessischen Straßenbauverwaltung durchgeführt von SSP Consult 2009, vgl. Tabelle S. 20 plus 6600 Kfz pro Tag in Stadtallendorf.) Die Bezugstelle ist die Ausfahrt in Richtung Kirchhain.'
                            ]
                        },

                        {
                            headline: 'Belastungen, die von der Autobahn selbst ausgehen:',
                            list: [
                                'Lärm, Abgase, Gefahr (Unfall / Stau / Autobahnsperrung, in diesem Fall müssten ca. 36.000 – 40.000 Kfz durch Stadtallendorf hindurch nach Gießen fahren),',
                                'Organisierte Einbrecherbanden bevorzugen Wohngebiete in unmittelbarer Nähe zu einer Autobahnauffahrt.',
                                'In allen Verlautbarungen zur „Entlastungswirkung“ der A49 tauchen die Belastungen, die direkt von der Autobahn ausgehen, nicht auf! Man geht offenbar davon aus, dass ein Fahrzeug, das auf der A49 unterwegs ist, lautlos und ohne Sprit fährt.',
                            ]
                        },
                        {
                            headline: 'Belastungen, die von der Autobahn selbst ausgehen:',
                            list: [
                                    'Gibt es bei P2 nicht.',
                                ]
                        },

                        {
                            headline: 'Auswirkungen auf die nähere Umgebung (Natur):',
                            list: [
                                '<italic>„Beim Autobahnbau gehen nur 3% Wald im Dannenröder Forst verloren.“</italic>',
                                'ABER:',
                                'Die Zerschneidung von Lebensräumen / Wald durch die Autobahn bedeutet Stress für Bäume, Tiere und Menschen, der weit über die reine Flächenversiegelung hinausgeht.',
                                'Verlust von landwirtschaftlichen Flächen',
                                'Eingriffe in die Natur werden durch Ausgleichsmaßnahmen wieder "gut" gemacht',
                                'ABER:<br/><italic>Fläche ist endlich. Asphaltiert man eine Fläche, dann müsste man bei einem echten Ausgleich die gleiche Menge Asphalt an anderer Stelle entfernen, Bäume pflanzen und 100 Jahre wann ist vielleicht ein annähernder Ausgleich erreicht.</italic>',
                                'Stadtallendorf verliert 50 % seines Naherholungsraumes',
                                'Bau durch ein Trinkwasserschutzgebiet: [Geschäftsführer des Zweckverbands Mittelhessischer Wasserwerke (nach Hessenschau): „Für die mittelhessische Wasserversorgung wird das wie eine Operation am offenen Herzen.“]',
                                'Autobahntrasse durch den Dannenröder Forst ("Danni"), gute Ackerböden um Homberg und das Wutholz bei Maulbach',
                                'Bau durch das europarechtlich geschützte FFH-Gebiet Herrenwald.',
                                'Das Verfahren bzw. der Nachweis zu den "zwingenden Gründen", die den Bau durch das FFH-Gebiet Herrenwald überhaupt erst ermöglichen, war höchst problematisch und fehlerhaft. Im Moment werden juristische Überprüfungen des Verfahrens vorbereitet.',
                            ],
                        },
                        {
                            headline: 'Auswirkungen auf die nähere Umgebung (Natur):',
                            list: [
                                'Ab Stadtallendorf keinerlei negative Auswirkungen, bis Stadtallendorf deutlich weniger',
                                'Schon gefällte Flächen kann sich die Natur zurückholen. Sie stehen dann auch der Naherholung zur Verfügung.',
                                'Eine Gefährdung des Trinkwassers findet nicht statt.',
                                'Polizei und Aktivisten können nach Hause gehen.',
                            ],
                        },

                        {
                            headline: 'Kosten',
                            list: ['30 km Autobahnbau mit hohen Sonderkosten (z. B. Trinkwasserschutz, Gleentalbrücke)',]
                        },                        
                        {
                            headline: 'Kosten',
                            list: [
                                'Kosten für 9 km Bundesstraße, ggf. Konventionalstrafe (bislang geheim gehalten), aber man kann davon ausgehen, dass trotzdem sehr, sehr viele Millionen Euro eingespart würden.',
                                ]
                        },

                        {
                            headline: 'Wirtschaftliche Interessen:',
                            list: [
                                'Firmen, die in der Baubranche tätig sind, Lobbyismus?',
                                ]
                        },                        
                        {
                            headline: 'Klimakrise:',
                            list: [
                                'Verkehrswende, Zukunft unserer Kinder; Glaubwürdigkeit: Nicht über die Abholzung des Regenwaldes beschweren, sondern vor Ort beginnen ',
                                ],
                        },

                ],
                text: `<h3>Was spricht für die A49 und gegen P2?</h3>
                Achtung, das sind die Gründe des Bundes für den Bau der A49, allerdings bringen diese für die Region (Stadtallendorf) nur Nachteile:
                <br/><br/>
                Die A49 soll erstens eine Entlastung eines Teilabschnitts von A5/A7 bewirken und zweitens die Strecke zwischen Kassel und Gießen (Dänemark und Italien) um 11,5 km verkürzen.
                Diese überregionalen Ziele löst P2 nicht. 
                <italic>Allerdings haben diese Argumente für den Durchbau der A49 einen bitteren Beigeschmack:</italic> Die bestehenden Probleme vor Frankfurt (A5) und in Kassel (A7) werden durch die A 49 verschärft (Stau). Die Hoffnung, dass die Umwelt vom Autobahnbau profitiert (CO2-Einsparung), erscheint bei 11,5 km Streckenverkürzung (keine 6 Minuten bei 120km/h) und vorausgesagten 1500 Kfz neu entstehenden Straßenverkehrs fraglich und sind keinesfalls verhältnismäßig.
                <br/><br/>
                Kaum eine Firma, (Lokal)politiker oder Anwohner kennt die großen Vorteile für die Region durch P2. Doch P2 wurde bereits 2009 behördlich berechnet und es besteht ein prinzipielles Baurecht!
                <br/><br/>
                <a href='../Files/Gespräch Wirtschaftsministerium zum P2 am 14.10.2020 für die Öffentlichkeit.pdf' target="_blank" rel="noopener noreferrer">Gespräch mit dem hessischen Wirtschaftsministerium zum P2 am 14.10.2020</a>
                `,      
        }
    ]
}

export const footerData = {
        footerLinks : [
            {href: 'https://github.com/McMomo/dear-MdB-project/releases', title: 'GitHub', content: '<img src="../Images/github.svg" alt="GitHub" style="height: 1em;"/>'}, 
            {href: '../imprint.html', content: 'Impressum', title: 'Impressum'}, 
            {href: '../source.html', content: 'Quellen', title: 'Quellen'}, 
        ]
}