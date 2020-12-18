<script>
    // your script goes here
    export let sharingHref;
    export let sharingClass = 'share';
    export let sharingFA = sharingClass;

    const sharingClassLow = sharingClass.toLowerCase();

    function mouseleaveHover(event){
        event.target.className = event.target.className.replace(" color-"+sharingClassLow, " "+sharingClassLow);
    }

    function mouseoverHover(event){
        event.target.className = event.target.className.replace(" "+sharingClassLow, " color-"+sharingClassLow);
    }
</script>

<style>
    /* your styles go here */
    a {
        display: block;
        width: 100%;
        line-height: 40px;
        border: 1px solid rgba(255,255,255,.3);
        color: rgba(255,255,255,.6);
        text-decoration: none;
        text-align:center;
    }

    a i{
        margin-right: 15px !important;
    }

    a:hover  {
        border: 1px solid rgba(255,255,255,.3);
        color: rgba(255,255,255,.6);
    }

    /* Hover background colors */
    .color-twitter {
      background-color: #00aced !important;
    }
    .color-facebook {
      background-color: #3b5998 !important;
    }

    .color-instagram {
        background-color: #e1306c !important;
    }

    .color-whatsapp {
        background-color: #4ac959 !important;
    }

    .color-telegram {
        background-color: #53b1f0 !important;
    }
    .color-e-mail {
        background-color: #2e2e2e !important;
    }

    .sharingButton {
        -webkit-transition: all .2s ease-in;
        -moz-transition: all .2s ease-in;
        -ms-transition: all .2s ease-in;
        -o-transition: all .2s ease-in;
        transition: all .2s ease-in;
    }
</style>

<a href={sharingHref} class='sharingButton {sharingClassLow}' on:mouseover={mouseoverHover} on:mouseleave={mouseleaveHover} target="_blank" rel="noopener noreferrer">
    <i class='fa fa-{sharingFA}'></i>
    {sharingClass}
</a>
