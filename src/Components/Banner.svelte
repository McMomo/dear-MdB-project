<script>
    export let bannerHeadline = '';
    export let bannerText = '';

    export let bannerButtonTarget = '';
    export let bannerButtonText = '';

    // your script goes here
    function scrollToSection(target){
        const tragetElement = document.getElementById(target);
        if (!!tragetElement){
            tragetElement.scrollIntoView({behavior: "smooth"});
        }
    }
</script>

<section class="banner">
    <div class="banner-text">
        <h1>{bannerHeadline}</h1>
        <p>{bannerText}</p>
    
        <button on:click={() => scrollToSection(bannerButtonTarget)}>{bannerButtonText}</button>
    </div>
</section> 

<style>
    .banner {
        display: grid;
        place-items: center;

        width: 100vw;
        height: min-content;
        padding: 5% 0 2.5% 0;
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

    .banner-text p{
        text-align: justify;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .banner-text::-webkit-scrollbar {
    display: none;
    }

    button {
        font-size: 1.5em;
        color: white;
        background-color: transparent;
    }

    @media screen and (max-width: 600px) {
        /**mobile view for .card-content*/
        .banner{
            padding-top: calc(5% + 3em);
        }
    }
</style>