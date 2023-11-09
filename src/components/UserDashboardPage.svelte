<script>
    import DashboardHeader from "../components/DashboardHeader.svelte";
    import DashboardNav from "../components/AdminDashboardNav.svelte";
    import DashboardUpdates from "../components/DashboardUpdates.svelte";
  </script>
  
  <main class="grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-10">
    <DashboardNav/>
      <DashboardHeader/>
      
      <DashboardUpdates/>
  </main>
  
  <style>
      main{
  background-color: rgb(212, 210, 210);
      width: 100vw;
      height: 100vh;
      grid-template-columns: 50px 1fr;
      grid-template-rows: 120px 1fr;
    }
  </style>