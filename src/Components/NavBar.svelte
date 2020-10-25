
<style>
    * {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    /* Add a black background color to the top navigation */
    .menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        /*
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: white;
        overflow: hidden;

        border-bottom: 1px solid black;
        */
    }

    .menu li a {
        display: block;
        padding: 10px;
    }

    /* Style the links inside the navigation bar */
    .item {
        order: 3;
        width: 100%;
        text-align: center;
        display: none;
        padding: 10px;

        
        color: black;
        font-size: 15px;
        text-transform: uppercase;
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

    .active .item {
        display: block;
    }

    /* Hide the link that should open and close the topnav on small screens */
    .toggle {
        order: 1;
        font-size: 20px;
        padding: 10px;
    } 

    @media screen and (max-width: 959px) {
        /**mobile view*/
    }

    @media all and (min-width: 600px) {
        /**desktop view*/
        .menu {
            align-items: flex-start;     
            flex-wrap: nowrap;
            background: none;
        }
        .logo {
            order: 0;
        }
        .item {
            order: 1;
            position: relative;
            display: block; 
            width: auto;
        }
        .toggle {
            display: none;
        }
    }
</style>

<script>
    // your script goes here
    export let navItems = [];
    export let logo;

    function myFunction(){
        console.debug('Hello World!')
    }

    
    /* Toggle mobile menu */
    function toggleMenu() {
        const toggle = document.getElementById("toggle");
        const menu = document.getElementById("menu");
        
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            
            // adds the menu (hamburger) icon
            toggle.innerHTML = "<i class=’fas fa-bars’></i>";
        } else {
            menu.classList.add("active");
            
            // adds the close (x) icon
            toggle.innerHTML = "<i class=’fas fa-times’></i>";
        }
    }
</script>

<header class='menu' id='menu'>
    <a class='logo active' href='/'>{logo}</a>
    {#each navItems as item}
        <a class='item' href={item.url}>{item.label}</a>
    {/each}
    <a href="javascript:void(0);" class="toggle" id='toggle' on:click={toggleMenu}>
        <i class="fa fa-bars"></i>
    </a>
</header>