<script>
    // your script goes here
    export let content;
</script>

<div class='content-table'>
    {#each content as field, i}
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

    @media screen and (max-width: 600px) { 
        .table-box {
            padding: 5px;
        }
    }

</style>