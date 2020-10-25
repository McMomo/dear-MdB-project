<style>
    /* your styles go here */
    .description{
        width: 75ve;
        height: 50vh;
        
        display: grid;
        grid-gap: 1rem;

        border-color: black;
        border-radius: 10px;
    }

    .card {
        padding: 10px;
    }

    .left-card{
        grid-column: 1;
        text-align: center;
    }

    .right-card{
        grid-column: 2;
        text-align: center;
    }

    .card-content{
        grid-column: 1 / 3;
        grid-row: 2;
    }
</style>

<script>
    // your script goes here
    //https://www.w3schools.com/howto/howto_js_expanding_grid.asp
    //https://stackoverflow.com/a/27441458
</script>

<section class='description'>
    <div class='card left-card'>
        <h3>Petition</h3>
    </div>
    <div class='card right-card'>
        <h3>Persönlicher Brief</h3>
    </div>
    <div class='card card-content'>
        <p>Medium length description with a few more words here.</p>
    </div>
</section>