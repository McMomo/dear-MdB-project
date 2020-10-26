<style>
    /* your styles go here */
    .description{
        display: grid;
        grid-auto-rows: min-content;
        margin: 42px 10%;

        width: 100%;
        min-height: 50vh;
        border-radius: 10px;

        background-color: #EDEDED;
        box-shadow: 6px 6px 14px 0 rgba(0, 0, 0, 0.2),
        -8px -8px 18px 0 rgba(255, 255, 255, 0.55);
    }

    .card {
        padding: 10px;
        height: min-content;

        background-color: #EDEDED;
    }

    h3 {
        margin: 0;
    }

    .active {
        border-top: solid  rgb(25, 160, 25) 3px;
        box-shadow: none !important;
    }

    .left-card{
        grid-column: 1;
        text-align: center;
        border-radius: 10px 0 0  0;

        box-shadow: inset 6px 6px 14px 0 rgba(255, 255, 255, 0.55),
        inset -8px -8px 18px 0 rgba(0, 0, 0, 0.2);
    }

    .right-card{
        grid-column: 2;
        text-align: center;
        border-radius: 0 10px 0  0;

        box-shadow: inset -6px 6px 14px 0 rgba(255, 255, 255, 0.55),
        inset 8px -8px 18px 0 rgba(0, 0, 0, 0.2);
    }

    .card-content{
        grid-column: 1 / 3;
        grid-row: 2;
        
        min-height: inherit;
        padding: 3em;
        overflow-y: scroll;
    }
</style>

<script>
    // your script goes here
    //https://www.w3schools.com/howto/howto_js_expanding_grid.asp
    //https://stackoverflow.com/a/27441458
</script>

<section class='description'>
    <div class='card left-card active'>
        <h3>Petition</h3>
    </div>
    <div class='card right-card'>
        <h3>Persönlicher Brief</h3>
    </div>
    <div class='card-content'>
        <p>Medium length description with a few more words here.</p>
    </div>
</section>