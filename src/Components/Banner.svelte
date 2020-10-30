<script>

    const buttonTarget = 'contact';

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
        <h1>Stoppt die A49, stoppt die Rodung der Wälder</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa, quia sunt dolore eveniet blanditiis iusto eos veniam at illum quas quisquam, reiciendis distinctio, dolores iure adipisci deleniti repellendus accusantium?
            <span>Photo by <a href="https://unsplash.com/@melanie_hnd?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Melanie Hauke</a> on <a href="https://unsplash.com/s/photos/forest?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </p>
    
        <button on:click={() => scrollToSection(buttonTarget)}>Jetzt mitmachen!</button>
    </div>
</section> 

<style>
    .banner {
        display: grid;
        place-items: center;

        width: 100vw;
        height: min-content;
        padding: 7.5% 0 2.5% 0;
        background-image: linear-gradient(#60b550, #3c9c3c);
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

    /* Hide scrollbar for Chrome, Safari and Opera */
    .banner-text::-webkit-scrollbar {
    display: none;
    }

    button {
        font-size: 1.5em;
        color: white;
        background-color: transparent;
    }
</style>