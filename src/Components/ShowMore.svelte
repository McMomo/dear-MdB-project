<script>
  import { fade } from 'svelte/transition'

  export let text = ''
  export let sliceIndex = 350;

  let dots = true;
  let more_text = false;
  let button_text = 'mehr'

  sliceOnWhitespace();

  function sliceOnWhitespace(){
    if (text !== '' && text[sliceIndex] !== ' '){
      sliceIndex--;
      sliceOnWhitespace();
    }
  }

  function toggleText(e){
    console.log(e.target)
    button_text = button_text == 'mehr'? 'weniger': 'mehr';
    dots = !dots;
    more_text = !more_text;
  }
</script>

{#if text !== ''}
  <p class="show_more">
    {text.slice(0, sliceIndex)}
    <span class:dots transition:fade>
      ...
    </span>
    <span class:more_text transition:fade>
      {text.slice(sliceIndex)}
    </span>
  </p>
{:else}
  <p class="show_more">
    <span class:more_text>
      <slot></slot>
    </span>
  </p>
{/if}
<button class="more_button" on:click={toggleText}>{button_text}</button>

<style>
  .show_more {
    display: flex;
    flex-flow: column;

    color: white;
  }

  .more_button {
    place-self: center;
    background-color: var(--kurz-green);
    color: white;
    border: none;
  }

  .more_button:hover {
    background-color: var(--kurz-green);
    border: none;
    text-decoration: underline;
  }

  .more_button:active {
    text-decoration: underline;
  }

  .show_more span {
    display: none;
  }
  .dots {
    display: inline !important;
  }

  .more_text {
    display: inline !important;
  }

</style>