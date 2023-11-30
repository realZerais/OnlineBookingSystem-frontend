<script>

</script>

<a class="w[60%] h-[10%]" href="/DashboardPage/staffDashboardPage/Dashboard/booking">
    <button class="btn absolute top-[80%] left-[50%] text-md font-sans bg-accent rounded-lg border-secondary border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] p-2 font-bold">
        BOOK NOW
    </button>
</a>

<style>
    .btn{
        visibility: hidden;
        margin-left: -20%;
        animation: to-right .5s linear forwards;
    }

    @keyframes to-right {
       0% {
         visibility: hidden; /* Start with opacity 0 */
       }
       100% {
         visibility: visible;
         margin-left: 0%;
       }
     }
</style>