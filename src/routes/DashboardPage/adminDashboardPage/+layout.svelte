<script>
import AdminDashboardNav from "../../../components/AdminDashboardNav.svelte";
</script>


<main class="grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-10">

    <AdminDashboardNav/>
    <slot/>
  
    </main>
      
    <style>
        main{
    background-color: #004643;
        width: 100vw;
        height: 100vh;
        grid-template-columns: 50px 1fr;
        grid-template-rows:1fr;
      }

      
      
    </style>
