<style>
    /* The hero image */
    .hero-image {
        background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75)), url("../Images/melanie-hauke-ezsOp-DEjWI-unsplash.jpg");

        /* Set a specific height */
        height: 60vh;
        width: 100%;

        /* Position and center the image to scale nicely on all screens */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    /* Place text in the middle of the image */
    .hero-text {
        position: relative;
        text-align: center;
        color: white;
        
        width: 75vw;
        top: 50%;
        left: 50%;
        
        transform: translate(-50%, -50%);

        overflow: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .hero-text::-webkit-scrollbar {
    display: none;
    }

</style>

<script>
    // your script goes here
</script>

<section class="hero-image">
    <div class="hero-text">
        <h1>Stoppt die A49, stoppt die Rodung der Wälder</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa, quia sunt dolore eveniet blanditiis iusto eos veniam at illum quas quisquam, reiciendis distinctio, dolores iure adipisci deleniti repellendus accusantium?
            <span>Photo by <a href="https://unsplash.com/@melanie_hnd?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Melanie Hauke</a> on <a href="https://unsplash.com/s/photos/forest?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </p>
    
        <button>Jetzt mitmachen!</button>
    </div>
</section> 