<script>
    import DashboardHeader from "../../components/DashboardHeader.svelte";
    import DashboardNav from "../../components/UserDashboardNav.svelte";
    import DashboardUpdates from "../../components/DashboardUpdates.svelte";
</script>
    
  <main class="grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-10 px-5 py-5">
    <DashboardNav/>  
    <DashboardHeader/>
    <DashboardUpdates/>
  
  </main>
  
  <h1>hello</h1>

  <style>
  main{
      background-color: black;
      width: 100%;
      height: 100vh;
      grid-template-columns: 250px 1fr;
      grid-template-rows: 120px 1fr;
  }
  </style>