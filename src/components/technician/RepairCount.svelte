<script>


  export let title;

  
  export let pendingCount;
  export let repairingCount;
  export let doneCount;

    

</script>

<div class="w-[25%] h-[20vh] border-2 border-accent bg-main flex flex-col items-start justify-start p-4 gap-4 rounded-lg shadow-lg">
  
  
    <div class="flex w-[100%] h-1/4  justify-start items-start text-md text-slate-50 font-semibold capitalize rounded-md">
      {title}
    </div>
  
  {#if title === "PENDING REPAIRS"}
    <div class="flex w-[100%] h-3/4  justify-start items-center text-6xl text-slate-100 font-bold capitalize rounded-md">
      {pendingCount} 
    </div>

  {:else if title === "ONGOING REPAIRS"}
    <div class="flex w-[100%] h-3/4  justify-start items-center text-6xl text-slate-100 font-bold capitalize rounded-md">
      {repairingCount} 
    </div>

  {:else if title === "FINISHED REPAIRS"}
    <div class="flex w-[100%] h-3/4  justify-start items-center text-6xl text-accent font-bold capitalize rounded-md">
      {doneCount} 
    </div>
  {/if}
</div>