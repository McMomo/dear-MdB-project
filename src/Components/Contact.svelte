<script>
    import validator from 'validator';
    import { onMount, onDestroy } from 'svelte';

    const dataSitekey = '6Lcn_twZAAAAAEBbZU0qXRH2TdZLlYFQuzvpG4CU';

    let name = '';
    let selectedOption = '';
    let hometown = '';
    let mail = '';
    let text = '';

    let reCaptchaFlag = false;

    function validateForm() {

        console.log('validating forms')

        if (!reCaptchaFlag){
            return false;
        } else if (!!name){
            return false;
        } else if (selectedOption === brief && hometown){
            return false;
        } else if (validator.isEmail(mail)){
            return false;
        }

        var x = document.forms["contactForm"]

        return true;
    } 

    function setToken(){
        reCaptchaFlag = true;
    }

    function resetToken(){
        reCaptchaFlag = false;
    }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 

    onMount(() => {
        topFunction();
        window.setToken = setToken;
        window.resetToken = resetToken;

        window.validateForm = validateForm;

    })

    onDestroy(() => {
        window.setToken = null;
        window.resetToken = null;
        
        window.validateForm = validateForm;
    })
</script>

<section class='contact'>
    <div class='wrapper'>
        <form name="contactForm" action="?" on:submit|preventDefault={validateForm} method="POST">
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
                <input id='mail' bind:value={mail} required type="email"/>
            {:else if  selectedOption !== '' && selectedOption !== 'brief' && name !== ''}
                <label for='mail'>Deine E-Mail-Adresse:</label>
                <input id='mail' bind:value={mail} required='' />
            {/if}
            
            {#if mail !== ''}
                <label for='text'>Was möchtest du uns sagen oder fragen?</label>
                <textarea id='text' bind:value={text}/>

                <!--

                    <script src="https://www.google.com/recaptcha/api.js?" async defer></script>
                    <div class="g-recaptcha" data-sitekey='{dataSitekey}' data-size='compact' data-callback='setToken' data-expired-callback='resetToken'></div>
                    <input type="submit" value="Abschicken" />
                -->
                <script src="https://www.google.com/recaptcha/api.js"></script>                
                <button class="g-recaptcha"
                    data-sitekey='{dataSitekey}' 
                    data-callback='validateForm' 
                    data-action='submit'>Abschicken</button>

                
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