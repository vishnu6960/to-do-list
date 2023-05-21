const url = 'https://online-movie-database.p.rapidapi.com/title/find?q=mirchi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1017cc393fmshefde6b4c774e42cp16dc34jsn72f8fcc20de7',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch(url, options)
.then(response => response.json())
.then(response => console.log(response))

