<script>
    // your script goes here
    export let footerLinks = [];
</script>

<section class="footer">
    <div class="footer-links">
        {#each footerLinks as link}
             <a href={link.href} title={link.title}>{@html link.content}</a>
        {/each}
    </div>
</section>

<style>
    /* your styles go here */
    .footer{
        width: 100%;
        height: 3rem;

        background-color: #60b550;
        background-image: linear-gradient(#3c9c3c, #60b550);
    }

    .footer-links{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;

        height: inherit;
    }

    a {
        padding: 10px;
        color: white;
        text-transform: uppercase;
        font-weight: 300;
    }
</style>