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



var outputarray = []; // this is the array that will contain the output of the model

function getSentiment(varInputData) {
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
	query({"inputs":varInputData}).then((response) => {
		// console.log(response);
		outputarray.push(response);
		return response;
		// response = response.flat(); //The output is an array of arrays, so we flatten it to get a single array
	}); // this is the function that will be called when the model is done processing the data
}



function testSentiment() {
	idknamelmoa = ["I love you","i hate you","youre ok i guess",];
	console.log(getSentiment(idknamelmoa));
	console.log(outputarray)

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



   