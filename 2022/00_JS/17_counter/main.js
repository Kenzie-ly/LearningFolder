let counter = 0;

let count = () => {
	counter++;
	document.querySelector("#counter").innerHTML = counter;

	$("#counter").text(counter);

	if (counter % 10 === 0){
		alert(`Counter nya sudah ${counter}`);
	}
}