<style>
    /* your styles go here */
    .description{
        display: grid;
        grid-auto-rows: min-content;
        column-gap: 2em;
        margin: 42px 10%;

        width: 100%;
        min-height: 50vh;
        border-radius: 10px;
    }

    .card {
        margin: 0px;
        height: max-content;
        width: max-content;

        background-color: #e9e9e9;
        color: #979797;

        border-bottom: none;
        border-radius: 10px 10px 0  0;
    }

    .card:active, .active {
        background-color:rgb(60, 156, 60);
        border-color:rgb(60, 156, 60);
        color: white;
    }

    .card-content{
        grid-column: 1 / 5;
        grid-row: 2;

        background-color: white;        

        min-height: inherit;
        padding: 3em;
        /*overflow-y: scroll;*/

        border: solid 0.3px #979797;
        border-top: solid 3px rgb(60, 156, 60);
    }
</style>

<script>
    export const cards = [{label: 'Petition', headline:'Lorem', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, sint.'}, {label: 'Persönlicher Brief', headline:'Illum' ,text: 'Illum a quidem saepe suscipit nesciunt mollitia eligendi inventore fuga. Maiores placeat distinctio eveniet ipsum quo dicta vel, molestias quibusdam.'}]
    
    export const cardsLen = cards.length + 1;

    const descriptionData = { headline: cards[0].headline, text: cards[0].text}
    let descriptionText = cards[0].text;

    function updateText(i){
        descriptionText = cards[i].text;
    }

    function setActive(){
        let desc = document.getElementsByClassName("description");
        let current = desc[0].getElementsByClassName('active');
        current[0].classList.remove('active');
        this.classList.add('active');
    }
</script>

<section class='description'>
    {#each cards as card, i}
        <button class='card {i == 0? 'active': ''}' on:click={() => updateText(i)} on:click={setActive}>
            {card.label}
        </button>
    {/each}

    <div class='card-content'>
       <p>{descriptionText}</p>
    </div>
</section>