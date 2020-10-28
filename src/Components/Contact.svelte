<script>
import validator from 'validator';

    let selectedOption = '';
    
    // your script goes here
    function validateForm() {
        var x = document.forms["myForm"]["fname"].value;
        if (x == "") {
            alert("Name must be filled out");
            //TODO surround input with red instead
            return false;
        }
    } 

    function setInputs(){
        selectedOption = this.options[this.selectedIndex].value;
    }
</script>

<section class='contact'>
    <div class='wrapper'>
        <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
            <h2>Du willst helfen? Schreib uns doch:</h2>
            <label for='reason'>Warum möchtest du uns kontaktieren?</label>
            <!-- svelte-ignore a11y-no-onchange -->
            <select id='reason' on:change={setInputs}>
                <option value='brief'>Persönlichen Brief schreiben</option>
                <option value='petition'>Frage zur Petition</option>
                <option value='other'>Andere Frage</option>
            </select>

        

            {#if selectedOption == 'brief'}
                 <!-- content here -->
            {:else}
                 <!-- else content here -->
            {/if}
            <label for='name'>Dein Vor- und Nachname:</label>
            <input id='name'/>
    
            <label for='mail'>Deine E-Mail-Adresse:</label>
            <input id='mail'/>
    
            <label for='text'>Was möchtest du uns noch sagen?</label>
            <textarea id='text'/>
    
            <button type="submit" value="Submit" >Abschicken</button>
        </form> 
    </div>
</section>


<style>

    .contact {
        width: 100vw;
        min-height: 75vh;
    }

    .wrapper {
        display: grid;
        place-items: center;

        margin: 42px 10%;
        min-height: 30vh;

        background-color: #ededed;

        border: solid 0.3px #979797;
    }

    h2 {
        font-weight: 300;
    }

    form {
        min-width: 200px;
        width: 50vw;

        padding: 2.5%;
    }

    @media screen and (max-width: 200px) {
        /**TODO mobile view for .card-content*/
        form{
            min-width: 100vw;
        }
    }

    label, input, select, textarea {
        min-width: inherit;
        width: inherit;
    }
</style>