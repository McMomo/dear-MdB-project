<script>
    import SharingButton from './SharingButton.svelte'
    // your script goes here
    const sharingItems = [
        {
            sharingHref: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fstoppa49.org%2F&text=StoppA49%20-%20Petition%20an%20den%20Bundestag&hashtags=dannibleibt,stoppa49',
            sharingClass: "twitter",
        },
        {
            sharingHref: 'https://www.facebook.com/sharer.php?u=https%3A%2F%2Fstoppa49.org%2F',
            sharingClass: "facebook",
        },
        {
            sharingHref: 'whatsapp://send/?text=StoppA49%20-%20Petition%20an%20den%20Bundestag%20https%3A%2F%2Fstoppa49.org',
            sharingClass: "whatsapp",
        },
        {
            sharingHref: 'https://telegram.me/share/url?url=https%3A%2F%2Fstoppa49.org&text=StoppA49%20-%20Petition%20an%20den%20Bundestag',
            sharingClass: "telegram",
        },
        {
          sharingHref: 'mailto:?subject="StoppA49%20-%20Petition%20an%20den%20Bundestag%20"&body=https%3A%2F%2Fstoppa49.org',
          sharingClass: 'E-Mail',
          sharingFA: 'envelope',
        },
    ]

</script>

<style>
    /* your styles go here */
    .sharing-container{
        height: min-content;
        width: 75vw;
        margin: 20px;

        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        place-items: center;
    }
</style>

<div class="sharing-container">
    {#each sharingItems as sItem}
        <SharingButton {...sItem}/>
    {/each}
</div>
