<script>
import { afterUpdate } from 'svelte';
import Modal, { addEventToImages } from './Modal.svelte'

import Hintergrund from '../Pages/Hintergrund.svelte'
import OffenerBrief from '../Pages/OffenerBrief.svelte'
import Planfall from '../Pages/Planfall.svelte'
import Petition from '../Pages/Petition.svelte'
import Vergleich from '../Pages/Vergleich.svelte'
import Fakten from '../Pages/Fakten.svelte'

    export let description = [
        {
            label: 'Petition',
            content: Petition
        },
        {
            label: 'Fakten zur A49',
            content: Fakten
        },
        {
            label: 'Planfall 2',
            content: Planfall
        },
        {
            label: 'Vergleich A49 & P2',
            content: Vergleich
        },
        {
            label: 'Hintergründe',
            content: Hintergrund
        },
        {
            label: 'Offener Brief',
            content: OffenerBrief
        },
    ]

    let descriptionData = description[0];
    let IMG_NAME = 'stoppa49_banner'

    function updateText(event){
        descriptionData = description[event.target.id];
    }

    function setActive(){
        let desc = document.getElementsByClassName('description');
        let current = desc[0].getElementsByClassName('active');
        current[0].classList.remove('active');
        this.classList.add('active');
    }

    function scrollToButton(event){
        if (!!event.target){
            event.target.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    }

    afterUpdate(() => {
        addEventToImages('dataImg');
    })
</script>

<section class='description' id='about'>
    <img class='description-background' src='../Images/srcset/{IMG_NAME}-480w.webp'
                   srcset='../Images/srcset/{IMG_NAME}-480w.webp 480w,
                    ../Images/srcset/{IMG_NAME}-800w.webp 800w,
                    ../Images/srcset/{IMG_NAME}-1080w.webp 1080w,
                    ../Images/srcset/{IMG_NAME}.svg 1200w'
                    alt='forest and groundwater with a street inbetween'/>
    <div class='description-wrapper'>
        <div class='description-nav'>
            {#each description as content, i}
                <button class='navButton {i === 0? 'active': ''}' id={i} on:click={updateText} on:click={scrollToButton} on:click={setActive}>
                    {content.label}
                </button>
            {/each}
        </div>

        <svelte:component this={descriptionData.content} />
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

    .description-wrapper{
        display: flex;
        flex-direction: column;
        margin: 5% 10%;
        min-height: 30vh;
        height: 75vh;
    }

    .navButton {
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

    .navButton:hover, .active:hover {
        border-color: #979797;
        font-weight: 300;
    }

    .description-nav{
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        margin-bottom: -1px;

        scrollbar-width: none;
        -ms-overflow-style: none;  /* IE and Edge */
    }

    .description-nav::-webkit-scrollbar {
        display: none; /* Chrome and Safari */
    }

    .description-background {
        position: absolute;
        z-index: -1;
        overflow: hidden;
        width: 100%;
        height: 100%;

        object-fit: cover;
    }

    @media screen and (max-width: 600px) {
        /**mobile view for .description-content*/
        .description-wrapper{
            margin: 5%;
        }
    }
</style>
