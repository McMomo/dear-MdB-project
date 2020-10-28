<script>
	import NavBar from './Components/NavBar.svelte'
	import Banner from './Components/Banner.svelte'
	import Description from './Components/Description.svelte'
	import Contact from './Components/Contact.svelte'
</script>

<main>
	<NavBar/>

	<div class='content'>
		<Banner/>
		<Description/>
		<Contact/>
	</div>
	
	<div class='flaticon'>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
</main>

<style>
	main {
		display: grid;
		grid-template-rows: auto 1fr auto;

		overflow-x: hidden;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.content{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;

		width: 100vw;
	}

	.flaticon{
        display: none;
    }
</style>