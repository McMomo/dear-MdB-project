<div class='content-table'>
    <slot></slot>
</div>

<style>
    /* your styles go here */
    .content-table {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 1px;
        background-color: #fff;

        justify-content: center;
        text-align: left;
    }

    .content-table :global(div) {
        background-color: #3c9c3c;
        color: #fff;
        border-radius: 2px;
        padding: 10px;

        overflow-wrap: break-word;
    }

    .content-table :global(div ul ) {
        padding-left: 1em;
    }

    @media screen and (max-width: 600px) { 
        .content-table :global(div) {
            padding: 5px;
        }
    }

</style>