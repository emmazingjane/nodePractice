var express = require('express');
var app = express();

app.use(express.static('views'));

app.get('/', function(request, response) {
	// response.send('Hello Emma');
	response.sendFile('index.html')
});

//  /api/dogs id, name, age

var dogs = [
	{ id: '1',
	  name: 'fido',
	  age: 12 
	},
	{ id : '2',
	  name: 'dakota',
	  age: 4
	},
	{ id : '3',
	  name: 'stella',
	  age: 2
	}
];

 app.get('/api/dogs', function (request, response) {
    response.json(dogs);
 });

app.get('/api/dogs/:id', function(request, response){
	var dogId = request.params.id
	var theAppropriateDog = dogs.filter(function(dogObject){
		return dogObject.id == dogId
	});
	response.json(theAppropriateDog);

})

app.get('/api/dogsAge/:age', function(request, response){
	var dogAge = request.params.age
	var selectedDogAge = dogs.filter(function(dogObject){
		return dogObject.age == dogAge;
	})
	response.json(selectedDogAge);
})

// /api/cats id,name , age
var cats = [
	{ id: '1',
	  name: 'bella',
	  age: 3
	},
	{ id : '2',
	  name: 'pig', 
	  age: 2
	},
	{ id : '3',
	  name: 'meow',
	  age: 1
	}
];

app.get('/api/cats', function (request, response) {
    response.json(cats);
});

app.get('/api/cats/:id', function(request, response){
	var catId = request.params.id
	var theAppropriateCat = cats.filter(function(catObject){
		return catObject.id == catId
	});
	response.json(theAppropriateCat);

});

app.get('/api/catsAge/:age', function(request, response){
	var selectedCat = request.params.age;
	var catAge = cats.filter(function(catObj){
		return catObj.age == selectedCat;
	});
	response.json(catAge)
})

// api/catNamesWith/:letter
app.get('/api/catNamesWith/:letter', function(request, response){
	var letterFromUrl = request.params.letter;
	var catsWithThatLetter = cats.filter(function(catObj){
		return catObj.name[0] === letterFromUrl;
	});
	console.log(catsWithThatLetter);
	response.json(catsWithThatLetter);
})


app.get('/api/name/:first_name/:last_name', function(request, response){
	var first_name = request.params.first_name
	var last_name = request.params.last_name
	response.send(`Hello ${first_name} ${last_name}!`);
})



app.listen(3000, function(){
	console.log('listening to port 3000');
});
