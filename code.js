var n = 50;
const btn = document.querySelector('#cronometr');

const cronometro = setInterval(()=>{
    n = n-1;
    
    if(n>0){
        btn.value = `VER MAS EN: ${n}`;
    }else{
        clearInterval(cronometro)
        btn.value =`VER MAS`;
        btn.addEventListener('click', ()=>{
            var link = atob("aHR0cHM6Ly95b3V0dS5iZS9nX3NxUWhHR3E2RQ==");
            location.href=link;
        })
    }
},1000);
    