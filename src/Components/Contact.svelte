<script>
    import validator from 'validator';

    let name = '';
    let selectedOption = '';
    let hometown = '';
    let mail = '';
    let text = '';

    
    // your script goes here
    //https://www.npmjs.com/package/validator
    function validateForm() {
        var x = document.forms["myForm"]["fname"].value;
        if (x == "") {
            alert("Name must be filled out");
            //TODO surround input with red instead
            return false;
        }
    } 
</script>

<section class='contact'>
    <div class='wrapper'>
        <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
            <h2>Du willst helfen? Schreib uns doch:</h2>

            <label for='name'>Wie heißt du?</label>
            <input id='name' bind:value={name} placeholder='Vor- und Nachname'/>

            {#if name !== ''}
                <label for='reason'>Hallo, {name}! Warum möchtest du uns kontaktieren?</label>
                <!-- svelte-ignore a11y-no-onchange -->
                <select id='reason' bind:value={selectedOption}>
                    <option value='placeholder' disabled selected>Bitte auswählen</option>
                    <option value='brief'>Persönlichen Brief schreiben</option>
                    <option value='petition'>Frage zur Petition</option>
                    <option value='other'>Andere Frage</option>
                </select>        
            {/if}
           

            {#if selectedOption === 'brief'}
                 <!-- Hier eventuell eine info beim hovern mit kleinem Icon-->
                 <label for='hometown'>Wo wohnst du? Um den Brief einem MdB zuzuordnen.</label>
                 <input id='hometown' bind:value={hometown} placeholder='Wahlkreis, Heimatort oder Bundesland.'/>
            {/if}
            
            {#if selectedOption === 'brief' && hometown !== ''}
                <label for='mail'>Deine E-Mail-Adresse:</label>
                <input id='mail' bind:value={mail}/>
            {:else if  selectedOption !== '' && selectedOption !== 'brief' && name !== ''}
                <label for='mail'>Deine E-Mail-Adresse:</label>
                <input id='mail' bind:value={mail}/>
            {/if}
            
            {#if mail !== ''}
                <label for='text'>Was möchtest du uns sagen oder fragen?</label>
                <textarea id='text' bind:value={text}/>

                <!-- dont forget: https://developers.google.com/recaptcha/intro-->
    
                <button type="submit" value="Submit" >Abschicken</button>
            {/if}
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

    option[value="placeholder"][disabled] {
        display: none;
    }
</style>