document.addEventListener('DOMContentLoaded', () => {

	let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");
	let score = 0;
	let start = false;

	let scoreText = {
		font : "20px Courier",
		color : "White",
		align : "left",
		baseline : "top",

		draw : function () {
			const x = 0;
			const y = 0;
			ctx.font = this.font;
			ctx.fillStyle = this.color;
			ctx.textAlign = this.align;
			ctx.textBaseline = this.baseline;
			ctx.fillText(`Score : ${score}`, x, y);
		}
	}

	function jump() {
		if (dino.classList != "jump") {
			dino.classList.add("jump");

			setTimeout(function () {
				dino.classList.remove("jump");
			}, 300);
		}
	}

	let isAlive = setInterval(function () {

		let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
		//console.log(dinoTop)
		let binLeft = parseInt(window.getComputedStyle(bin).getPropertyValue("right"));
		console.log(binLeft)

		if (binLeft < 530 && binLeft > 500  && dinoTop >= 250) {
			console.log("collision")
			alert("Game Over!")
		}

	}, 1000);

	/*
	const startButton = {
		x : canvas.width/2,
		y : canvas.height/2,
		width : 6 * 20,
		height : 3 * 20,
		color : "Black",
		textColor : "White",
		font : "32px Courier",
		align : "center",
		baseline : "middle",

		draw : function (){
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);

			ctx.fillStyle = this.textColor;
			ctx.font = this.font;
			ctx.textAlign = this.align;
			ctx.textBaseline = this.baseline;
			ctx.fillText('Start', this.x, this.y);
		},

		checkClicked : function (event){
			start = true;
		}


	}


	
	document.querySelector("#canvas").addEventListener('click', function(event){
		if (!start) startButton.checkClicked(event);
	})
	*/


	
	document.addEventListener("keydown", function (event) {
	jump();
	});

	scoreText.draw();

	function show_image() {
        var img = document.createElement("img");

        img.width = 500;
        img.height = 500;
        document.body.appendChild(img);
    }
    show_image()


})