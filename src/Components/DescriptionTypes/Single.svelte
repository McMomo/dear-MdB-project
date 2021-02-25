<script>
    export let isLeft = false;
</script>

<div class:isLeft class='description-single'>
    <slot></slot>
</div>

<style>
	
    .description-single{
        display: flex;
        flex-direction: column;
        place-items: center;

        height: 75%;
        padding: 3em;
        overflow-y: scroll;

        background-color: white;        
        border: solid 0.3px #979797;
        border-top: solid 3px #3c9c3c;

    }

    .description-single :global(h2){
        text-align: center;
    }

    .isLeft {
        place-items: start;
    }

    @media screen and (max-width: 600px) {
        /**mobile view for .description-single*/
        .description-single{
            padding: 1em;
        }
    }

</style>