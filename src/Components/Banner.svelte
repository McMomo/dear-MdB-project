<script>
    import ShowMore from './ShowMore.svelte'

</script>

<section class="banner">
    <div class="banner-text">
        <h1>Stoppt die A49, stoppt den Bau der Autobahn!</h1>
        <div>
            <h3 style="text-align: center;"> Unterstützt jetzt unsere Petition auf Campact, um unseren Forderungen mehr Nachdruck zu verleihen! </h3>
            <p style="text-align: center;">
                <a href="https://weact.campact.de/petitions/stopp-a49-nur-10-km-bundesstrasse-statt-30-km-autobahn?share=1fd866bc-aff2-4f61-b439-6802b4459553&source=email-share-button&utm_medium=recommendation&utm_source=email"
                target="_blank"
                rel="noopener noreferrer"   
                >
                    Hier gehts zur Campact Petition!
                </a>
            </p>
        </div>
            <div class="video-container">
                <iframe title="StoppA49 Animationsfilm" width="560" height="315" src="https://www.youtube.com/embed/SQFwIJQDKQ0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        <ShowMore>
            <h3>Ein großer Erfolg mit bitterem Beigeschmack:</h3>
            <p> 
                Über den Bau der A49 <u>könnte</u> im Deutschen Bundestag tatsächlich erneut abgestimmt werden!!!
                <br>
                Unsere Petition <strong>(Pet 1-19-12-9111-040642)*</strong> wurde überraschend direkt vom Petitionsausschuss zur weiteren Überprüfung angenommen und befindet sich somit bereits im "parlamentarischen Verfahren". Es ist deshalb nicht mehr nötig und möglich für unsere Petition auf der offiziellen Seite des Bundestages zu stimmen. 
                <br>
                Aber das Verfahren ist nicht öffentlich und wir haben keine Möglichkeit mehr direkt Einfluss zu nehmen (Veröffentlichung / Rede"recht"). 
            </p>
            <p>
                <strong>Deshalb müssen wir nun andere Wege finden, um auf die Existenz und den Inhalt unsere Petition aufmerksam zu machen: die Öffentlichkeit, die Medien, die Bundestagsabgeordneten.</strong>
                <br><br>
                Die A49 steht symptomatisch für das Nicht-Handeln unserer Politiker in Bezug auf Klima- und Artenschutz.
                <br>
                Für den Dannenröder Forst gibt es in etwa so viel Hoffnung wie für unsere Erde.
            </p>
            <p>
                Deshalb fordern wir im Wahljahr die Politiker zum sofortigen, konkreten Handeln auf. 
                <br>
                Es steht zu viel auf dem Spiel, um die Hoffnung aufzugeben - Arme hochkrempeln und
                <br>
                alle zusammen zuerst den Danni retten und "danni" die Welt.
            </p>
            <p>
                <i style='font-size: 6pt;line-height: 6pt;'>* Hintergrund ist, dass "unsere Petition" mit anderen Petitionen zur A49 einer Leitpetition angeschlossen wurde, die nicht öffentlich ist. Deshalb werden wir auf der Seite des Bundestages weder etwas über unsere Petition lesen können, noch ist das Verfahren transparent. Wir kennen nur unsere Petitionsnummer (s.o.) mit Sicherheit. Der Name "StoppA49: nur 10km Bundesstraße statt 30 km Autobahn (P2 statt A49)" stammt von uns.</i>
            </p>
        </ShowMore>
    </div>
</section> 

<style>
    .banner {
        display: grid;
        place-items: center;

        width: 100vw;
        height: min-content;
        padding: 4em 0 2.5% 0;
        background-image: linear-gradient(#60b550, #3c9c3c);
        margin: 0;
    }

    .banner-text {
        position: relative;
        text-align: center;
        color: white;
        
        width: 75vw;
        
        overflow: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    h1, h3 {
        margin: 1rem 0;
    } 

    h3 {
        text-align: start;
    }

    .banner-text p {
        text-align: start;
        margin: 1em 0;
    }

    .banner-text i {
        display: block;
        font-size: 7pt;
        line-height: 1.2em;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .banner-text::-webkit-scrollbar {
    display: none;
    }

    .video-container {
        overflow: hidden;
        position: relative;
        width:100%;
    }

    .video-container::after {
        padding-top: 56.25%;
        display: block;
        content: '';
    }

    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 600px) {
        /**mobile view for .card-content*/
        .banner{
            padding-top: calc(5% + 3em);
        }
    }
</style>