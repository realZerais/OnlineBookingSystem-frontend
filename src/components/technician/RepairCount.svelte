<script>


  export let title;

  
  export let pendingCount;
  export let repairingCount;
  export let doneCount;

    

</script>

<div class="w-[30%] h-[25vh] bg-main flex flex-col items-start justify-start p-4 gap-4 rounded-lg shadow-lg">
  
  
    <div class="flex w-[100%] h-1/4  justify-start items-start text-md text-slate-50 font-semibold capitalize rounded-md">
      {title}
    </div>
  
  {#if title === "PENDING REPAIRS"}
    <div class="flex w-[100%] h-3/4  justify-start items-center text-4xl text-slate-100 font-bold capitalize rounded-md">
      {pendingCount} Books
    </div>

  {:else if title === "ONGOING REPAIRS"}
    <div class="flex w-[100%] h-3/4  justify-start items-center text-4xl text-slate-100 font-bold capitalize rounded-md">
      {repairingCount} Books
    </div>

  {:else if title === "DONE REPAIRS"}
    <div class="flex w-[100%] h-3/4  justify-start items-center text-4xl text-slate-100 font-semibold capitalize rounded-md">
      {doneCount} Books
    </div>
  {/if}
</div>