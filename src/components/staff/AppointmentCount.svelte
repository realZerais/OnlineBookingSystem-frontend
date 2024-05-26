<script>
    export let title;
    export let pendingCount;
    export let approvedCount;

</script>

<div class="w-[25%] h-[20vh] border-2 border-accent bg-main flex flex-col items-start justify-start p-8 gap-4 rounded-lg shadow-2xl">
  
  
  <div class="flex w-[100%] h-1/4  justify-start items-start text-md text-slate-50 font-semibold capitalize rounded-md">
    {title}
  </div>

  {#if title === "PENDING APPOINTMENTS"}
    <div class="flex w-[100%] h-3/4  justify-start items-center text-6xl text-slate-100 font-bold capitalize rounded-md">
      {pendingCount} 
    </div>

  {:else if title === "APPROVED APPOINTMENTS"}
    <div class="flex w-[100%] h-3/4  justify-start items-center text-6xl  text-accent font-bold capitalize rounded-md">
      {approvedCount} 
    </div>

  {/if}
</div>