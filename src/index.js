import React from "react";
import ReactDOM from "react-dom";

var element = 
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o lwie'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc)
	);
});

ReactDOM.render(element, document.getElementById('app'));