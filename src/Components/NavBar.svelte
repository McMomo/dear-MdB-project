
<style>
    * {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    /* Add a black background color to the top navigation */
    .topnav {
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: white;
        overflow: hidden;

        border-bottom: 1px solid black;
    }

    .menu {
        padding: 0;
        margin: 0;
    }

    /* Style the links inside the navigation bar */
    .item {
        float: left;
        display: block;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        text-transform: uppercase;
    }

    .item a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
    }

    /* Change the color of links on hover */
    .item:hover {
        background-color: rgb(25, 160, 25);
        color: white;
    }

    /* Add an active class to highlight the current page */
    .item.active {
        font-weight: bolder;
    }

    /* Hide the link that should open and close the topnav on small screens */
    .topnav .toggle {
        display: none;
    } 

    @media screen and (max-width: 600px) {
        .topnav a:not(:first-child) {display: none;}
        .topnav a.toggle {
            float: right;
            display: block;
        }
    }   

@media screen and (max-width: 600px) {
    .topnav.responsive {position: relative;}
    .topnav.responsive .toggle {
        position: absolute;
        right: 0;
        top: 0;
    }
    .topnav.responsive a {
        float: none;
        display: block;
        text-align: left;
    }
}
</style>

<script>
    // your script goes here
    export let navItems = [];
    export let logo;

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    } 
</script>

<nav class='topnav' id='myTopnav'>
    <a class='item logo active' href='/'>{logo}</a>
    {#each navItems as item}
        <a class='item' href={item.url}>{item.label}</a>
    {/each}
    <a href="javascript:void(0);" class="item toggle" on:click={myFunction}>
        <i class="fa fa-bars"></i>
    </a>
</nav>