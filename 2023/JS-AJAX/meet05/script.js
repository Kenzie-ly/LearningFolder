
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("button").addEventListener("click", () => {

        const request = new XMLHttpRequest();

        request.onload = function (){
            const data = JSON.parse(this.responseText);
            console.log(data.rates);

            keys = Object.keys(data.rates)

            keys.forEach(key => {
                console.log(`${key} - ${data.rates[key]}`);
                const tr = document.createElement("tr");
            });

           
            
        }
        request.open("GET", "http://127.0.0.1:5000/api/currency/latest");
        request.send();
        
    })
})