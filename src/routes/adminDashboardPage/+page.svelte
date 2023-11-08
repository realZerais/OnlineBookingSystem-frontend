<script>
    import DashboardHeader from "../../components/DashboardHeader.svelte";
    import DashboardNav from "../../components/AdminDashboardNav.svelte";
    import DashboardUpdates from "../../components/DashboardUpdates.svelte";


</script>
  
  <main class="grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-10 px-5 py-5">
    <DashboardNav/>
      <DashboardHeader/>
      
      <DashboardUpdates/>
  </main>
  
  <style>
      main{
    background-color: black;
      width: 100vw;
      height: 100vh;
      grid-template-columns: 250px 1fr;
      grid-template-rows: 120px 1fr;
    }
  </style>