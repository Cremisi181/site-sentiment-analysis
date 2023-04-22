function myFunction() {
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
			// the input can be a string or an array of strings
	query({"inputs": "Its okay if you dont like me. Not everyone has good taste."}).then((response) => {


		console.log(JSON.stringify(response));


	});

}
// the outputi s an array of json objects with the following structure:
// [[{"label":"1 star","score":0.0021950274240225554},{"label":"2 stars","score":0.00225336872972548},{"label":"3 stars","score":0.015475968830287457},{"label":"4 stars","score":0.19356276094913483},{"label":"5 stars","score":0.7865128517150879}]]
// the first element of the array is the result for the first word, the second element is the result for the second word, etc.


// formula works by adding adding all the scores of the 5 stars and then dividing by the number of reviews this 
// it just happens to also work for my purposes
// AR = 1*a+2*b+3*c+4*d+5*e/(R) this will be the average rating of the output in a furmula where a,b,c,d,e are the scores of the 5 stars and R is the number of reviews
// the output will be a number between 1 and 5 < i think 
// https://calculator.academy/average-rating-calculator-star-rating/#f1p1|f2p0 link to where i got it 
