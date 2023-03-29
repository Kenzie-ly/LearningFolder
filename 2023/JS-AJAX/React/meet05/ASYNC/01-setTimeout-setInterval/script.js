document.addEventListener("DOMContentLoaded", ()=>{


    function consolelogDelay(number){
        setTimeout(() => {
            console.log(number);
        }, 2000);
    }

    var i = 20;
    let consoleInterval = setInterval(()=>{
        console.log(i);
        i--;
    }, 1000);

    console.log(1);
    consolelogDelay(2);
    console.log(3);

    document.querySelector("#btn-stop-interval").addEventListener("click", ()=>{
        clearInterval(consoleInterval);
    })

})