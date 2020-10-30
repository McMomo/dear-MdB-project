<script>
    import validator from 'validator';
    import { onMount, onDestroy } from 'svelte';

    const dataSitekey = '6Lcn_twZAAAAAEBbZU0qXRH2TdZLlYFQuzvpG4CU';

    let name = '';
    let selectedOption = '';
    let hometown = '';
    let mail = '';
    let text = '';

    function validateForm(token) {

        console.log('validating')

        if (!token){
            console.error('failed validation')
            return false;
        } else if (!name){
            console.error('failed validation')
            return false;
        } else if (selectedOption === 'brief' && !hometown){
            console.error('failed validation')
            return false;
        } else if (!validator.isEmail(mail)){
            console.error('failed validation')
            return false;
        }

        let contact = document.getElementById('contactForm')
        
        //if (window.location.href.includes('localhost')){
        //    contact.action = 'http://localhost:80/contact-form-process.php'
        //}

        contact.submit()
    } 

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 

    onMount(() => {
        topFunction();
        window.validateForm = validateForm;

    })

    onDestroy(() => {        
        window.validateForm = validateForm;
    })
</script>

<section class='contact' id='contact'>
    <div class='wrapper'>
        <form id="contactForm" action='mailto:{selectedOption == 'brief'? 'brief': 'info'}@stoppa49.org?subject=Anfrage - {selectedOption}&body={selectedOption == 'brief'? 'Wohnort: '+ hometown + '\n' : ''}Nachricht: {text}' method='get' enctype="text/plain" on:submit|preventDefault={validateForm}>
            <h2>Du willst helfen? Schreib uns doch:</h2>

            <label for='name'>Wie heißt du?</label>
            <input id='name' name='name' bind:value={name} placeholder='Vor- und Nachname'/>

            {#if name !== ''}
                <label for='reason'>Hallo, {name}! Warum möchtest du uns kontaktieren?</label>
                <!-- svelte-ignore a11y-no-onchange -->
                <select id='reason' name='reason' bind:value={selectedOption}>
                    <option value='placeholder' disabled selected>Bitte auswählen</option>
                    <option value='brief'>Persönlichen Brief schreiben</option>
                    <option value='petition'>Frage zur Petition</option>
                    <option value='other'>Andere Frage</option>
                </select>        
            {/if}
           

            {#if selectedOption === 'brief'}
                 <!-- Hier eventuell eine info beim hovern mit kleinem Icon-->
                 <label for='hometown'>Wo wohnst du? Um den Brief einem MdB zuzuordnen.</label>
                 <input id='hometown' name='hometown' bind:value={hometown} placeholder='Wahlkreis, Heimatort oder Bundesland.'/>
            {/if}
            
            {#if selectedOption === 'brief' && hometown !== ''}
                <label for='mail'>Deine E-Mail-Adresse:</label>
                <input id='mail' name='mail' bind:value={mail} required type="email"/>
            {:else if  selectedOption !== '' && selectedOption !== 'brief' && name !== ''}
                <label for='mail'>Deine E-Mail-Adresse:</label>
                <input id='mail' name='mail' bind:value={mail} required='' />
            {/if}
            
            {#if mail !== ''}
                <label for='text'>Was möchtest du uns sagen oder fragen?</label>
                <textarea id='text' name='text' bind:value={text}/>

                <!--

                    <script src="https://www.google.com/recaptcha/api.js?" async defer></script>
                    <div class="g-recaptcha" data-sitekey='{dataSitekey}' data-size='compact' data-callback='setToken' data-expired-callback='resetToken'></div>
                    <script src="https://www.google.com/recaptcha/api.js"></script>                
                    <button class="g-recaptcha"
                    data-sitekey='{dataSitekey}' 
                    data-callback='validateForm' 
                    data-action='submit'
                    >Abschicken</button>
                -->
                
                <input type="submit" value="Abschicken" />
                
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
        place-items: baseline center;
        
        margin: 42px 10%;
        min-height: 37.5vh;

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