document.addEventListener("DOMContentLoaded", () =>{

    let apikey = "d7d75247c0df42eb90c73733231202";

    document.getElementById("submit-btn").onclick =() => {
        const city = document.getElementById("amount-entry").value;

        const request = new XMLHttpRequest;
        request.onload = function() {
            const data = JSON.parse(this.responseText);
            const paragraph = document.createElement("p");
            
            paragraph.innerHTML = `Suhu saat ini di ${city}: ${amount} derajat Celsius`;

            document.querySelector(".result").append(paragraph);
            document.querySelector("#amount-entry").value = "";
        }
        request.open("GET", `https://api.weatherapi.com/v1/current.json?key=d7d75247c0df42eb90c73733231202&q=${city}`);
        request.send();
        return false;

    }
})