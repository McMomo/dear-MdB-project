<script>
    export const cards = [
        {
            label: 'Persönlicher Brief', 
            headline:'Illum' ,
            text: 'Illum a quidem saepe suscipit nesciunt mollitia eligendi inventore fuga. Maiores placeat distinctio eveniet ipsum quo dicta vel, molestias quibusdam.', 
            href:'../Images/021-letter-3.svg'
        },
        {
            label: 'Petition', 
            headline:'Lorem', 
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, sint.', 
            href:'../Images/015-petition.svg'
        },
        ]

    let descriptionData = cards[0];

    function updateText(i){
        descriptionData = cards[i];
    }

    function setActive(){
        let desc = document.getElementsByClassName("description");
        let current = desc[0].getElementsByClassName('active');
        current[0].classList.remove('active');
        this.classList.add('active');
    }
</script>

<section class='description'>
    <div class='card-wrapper'>
        <div class='card-row'>
            {#each cards as card, i}
            <button class='card {i == 0? 'active': ''}' on:click={() => updateText(i)} on:click={setActive}>
                {card.label}
            </button>
            {/each}
        </div>
    
        <div class='card-content'>
            <img src={descriptionData.href} alt='Text matching Icon'/>
            <div>
                <h2>{descriptionData.headline}</h2>
                <p>{descriptionData.text}</p>
            </div>
        </div>
    </div>
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
        margin: 0px;
        margin-right: 10px;
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

    @media screen and (max-width: 600px) {
        /**TODO mobile view for .card-content*/
    }
</style>