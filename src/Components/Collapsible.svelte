<script>
    // your script goes here
    export let content;
    export let headline; 


    function toggleCollapsible(event){
        const button = event.target;
        console.debug(button)
        button.classList.toggle("active")

        const content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    }

</script>

<div class="collapsible">
    <button class="collapsibleButton" on:click={toggleCollapsible}>{headline}</button>
    <div class="collapsibleContent">
        <p>{@html content}</p>
    </div> 
</div>


<style>

    button:hover{
        transform: unset;
        font-weight: unset;
    }

    button:focus {
        border-color: inherit;
    }

    .collapsible {
        margin: 1rem 0;
    }

    /* Style the button that is used to open and close the collapsible content */
    .collapsibleButton {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 1rem;
        margin: 0;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
    }

    /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
    .active, .collapsibleButton:hover {
        background-color: #ccc;
    }

    /* Style the collapsible content. Note: hidden by default */
    .collapsibleContent {
        padding: 0 1rem;
        max-height: 0;
        overflow: hidden;
        background-color: #f1f1f1;
        transition: max-height 0.2s ease-out;
    } 
</style>