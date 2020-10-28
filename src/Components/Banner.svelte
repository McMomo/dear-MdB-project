<script>
    // your script goes here
    //TODO rename to banner
</script>

<section class="banner">
    <div class="banner-text">
        <h1>Stoppt die A49, stoppt die Rodung der Wälder</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa, quia sunt dolore eveniet blanditiis iusto eos veniam at illum quas quisquam, reiciendis distinctio, dolores iure adipisci deleniti repellendus accusantium?
            <span>Photo by <a href="https://unsplash.com/@melanie_hnd?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Melanie Hauke</a> on <a href="https://unsplash.com/s/photos/forest?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </p>
    
        <button>Jetzt mitmachen!</button>
    </div>
</section> 

<style>
    .banner {
        display: grid;
        place-items: center;

        /*background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75)), url("../Images/melanie-hauke-ezsOp-DEjWI-unsplash.jpg");*/
        background-color: rgb(60, 156, 60);

        height: min-content;
        width: 100vw;
        padding: 0 0 2.5% 0;
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
        background-color: inherit;
    }
</style>