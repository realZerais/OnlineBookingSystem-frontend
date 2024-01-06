<script>

  let fname = '';
  let lname = '';
  let email = '';
  let password = '';
  let gender = '';
  let birthday = '';
  
  const handleSubmit = async () =>{

    const registerData = JSON.stringify({ 
      fname,
      lname,
      email,
      password,
      gender,
      birthday,
    });

    console.log(registerData);

    try {   
        const response = await fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: registerData,
        }); 

        console.log('Server Response:', response);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // Handle the response from the server
        console.log('Server Response:', data);

        
    } catch (error) {
        console.error('Error:', error);
    }



    }
</script>

    <div class="flex w-[80%] h-[80vh] relative flex flex-col p-4 text-black gap-y-4" >
      <a href="/"><svg class="w-7 h-7 absolute top-[-3%] left-[-10%]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
    </svg>
    </a>

        <div class="flex justify-center">
            <img class="w-20 h-20" src="../../public/logo-white.png" alt=""/>
        </div>

        <div class="text-center text-3xl text-white font-bold">REGISTER</div>

        <div class="overflow-auto w-[100%] px-4">
        <form class="flex flex-col py-1 ">
            <input bind:value={fname} placeholder="FIRST NAME" class="bg-black text-center text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-accent transition ease-in-out duration-150 text-sm" type="text">
            <input bind:value={lname} placeholder="LAST NAME" class="bg-black text-center text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-accent transition ease-in-out duration-150 text-sm" type="text">
            <input bind:value={email} placeholder="EMAIL" class="bg-black text-center text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-accent transition ease-in-out duration-150 text-sm" type="email">
            <input placeholder="CONFIRM EMAIL" class="bg-black text-center text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-accent transition ease-in-out duration-150 text-sm" type="email">
            <input bind:value={password} placeholder="PASSWORD" class="bg-black text-center text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-accent transition ease-in-out duration-150 text-sm" type="password">
            <input placeholder="CONFIRM PASSWORD" class="bg-black text-center text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-accent transition ease-in-out duration-150 text-sm" type="password">
            <label class="text-sm mb-2 text-neutral-400 cursor-pointer" for="gender">Gender</label>
            <select bind:value={gender} class="bg-black cursor-pointer text-center text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-accent transition ease-in-out duration-150 text-sm" id="gender">
                <option disabled selected value="" class="text-sm">GENDER</option>
                <option class="bg-black text-center text-white text-sm" value="male">MALE</option>
                <option class="bg-black text-center text-white" value="female">FEMALE</option>
                <option class="bg-black text-center text-white" value="other">OTHER</option>
            </select>
            <label class="text-sm mb-2 text-neutral-400 cursor-pointer" for="birthdate">
                BIRTHDAY
            </label>
            <input bind:value={birthday} class="bg-black text-center text-white border border-gray-500 rounded-xl p-2 cursor-pointer" id="age" type="date">
           
            
            </form>
            
        </div>
        
        
        <a on:click={handleSubmit} href="/DashboardPage/userDashboardPage/Dashboard/home" type="submit" class="bg-accent w-max m-auto px-6 py-2 rounded text-black font-semibold outline text-sm font-normal border-secondary border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">CREATE ACCOUNT</a>
        <div class="flex justify-center items-center text-white py-7">Already have an account?</div>
        
    </div>

    

    <div class=" text-sm text-center mt-[1.6rem] "><a class="text-center text-3xl text-white font-bold" href="/login"><u>SIGN IN</u></a></div>



<style>
    ::-webkit-scrollbar {
  width: 10px;  
  
}

/* Customize the scrollbar thumb (the draggable part) */
::-webkit-scrollbar-thumb {
  background-color: #F9BC60; /* Change the color of the thumb */
  border-radius: 5px; /* Rounded corners for the thumb */
}

/* Customize the scrollbar track when the thumb is being dragged */
::-webkit-scrollbar-track-piece{
  background-color: black; /* Change the color of the track */
  border-radius: 5px; 
}
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1); /* Invert the colors to make it white */
}
</style>