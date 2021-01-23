<script>
import { afterUpdate } from "svelte";
import Collapsible from "./Collapsible.svelte";
import Table from "./Table.svelte";
import Modal, { addEventToImages } from "./Modal.svelte"


    export let cards = [];

    let descriptionData = cards[0];

    function updateText(event){
        descriptionData = cards[event.target.id];
    }

    function setActive(){
        let desc = document.getElementsByClassName("description");
        let current = desc[0].getElementsByClassName('active');
        current[0].classList.remove('active');
        this.classList.add('active');
    }

    function scrollToButton(event){
        if (!!event.target){
            event.target.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start' });
        }
    }

    afterUpdate(() => {
        addEventToImages('dataImg');
    })
</script>

<section class='description' id='about'>
    <img class="card-image" src="../Images/melanie-hauke-ezsOp-DEjWI-unsplash-300.jpeg" 
                    srcset="../Images/melanie-hauke-ezsOp-DEjWI-unsplash-300.jpeg 300w, 
                    ../Images/melanie-hauke-ezsOp-DEjWI-unsplash-500.jpeg 500w,
                    ../Images/melanie-hauke-ezsOp-DEjWI-unsplash-750.jpeg 750w,
                    ../Images/melanie-hauke-ezsOp-DEjWI-unsplash-1000.jpeg 1000w,
                    ../Images/melanie-hauke-ezsOp-DEjWI-unsplash-2000.jpeg 2000w" 
                    alt="Look into trees from the ground"/>
    <div class='card-wrapper'>
        <div class='card-row'>
            {#each cards as card, i}
            <button class='card {i === 0? 'active': ''}' id={i} on:click={updateText} on:click={scrollToButton} on:click={setActive}>
                {card.label}
            </button>
            {/each}
        </div>
    
        <div class='card-content {descriptionData.type ?? ''}'>
            
            {#if descriptionData.href}
            <img src={descriptionData.href} alt={descriptionData.alt}/>
            {/if}
            
            <div>
                <h2>{descriptionData.headline}</h2>
                {#if descriptionData.textTop}
                    <p>
                        {@html descriptionData.textTop}
                    </p>
                {/if}
                {#if descriptionData.table}
                    <Table content={descriptionData.table} />
                {:else if  !!descriptionData.collapsibles}
                    {#each descriptionData.collapsibles as col}
                        <Collapsible headline={col.headline} content={col.content} />
                    {/each}
                {/if}
                {#if descriptionData.text}
                    <p class='{descriptionData.table? "table-text": ""}'>
                        {@html descriptionData.text}
                    </p>
                {/if}
            </div>
        </div>
    </div>
    <p>
        <span>Photo by <a href="https://unsplash.com/@melanie_hnd?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Melanie Hauke</a> on <a href="https://unsplash.com/s/photos/forest?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </p>
    <Modal/>

</section>

<style>
    .description{
        width: 100vw;
        min-height: 75vh;
      
        position: relative;
    }

    .card-wrapper{
        display: grid;
        margin: 5% 10%;
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

        outline: none;
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
        -ms-overflow-style: none;  /* IE and Edge */
    }

    .card-row::-webkit-scrollbar {
        display: none; /* Chrome and Safari */
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

    .card-content.table{
        display: block;
        padding: 2em;
    }

    .card-content.single{
        display: block;
        padding: 3em;
    }

    .table-text {
        padding: 10px 5%;
        padding-bottom: 30px;
    }

    p span{
        position: absolute;

        right: 0;
        bottom: 0;

        margin: 1em;
        color: white;

        font-size: 10pt;
    }

    .card-image {
        position: absolute;
        z-index: -1;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 600px) {
        /**mobile view for .card-content*/
        .card-content{
            grid-template-columns: 100%;
            padding: 1em;
        }

        .card-wrapper{
            margin: 5%;
        }

        .card-content img {
           opacity: 0.3;
           z-index: 0;
           position: absolute;
           /* justify-content: center; */
           top: calc(50% - 2.5em);
           left: calc(50% - 2.5em);
        }    

        .card-content.table{
            padding: 0.5em;
        }

        .card-content.single{
           padding: 1em;
        }       

        .table-box {
            padding: 5px;
        }

        p span{
        margin: 0.5em;
        font-size: 8pt;
        }
    }
</style>
