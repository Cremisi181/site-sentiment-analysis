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










function getSentiment() {
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
	query({"inputs": "Its okay if you dont like me. Not everyone has good taste."}).then((response) => {

		// console.log(response);
		// let change = response.flat();
		 let change = response.flat();
		 change.forEach(function(change) {
			console.log('label: ' + change.label);
			console.log('score: ' + change.score);
		 });
			// let testarray = [
			// 	{
			// 		"label": "1 star",
			// 		"score": 0.015068842098116875
			// 	},
			// 	{
			// 		"label": "2 stars",
			// 		"score": 0.18974360823631287
			// 	},
			// 	{
			// 		"label": "3 stars",
			// 		"score": 0.7407901287078857
			// 	},
			// 	{
			// 		"label": "4 stars",
			// 		"score": 0.05091848596930504
			// 	},
		
			//    {
			// 		"label": "5 stars",
			// 		"score": 0.003478970378637314
			// 	}
			// ];

			
			// testarray.forEach(function(testarray) {
			// 	console.log('label: ' + testarray.label);
			// 	console.log('score: ' + testarray.score);
			// });



		// let tryout =[
		// 	{
		// 		label: '1 star',
		// 		score: 0.015068842098116875
		// 	},
		// 	{
		// 		label: '2 stars',
		// 		score: 0.18974360823631287
		// 	},
		// 	{
		// 		label: '3 stars',
		// 		score: 0.7407901287078857
		// 		},
		// 	{
		// 		label: '4 stars',
		// 		score: 0.05091848596930504
		// 		},
		// 	{
		// 		label: '5 stars',
		// 		score: 0.003
		// 		}];


	// 	tryout.forEach(function(tryout) {	
	// 		console.log('label: ' + response.label);
	// 		console.log('score: ' + response.password);
	//   });

		// json is already parsed to js array oops 


	});

	
}











// function convertToAvrage() {
	 

// 	 var a = 
// 	 var b = 
// 	 var c = 
// 	 var d = 
// 	 var e = 
// 	 var R = 
// 	 var result = 1*a+2*b+3*c+4*d+5*e/(R);
// 	 document.getElementById("demo").innerHTML = result;
// }


// let averageRating = 1*a+2*b+3*c+4*d+5*e/(R) // R is reviews 



   