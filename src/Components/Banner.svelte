<script>
    import ShowMore from './ShowMore.svelte'

</script>

<section class="banner">
    <div class="banner-text">
        <h1>Stoppt die A49, stoppt den Bau der Autobahn!</h1>
        <div>
            <p style="text-align: center; font-size: 1.5em;">
                Unsere Petition wurde leider abgelehnt. Warum könnt ihr weiter unten nachlesen.
            </p>
        </div>
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
