<script>
import { afterUpdate, onMount } from "svelte";


    export let cards = [];

    let descriptionData = cards[0];

    function updateText(i){
        descriptionData = cards[i];
        scrollToButton(i);
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

    function openModal(e){
        // Get the modal
        const modal = document.getElementById("myModal");

        const img = e.target;
        const modalImg = document.getElementById("img01");
        const captionText = document.getElementById("caption");
        
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;

    }

    function closeModal() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    }    

    function updateImages(){
        const images = document.getElementsByClassName('dataImg');
        for (const key in images){
            if (typeof images[key] === 'object') {
                images[key].onclick = openModal;
                console.log(images[key])
            }
        }
    }

    afterUpdate(() => {
        updateImages();
    })
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
                <div class='card-table'>
                    {#each descriptionData.table as field, i}
                    <div class="table-box">
                        <p>
                        <strong>{@html field.headline}</strong><br/>
                            {#if field.text}
                                    {@html field.text}
                            {:else if field.list}
                            <ul>
                                {#each field.list as li}
                                        <li>{@html li}</li>
                                {/each}
                            </ul>
                            {/if}
                        </p>
                    </div>
                    {/each}
                </div>
            {#if !!descriptionData.text}
                <p class="table-text">{@html descriptionData.text}</p>
            {/if}
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

    <!-- The Modal -->
    <div id="myModal" class="modal">

        <!-- The Close Button -->
        <span class="close" on:click={closeModal}>&times;</span>
    
        <!-- Modal Content (The Image) -->
        <img class="modal-content" alt='Fullscreen' id="img01">
    
        <!-- Modal Caption (Image Text) -->
        <div id="caption"></div>
    </div>
</section>

<style>
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

    .card-content.table{
        display: block;
        padding: 1em;
    }

    .card-table {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 1px;
        background-color: #fff;

        justify-content: center;
        text-align: left;
    }

    .table-box {
        background-color: #3c9c3c;
        color: #fff;
        border-radius: 2px;
        padding: 10px;

        overflow-wrap: break-word;
    }

    .table-box ul {
        padding-left: 1em;
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

        .card-content.table{
            padding: 0.5em;
        }

        .table-box {
            padding: 5px;
        }
    }


    /*TEST Modal Image*/
    /* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (Image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation - Zoom in the Modal */
.modal-content, #caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
</style>