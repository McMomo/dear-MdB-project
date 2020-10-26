
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
        justify-content: flex-end;
        align-items: center;
        
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: #EDEDED;
        overflow: hidden;

        border-bottom: 1px solid black;
        padding: 10px;
    }

    /* Style the links inside the navigation bar */
    .item {
        order: 3;
        width: 100%;
        text-align: center;
        display: none;
        padding: 10px;
        
        background-color: inherit;
        border: none;
        color: black;
        font-size: 15px;
        text-transform: uppercase;
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
    }

    /* Change the color of links on hover */
    .item:hover {
        background-color: rgb(25, 160, 25);
        color: #EDEDED;
    }

    /* Add an active class to highlight the current page */
    .menu.active .item{
        display: block;
    }

    .logo{
        height: 2.5em;
        
        margin-right: auto;

        text-align: center;
        color: black;
        font-size: 15px;
        text-transform: uppercase;
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
    }

    .logo img{
        height: inherit;
        padding: 2px;
    }

    /* Hide the link that should open and close the topnav on small screens */
    .toggle {
        order: 1;
        height: 3em;
        width: 3em;
        font-size: 15px;

        padding: 10px;

        background-color: inherit;
        border: none;
        color: black;
    }

    .toggle:hover{
        background-color: rgb(25, 160, 25);
        fill: #EDEDED;
    }

    @media screen and (max-width: 959px) {
        /**mobile view*/
    }

    @media all and (min-width: 600px) {
        /**desktop view*/
        .menu {
            flex-wrap: nowrap;
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
    const navItems = [{url: '/about', label: 'Unser Ziel'}, {url: '/contact', label: 'Mitmachen'}]
	const logo = { href:'../Images/love.svg' ,alt:'#dannibleibt'}
    
    let toggleFlag = true;

    /* Toggle mobile menu */
    function toggleMenu() {
        const menu = document.getElementById("menu");

        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            
            toggleFlag = false;
        } else {
            menu.classList.add("active");

            toggleFlag = true;
        }
    }
    //.crazy:before
    //https://itnext.io/how-to-build-a-responsive-navbar-using-flexbox-and-javascript-eb0af24f19bf

    //https://www.w3schools.com/howto/howto_js_scroll_indicator.asp

    //scrollnavigation
    //element.scrollIntoView(true)
</script>

<header class='menu active' id='menu'>
    <a class='logo' href='/'><img src={logo.href} alt={logo.alt} />Dear MdB ..</a>
    {#each navItems as item}
        <button id='item' class='item' href={item.url}>{item.label}</button>
    {/each}
    <button class="toggle" id='toggle' on:click={toggleMenu}>
        {#if toggleFlag}
             <!-- content here -->
             <img src='./Images/menu.svg' alt='open menu' />
             {:else}
             <!-- else content here -->
             <img src='./Images/close.svg' alt='close menu' />
        {/if}
    </button>
</header>