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
            <button class='card {i == 0? 'active': ''}' id={i} on:click={() => updateText(i)} on:click={setActive}>
                {card.label}
            </button>
            {/each}
        </div>
    
        <div class='card-content'>
            <img src={descriptionData.href} alt={descriptionData.alt}/>
            <div>
                <h2>{descriptionData.headline}</h2>
                <p>{descriptionData.text}</p>
            </div>
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
        background-position: center;
        background-repeat: no-repeat;
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
        background-color:rgb(60, 156, 60);
        border-color:rgb(60, 156, 60);
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

        min-height: inherit;
        padding: 3em;
        overflow-y: scroll;

        border: solid 0.3px #979797;
        border-top: solid 3px rgb(60, 156, 60);

        display: grid;
        place-items: center;

        grid-gap: 1rem;
        grid-template-columns:  minmax(100px, 15%) 50%;
    }

    .card-content img {
        width: 5em;
    }

    p span{
        position: absolute;

        right: 0;
        bottom: 0;

        margin: 1em;
        color: white;

        font-size: 10pt;
    }

    @media screen and (max-width: 600px) {
        /**TODO mobile view for .card-content*/
        .card-content{
            grid-template-columns: 100%;

            padding: 1em;
        }

        .card-content img {
           opacity: 0.3;
           z-index: 0;
           position: absolute;
           justify-content: center;
    }

    }
</style>