<script>
    // your script goes here
    export let navItems = []
	export let logo = { href:'' ,alt:''}
    
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
</header>

<style>
    /* Add a black background color to the top navigation */
    .menu {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
        
        position: absolute;
        width: 100vw;

        top: 0;
        background-color: transparent;
        overflow: hidden;

        padding: 10px 0;
    }

    /* Style the links inside the navigation bar */
    .item {
        position: relative;
        display: block; 
        
        background-color: transparent;
        width: auto;
        
        margin: 0;
        margin-right: 2em;
    }

    .logo{
        height: 2.5em;
        margin: 5px auto 5px 10px;
    }

    .logo img{
        height: inherit;
        padding: 2px;
    }


    button {
        background-color: inherit;
        color: white;
    }
</style>
