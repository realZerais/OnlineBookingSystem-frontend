<script>

    export let appointment_status;
    export let book_date;
    export let issue_description;
    export let remark;

</script>

<div class="flex flex-col justify-start">

    <div class="text-2xl font-bold">
        {book_date}
    </div>

    <div>
        appointment_status :  <span class="text-accent">{appointment_status}</span>
    </div>

    <div>
        issue: {issue_description}
    </div>

    <div>
        remark : {#if remark == null}
            no remark yet
        {:else}
            {remark}
        {/if}
    </div>
    
  
    

   
    
    
    
</div>