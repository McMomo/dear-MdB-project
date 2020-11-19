<script>
	import NavBar from './Components/NavBar.svelte'
	import Banner from './Components/Banner.svelte'
	import Description from './Components/Description.svelte'
	import Contact from './Components/Contact.svelte'
	import Footer from './Components/Footer.svelte'

	import * as navBarData from '../public/Data/NavBar.json'
	import * as bannerData from '../public/Data/Banner.json'
	import * as descriptionData from '../public/Data/Description.json'
	import * as footerData from '../public/Data/Footer.json'

</script>

<main>
	<NavBar {...navBarData}/>

	<div class='content'>
		<Banner {...bannerData}/>
		<Description {...descriptionData}/>
		<Contact/>
	</div>
	
	<Footer {...footerData}/>
</main>

<style>
	main {
		display: grid;
		grid-template-rows: auto 1fr auto;

		overflow-x: hidden;
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
</style>