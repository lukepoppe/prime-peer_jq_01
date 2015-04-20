$(document).ready(function(){
$("#btn").on("click", function(){
	$("#name").empty();
	People();
	$("#person").prepend("<p id='name'>You are a " + gender + " who is " + weight + "lbs and " + age + " years old!</p>");

	});
});

function People(age, sex, weight){
	this.sex = randomNumber(0, 1);
	this.weight = randomNumber(1, 200);
	this.age = randomNumber(1, 100);
	if (this.sex == 0){
			gender = "Male";
		} else {
			gender = "Female"
		}
}


//if(People.sex = 0){
//		gender = "Male";
//	}if(People.sex = 1) {
//		gender = "Female"
//	}

//console.log();

//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}