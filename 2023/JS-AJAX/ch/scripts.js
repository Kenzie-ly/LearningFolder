document.addEventListener("DOMContentLoaded", () => {
    let apiKey = "d7d75247c0df42eb90c73733231202"

    document.querySelector(".button").addEventListener("click", () => {
        const request = new XMLHttpRequest();
        const keyword = document.querySelector(".keyword");
        
        
        request.onload = function(){
            console.log(JSON.parse(this.responseText));
            let element = "";
            
            element = showElement(JSON.parse(this.responseText));
            
            container.innerHTML = element;
        }
        request.open('GET', `http://api.weatherapi.com/v1/current.json?key=${apiKey}&aqi=no&q=${keyword.value}`);
        request.send();
    })

    function showElement(data) {
        let first_element = data.current.last_updated[11]
        let second_element = data.current.last_updated[12]
        let currentHour = first_element.concat(second_element);
        let timeOfDay;
    
        if (currentHour >= 5 && currentHour < 11) {
            document.body.style.backgroundImage = "url('morning.jpg')";
        } else if (currentHour >= 11 && currentHour < 17) {
            document.body.style.backgroundImage = "url('afternoon.png')";
        } else if (currentHour >= 17 && currentHour < 18) {
            document.body.style.backgroundImage = "url('evening.jpg')";
        } else {
            document.body.style.backgroundImage = "url('night.jpg')";
        }  
    
    return `<h3>${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
    <div class="box">
        <img src="https:${data.current.condition.icon}" alt="">
        <h1>${data.current.temp_c} ℃</h1>
    </div>`;
    
}

})