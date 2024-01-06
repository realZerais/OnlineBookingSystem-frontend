<script>
    import logo from "$public/logo-white.png"
</script>

<div class="body">

    <div class="header flex flex-col self-start rounded-3xl w-[100%] h-[100%] p-8 pb-14 justify-center gap-y-5 ">
        <strong class="text-6xl text-mainParagraph tracking-widest ml-[9%]">RECEIPT</strong>
        <hr class="border-t-2 border-accent w-6/12 ml-[9%]"> 
    </div>

    <div class="content flex justify-center items-center row-span-2 w-[100%]">
        <div class="flex flex-col justify-center items-center w-[80%] h-[90%] bg-mainParagraph  border-black border-2 shadow-leftbottom ml-[3%] p-[10px] gap-y-[7%]">


            <div class="flex w-[100%] h-[50%] items-center justify-evenly gap-x-[20%]">

                <div class="flex w-[100%] h-[100%] gap-x-3 items-center justify-start pl-[65px]">
                    <div class="p-1 bg-main justify-center items-center rounded-full ">
                        <img src={logo} alt="" class="w-14 h-14 "/>
                    </div>
                    <p class="font-bakbak text-[50px]">CORE1</p>
                </div>
                
                <div class="flex w-[100%] h-[100%] gap-x-3 items-center justify-start pr-[65px]">
                    <h1 class="flex gap-x-[10px] font-bakbak ">Receipt Date : <p> November 25, 2023</p></h1> 
                </div>

            </div>

            <!-- <div class="flex w-[100%] h-[100%] items-start justify-evenly" >
                <div class="flex bg-accent w-[45%] h-[50%] items-center justify-center border-2 border-black" >
                    <p class="text-xl font-bakbak self-start absolute">CLIENT DETAILS</p>
                    <div class="w-[100%] h-[50%] p-[10px]">
                        <p class="font-bakbak justify-self-start">Name:</p>
                        <p class="font-bakbak justify-self-start">Email:</p>
                        <p class="font-bakbak justify-self-start">Phone:</p>    
                    </div>
            </div> -->

            
            <div class="flex w-[100%] h-[100%] items-start justify-evenly" >
                <div class="flex flex-col  w-[45%] h-[50%] items-center justify-center " >
                    <hr class="text self-center justify-self-center border-t-2 border-black w-[80%]"> 
                    <p class="text-[20px] font-bakbak self-center p-[5px]">CLIENT DETAILS</p>
                    <hr class="text self-center justify-self-center border-t-2 border-black w-[80%]"> 
                    <div class="flex flex-col w-[100%] h-[70%] pl-[50px] pt-[20px]">
                        <h1 class="flex text-[15px] font-bakbak justify-self-start gap-x-[40px]">Name: <p>Ricky Dave Nene</p></h1>
                        <h1 class="flex text-[15px] font-bakbak justify-self-start gap-x-[40px]">Email: <p>gerald143@gmail.com</p></h1>
                        <h1 class="flex text-[15px] font-bakbak justify-self-start gap-x-[30px]">Phone: <p>+63 1234567</p></h1> 
                    </div>
                </div>
            


                <div class="flex flex-col  w-[45%] h-[50%] items-center justify-center " >
                    <hr class="text self-center justify-self-center border-t-2 border-black w-[80%]"> 
                    <p class="text-[20px] font-bakbak self-center p-[5px]">DEVICE DETAILS</p>
                    <hr class="text self-center justify-self-center border-t-2 border-black w-[80%]"> 
                    <div class="flex flex-col w-[100%] h-[70%] pl-[65px] pt-[20px]">
                        <h1 class="flex text-[15px] font-bakbak justify-self-start gap-x-[40px]">Brand: <p>Apple</p></h1>
                        <h1 class="flex text-[15px] font-bakbak justify-self-start gap-x-[40px]">Model: <p>iPhone 15 Pro Max</p></h1>
                        <h1 class="flex text-[15px] font-bakbak justify-self-start gap-x-[45px]">Issue: <p>Broken LCD</p></h1>   
                        <h1 class="flex text-[15px] font-bakbak justify-self-start gap-x-[45px]">Fixed: <p> Replaced new LCD</p></h1> 
                    </div>
                </div>
            </div>

            
                <hr class="text self-center justify-self-center border-t-2 border-black w-[85%] h-[10px] p-0"> 
            
                <div class="flex w-[100%] h-[50%] items-start justify-evenly ">
                    <div class="flex flex-col   w-[45%] h-[50%] items-start justify-start pl-[65px]">
                        <h1 class="flex text-[15px] gap-x-[15px] font-bakbak ">Receipt No. : <p> 0123456</p></h1>
                        <h1 class="flex text-[15px] gap-x-[15px] font-bakbak ">Valid until : <p> January 1, 2024</p></h1>               
                    </div>
    
                    <div class="flex flex-col  w-[45%] h-[50%] items-start justify-start pl-[65px]">
                        <h1 class="flex text-[15px] gap-x-[15px] font-bakbak ">Technician: <p> Marian Kent Manalo</p></h1> 
                        <h1 class="flex text-[15px] gap-x-[15px] font-bakbak text-red-500">TOTAL: <p class="text-black"> 3,000</p></h1> 
                    </div>
                </div>
                

                
                
        </div>
    </div>

</div>


<style>

    .body{
        display: grid;
        background-color: #004647;
      width: 100%;
      height: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: 120px 1fr ;   
      
    }
    .header{
        visibility: hidden;
        margin-left: -20%;
        animation: to-right .3s linear forwards;
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