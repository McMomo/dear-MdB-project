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
    bannerText : `Die Autobahn A49 soll zwischen Stadtallendorf und Gemünden quer durch ein FFH-Naturschutzgebiet und ein wichtiges Trinkwasserschutzgebiet gebaut werden.  Dafür sollen ca. 100 Hektar gesunder Mischwald in den Waldstücken “Herrenwald” bei Stadtallendorf, dem “Gerichtswald” bei Dannenrod und dem “Maulbacher Wald” bei Maulbach gerodet werden.\n
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
            text: `Der Kompromiss besteht aus 10 km Bundesstraße statt 30 km Autobahn und ist ein echter Gewinn in allen Bereichen.
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
                    [
                        '<h3>Durchbau: A49</h3><p>(30 km Autobahn von Treysa bis Anschlussstelle A5 zu bauen)</p>', 
                        '<h3>Kompromiss : P2</h3><p>(9 km Bundesstraße von Treysa bis Stadtallendorf zu bauen)</p>'], 
                    [
                        '<td><img src="../Images/auswirkung_A49_Karte.jpg" alt="Auswirkung A49 als Karte" style="width:100%;"/></td>',
                        '<td><img src="../Images/auswirkung_P2_Karte.jpg" alt="Auswirkung P2 als Karte" style="width:100%;"/></td>'
                    ],
                    [

                    ],
                ],
        
        }
    ]
}

export const footerData = {
        footerLinks : [
            {href: 'https://github.com/McMomo/dear-MdB-project/releases', title: 'GitHub', content: '<img src="../Images/github.svg" alt="GitHub" style="height: 1em;"/>'}, 
            {href: '../imprint.html', content: 'Impressum', title: 'Impressum'}, 
        ]
}