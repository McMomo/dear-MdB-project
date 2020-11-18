<script>
    import validator from 'validator';
    import { onMount, onDestroy } from 'svelte';

    const dataSitekey = '6Lcn_twZAAAAAEBbZU0qXRH2TdZLlYFQuzvpG4CU';

    const selectableOptions = [{value: 'brief',label: 'Persönlichen Brief' },
    {value: 'petition',label: 'Verteiler für die Petition' }, {value: 'other', label: 'Anderer Grund'}];

    let name = '';
    let selectedOptions = [];
    let hometown = '';
    let mail = '';
    let text = '';

    function validateForm(token) {
        if (!token){
            console.error('failed validation')
            return false;
        } else if (!name){
            console.error('failed validation')
            return false;
        } else if (selectedOptions.includes('brief') && !hometown){
            console.error('failed validation')
            return false;
        } else if (!validator.isEmail(mail)){
            console.error('failed validation')
            return false;
        }

        let contact = document.getElementById('contactForm')
        
        if (window.location.href.includes('localhost')){
           contact.action = 'http://localhost:80/contact-form-process.php'
        }

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
        <form id="contactForm" action='contact-form-process.php' on:submit|preventDefault method='POST'>
            <h2>Du willst helfen? Schreib uns doch:</h2>

            <label for='name'>Wie heißt du?</label>
            <input id='name' name='name' bind:value={name} placeholder='Vor- und Nachname'/>

            {#if name !== ''}
                <label for='checkboxes'>Hallo, {name}! Warum möchtest du uns kontaktieren?</label>
                <div id='checkboxes' class="contactCheckbox">    
                    {#each selectableOptions as opt}
                        <label>
                            <input type=checkbox bind:group={selectedOptions} name={opt.value} value={opt.value}>
                            {opt.label}
                        </label>
                    {/each}
                </div>
            
            {/if}

            {#if selectedOptions.includes('brief')}
                 <!-- Hier eventuell eine info beim hovern mit kleinem Icon-->
                 <label for='hometown'>Wo wohnst du? Um den Brief einem MdB zuzuordnen.</label>
                 <input id='hometown' name='hometown' bind:value={hometown} placeholder='Wahlkreis, Heimatort oder Bundesland.'/>
            {/if}
            
            {#if selectedOptions.includes('brief') && hometown !== ''}
                <label for='mail'>Deine E-Mail-Adresse:</label>
                <input id='mail' name='mail' bind:value={mail} required type="email"/>
            {:else if  (selectedOptions.includes('other') || selectedOptions.includes('petition') ) && name !== ''}
                <label for='mail'>Deine E-Mail-Adresse:</label>
                <input id='mail' name='mail' bind:value={mail} required='' />
            {/if}
            
            {#if mail !== ''}
                <label for='text'>Was möchtest du uns sagen oder fragen?</label>
                <textarea id='text' name='text' bind:value={text}/>

                <script src="https://www.google.com/recaptcha/api.js"></script>                
                <button class="g-recaptcha"
                data-sitekey='{dataSitekey}' 
                data-callback='validateForm' 
                data-action='submit'>
                    Abschicken
                </button>
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
        /**mobile view for .card-content*/
        form{
            min-width: 100vw;
        }
    }

    label, input, textarea {
        min-width: inherit;
        width: inherit;
    }

    .contactCheckbox {
        display: grid;
        grid-gap: 0.5rem;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        margin-bottom: 0.5rem;
    }

    .contactCheckbox label{
        padding: 7.5px;
        
        font-weight: 300;
        
        background-color: white;
        color: black;
        
        box-sizing: border-box;
        border: solid 0.3px #ccc;
        border-radius: 1px;
    }

    .contactCheckbox input{
        min-width: unset;
        width: auto;
        margin: 0;
    }
</style>