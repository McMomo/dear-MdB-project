<script>
	import NavBar from './Components/NavBar.svelte'
	import Banner from './Components/Banner.svelte'
	import Description from './Components/Description.svelte'
	import Contact from './Components/Contact.svelte'
	import Footer from './Components/Footer.svelte'



	const navBarData = {
    navItems : [
        {target: "about", label: "Unsere Ziele"}, 
        {target: "contact", label: "Mitmachen"}
    ]}
	
	const footerData = {
    footerLinks : [
        {href: './imprint.html', content: 'Impressum', title: 'Impressum'}, 
        {href: './source.html', content: 'Quellen', title: 'Quellen'}
    ]}

</script>

<main>
	<NavBar {...navBarData}/>

	<div class='content'>
		<Banner/>
		<Description/>
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