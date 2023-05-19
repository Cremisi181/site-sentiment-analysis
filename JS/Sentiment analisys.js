// Code by: Cremisi 181


//https://www.w3schools.com/ai/ai_chartjs.asp link to chart.js


// COMMENTS BELOW ARE OUTDATED AND WILL BE CHANGED SOON


// the outputs an array of json objects with the following structure:
// [[{"label":"1 star","score":0.0021950274240225554},{"label":"2 stars","score":0.00225336872972548},{"label":"3 stars","score":0.015475968830287457},{"label":"4 stars","score":0.19356276094913483},{"label":"5 stars","score":0.7865128517150879}]]
// the first element of the array is the result for the first word, the second element is the result for the second word, etc.


// formula works by adding adding all the scores of the 5 stars and then dividing by the number of reviews this 
// it just happens to also work for my purposes 
// AR = 1*a+2*b+3*c+4*d+5*e/(R) this will be the average rating of the output in a furmula where a,b,c,d,e are the scores of the 5 stars and R is the number of reviews
// the output will be a number between 1 and 5 < i think 
// https://calculator.academy/average-rating-calculator-star-rating/#f1p1|f2p0 link to where i got it 


let rawOutputArray = []; // this is the array that will contain the output of the model
let averageRatingArray = []; // this is the variable that will contain the average rating of the output
let roundedAverageRatingArray = []; // this is the variable that will contain the rounded average rating of the output
let posNegarray = []; // this is the variable that will contain the positive and negative reviews
let countedRatingArray = []; // this is the variable that will contain the number of reviews for each rating

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

function getSentiment(varInputData) {
	query({"inputs": varInputData}).then((response) => {

		let arrSentiment = response;
		rawOutputArray = arrSentiment;
		//response = response.flat(); The output is an array of arrays, so we flatten it to get a single array
	});
}

 

function inputSentiment() {
	idknamelmoa = ["i like this product, NOT", "I recomender this product to a five year old", "This product is not usefull if you dont know how to use it"];
	getSentiment(idknamelmoa);
	console.log(rawOutputArray)
}

function convertToAverage() {
		let counter = 0;
		rawOutputArray.forEach(element => {
			var a = rawOutputArray[counter][0].score;
			var b = rawOutputArray[counter][1].score;
			var c = rawOutputArray[counter][2].score;
			var d = rawOutputArray[counter][3].score;
			var e = rawOutputArray[counter][4].score;
			counter++;
			//console.log(counter);
			//console.log(a,b,c,d,e);
			var result = 1*a+2*b+3*c+4*d+5*e;
			console.log(result);
			averageRatingArray.push(result);
			console.log(averageRatingArray);
		});
		
	}


function convertData() {
	let counter = 0;
	averageRatingArray.forEach(element => {
		var a = averageRatingArray[counter];
		counter++;
		var result = Math.round(a);
		roundedAverageRatingArray.push(result);
	});
	let counter1 = 0;
	console.log(roundedAverageRatingArray);

	
	roundedAverageRatingArray.forEach(element => {
		if (roundedAverageRatingArray[counter1] >= 4) {
			posNegarray.push(true);
		}
		else {
			posNegarray.push(false);
		}
		counter1++;
	});
	console.log(posNegarray);


	let counter2 = 0;
	let onestar = 0;
	let twostar = 0;
	let threestar = 0;
	let fourstar = 0;
	let fivestar = 0;
	roundedAverageRatingArray.forEach(element => {
		if (roundedAverageRatingArray[counter2] == 1) {
			onestar++;
		}
		else if (roundedAverageRatingArray[counter2] == 2) {
			twostar++;
		}
		else if (roundedAverageRatingArray[counter2] == 3) {
			threestar++;
		}
		else if (roundedAverageRatingArray[counter2] == 4) {
			fourstar++;
		}
		else if (roundedAverageRatingArray[counter2] == 5) {
			fivestar++;
		}
		counter2++;
	});
	countedRatingArray = [onestar, twostar, threestar, fourstar, fivestar];
	console.log(countedRatingArray);
}

// var xValues = ["one", "two", "three", "four", "five"];
// var yValues = [0, 0, 1, 3, 1];
// var barColors = ["red", "green","blue","orange","brown"];

// new Chart("myChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },

// });

	 