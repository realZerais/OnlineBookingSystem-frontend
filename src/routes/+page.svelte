<script>
    import LandingNavbar from '../components/LandingNavbar.svelte';
    import About from '../components/About.svelte';
    import Contact from '../components/Contact.svelte';
    import Footer from '../components/Footer.svelte';


</script>


<div class="main-page">
    <section>
        
            
        <div class="bg-slate-500">
            <LandingNavbar/>
    
            <div class="h-[75vh] flex flex-col justify-center items-center gap-10">
                <h1 class="text-4xl text-white">CORE1 Cellphone and Acessories</h1>
                <p class="text-xl text-white">Some Details Here</p>
            </div>
            
            <div class="custom-shape-divider-bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
    
        </div>
    
    </section>

    <section>
        <About/>
    </section>
    
        
    <section>
        <div class="bg-slate-300">
            <Contact/>
        </div>
    </section>
    
        
    
    <section>
        <Footer/>
    </section>
</div>
    
       
        
    

    






<style>


.custom-shape-divider-bottom{
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom svg {
    position: relative;
    display: block;
    width: calc(138% + 1.3px);
    height: 118px;
}

.custom-shape-divider-bottom .shape-fill {
    fill: #FFF;
}


</style>