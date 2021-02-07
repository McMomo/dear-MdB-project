<script>
import { afterUpdate } from "svelte";
import Collapsible from "./Collapsible.svelte";
import Table from "./Table.svelte";
import Modal, { addEventToImages } from "./Modal.svelte"


    export let cards = [];

    let descriptionData = cards[0];
    let IMG_NAME = 'stoppa49_banner'

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
    <img class='card-image' src='../Images/srcset/{IMG_NAME}-480w.webp' 
                   srcset='../Images/srcset/{IMG_NAME}-480w.webp 480w, 
                    ../Images/srcset/{IMG_NAME}-800w.webp 800w,
                    ../Images/srcset/{IMG_NAME}-1080w.webp 1080w,'
                    alt="forest and groundwater with a street inbetween"/>
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
    <Modal/>

</section>

<style>
    .description{
        width: 100vw;
        min-height: 75vh;
        max-height: 100vh;
        position: relative;
    }

    .card-wrapper{
        display: flex;
        flex-direction: column; 
        margin: 5% 10%;
        min-height: 30vh;
        height: 75vh;
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
        
        height: 75%;
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

    .card-image {
        position: absolute;
        z-index: -1;
        overflow: hidden;
        width: 100%;
        height: 100%;

        object-fit: cover;
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
