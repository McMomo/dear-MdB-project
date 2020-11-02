<script>
    export let cards = [];

    let descriptionData = cards[0];

    function updateText(i){
        descriptionData = cards[i];

        scrollToButton(i)
    }

    function setActive(){
        let desc = document.getElementsByClassName("description");
        let current = desc[0].getElementsByClassName('active');
        current[0].classList.remove('active');
        this.classList.add('active');
    }

    function scrollToButton(target){
        const tragetElement = document.getElementById(target);
        if (!!tragetElement){
            tragetElement.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start' });
        }
    }
</script>

<section class='description' id='about'>
    <div class='card-wrapper'>
        <div class='card-row'>
            {#each cards as card, i}
            <button class='card {i === 0? 'active': ''}' id={i} on:click={() => updateText(i)} on:click={setActive}>
                {card.label}
            </button>
            {/each}
        </div>
    
        <div class='card-content {!!descriptionData.table? 'table': ''}'>
            {#if !!descriptionData.table}
            <h2>{descriptionData.headline}</h2>
                <div>
                    <table>
                        {#each descriptionData.table as row,i}
                        <tr>
                            {#if i === 0}
                                {#each row as col}
                                    <th>{@html col}</th>
                                {/each}
                            {:else}
                                {#each row as col}
                                    <th>{@html col}</th>
                                {/each}
                            {/if}
                        </tr>
                        {/each}
                    </table>
                </div>
            {:else}
                 <img src={descriptionData.href} alt={descriptionData.alt}/>
                 <div>
                     <h2>{descriptionData.headline}</h2>
                     <p>{@html descriptionData.text}</p>
                </div>
            {/if}
        </div>
    </div>
    <p>
        <span>Photo by <a href="https://unsplash.com/@melanie_hnd?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Melanie Hauke</a> on <a href="https://unsplash.com/s/photos/forest?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </p>
</section>

<style>
    /* your styles go here */
    .description{
        width: 100vw;
        min-height: 75vh;
        
        background-image: url("../Images/melanie-hauke-ezsOp-DEjWI-unsplash.jpg");
        background-position: top;
        background-repeat: space;
        background-size: cover;
        position: relative;
    }

    .card-wrapper{
        display: grid;
        margin: 42px 10%;
        min-height: 30vh;
    }

    .card {
        margin: auto 10px 0 0;
        height: max-content;
        width: max-content;

        background-color: #e9e9e9;
        color: #979797;

        border-bottom: none;
        border-radius: 10px 10px 0  0;

        transition: none;
        transform: none;
    }
    
    .active {
        background-color:#3c9c3c;
        border-color:#3c9c3c;
        color: white;
    }

    .card:hover, .active:hover {
        border-color: #979797;
        font-weight: 300;
    }

    .card-row{
        display: flex;
        overflow-x: scroll;

        scrollbar-width: none;
    }

    .card-row::-webkit-scrollbar {
        width: 0;
    }

    .card-content{
        background-color: white;        
        
        max-height: 75vh;
        padding: 3em;
        overflow-y: scroll;

        border: solid 0.3px #979797;
        border-top: solid 3px #3c9c3c;

        display: grid;
        place-items: center;

        grid-gap: 1rem;
        grid-template-columns:  minmax(100px, 15%) 50vw;
    }

    .card-content img {
        width: 5em;
    }

    .card-content h2{
        text-align: center;
    }


    p span{
        position: absolute;

        right: 0;
        bottom: 0;

        margin: 1em;
        color: white;

        font-size: 10pt;
    }

    .card-content.table{
        grid-template-columns: 100%;
        padding: 1em;
    }

    table {
        width: 100%
    }

    table h2{
        text-align: center;
    }

    table img{
        width: 50%;
    }

    @media screen and (max-width: 600px) {
        /**mobile view for .card-content*/
        .card-content{
            grid-template-columns: 100%;
            padding: 1em;
        }

        .card-content img {
           opacity: 0.3;
           z-index: 0;
           position: absolute;
           /* justify-content: center; */
           top: calc(50% - 2.5em);
           left: calc(50% - 2.5em);
    }

    }
</style>