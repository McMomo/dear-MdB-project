
<script>
	export let image;
</script>

<div class='description-default'>
    <img src={image.href} alt={image.alt}/>
    <div>
    <slot></slot>
    </div>
</div>

<style>
	
    .description-default{
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

    .description-default img {
        width: 5em;
    }

    .description-default :global(h2){
        text-align: center;
    }

    @media screen and (max-width: 600px) {
        /**mobile view for .description-default*/
        .description-default{
            grid-template-columns: 100%;
            padding: 1em;
        }

        .description-default img {
           opacity: 0.3;
           z-index: -1;
           position: absolute;
           /* justify-content: center; */
           top: calc(50% - 2.5em);
           left: calc(50% - 2.5em);
        }    
    }

</style>