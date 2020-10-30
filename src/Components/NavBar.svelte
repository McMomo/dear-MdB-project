<script>
    // your script goes here
    const navItems = [{target: 'about', label: 'Unser Ziel'}, {target: 'contact', label: 'Mitmachen'}]
	const logo = { href:'../Images/013-tree.svg' ,alt:'#dannibleibt'}
    
    let toggleFlag = true;

    // Initial call because need to set the class
    toggleMenu()

    function scrollToSection(target){
        const tragetElement = document.getElementById(target);
        if (!!tragetElement){
            tragetElement.scrollIntoView({behavior: "smooth"});
        }
    }

    /* Toggle mobile menu */
    function toggleMenu() {
        const menu = document.getElementById("menu");

        if (menu && menu.classList.contains("active")) {
            menu.classList.remove("active");
            
            toggleFlag = false;
        } else if (menu){
            menu.classList.add("active");

            toggleFlag = true;
        }
    }
    //.crazy:before
    //https://itnext.io/how-to-build-a-responsive-navbar-using-flexbox-and-javascript-eb0af24f19bf
    //https://linguinecode.com/post/create-a-navbar-in-svelte

    //https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
</script>

<header class='menu active' id='menu'>
    <a class='logo' href='/'><img src={logo.href} alt={logo.alt} /></a>
    {#each navItems as item}
        <button class='item' on:click={() => scrollToSection(item.target)}>{item.label}</button>
    {/each}
    <button class="toggle" on:click={toggleMenu}>
        {#if toggleFlag}
             <!-- content here -->
             <img src='./Images/close.svg' alt='close menu' />
             {:else}
             <!-- else content here -->
             <img src='./Images/menu.svg' alt='open menu' />
        {/if}
    </button>
</header>

<style>
    /* Add a black background color to the top navigation */
    .menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
        
        position: absolute;
        width: 100vw;

        top: 0;
        z-index: 10;
        background-color: #60b550;
        overflow: hidden;

        padding: 10px 0;
    }

    /* Style the links inside the navigation bar */
    .item {
        order: 3;
        width: 100%;
        display: none;
        background-color: #3c9c3c;
        margin: 0;
    }

    /* Add an active class to highlight the current page */
    .menu.active .item{
        display: block;
    }

    .logo{
        height: 2.5em;
        margin: 0 auto 10px 10px;
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
        margin-right: 10px;

        background-color: #3c9c3c;
        border: none;
    }

    .toggle:hover{
        background-color: white;
        fill: #EDEDED;
    }

    button {
        background-color: inherit;
        color: white;
    }

    @media all and (min-width: 600px) {
        /**desktop view*/
        .menu {
            flex-wrap: nowrap;
            background-color: transparent;
        }
        .logo {
            order: 0;
        }
        .item {
            order: 1;
            position: relative;
            display: block; 
            width: auto;
            
            margin-right: 2em;
            background-color: transparent;
        }
        .toggle {
            display: none;
        }
    }
</style>