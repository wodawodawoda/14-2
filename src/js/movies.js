import React from "react";
import ReactDOM from "react-dom";


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
	},
	{
		id: 3,
		title:'Zielona mila',
		desc: 'Lorem ipsum dolor sit amet.',
		img: 'http://1.fwcdn.pl/po/08/62/862/7517878.6.jpg'
	},
	{
		id: 4,
		title:'Nietyklani',
		desc: 'Lorem ipsum dolor sit amet.',
		img: 'http://1.fwcdn.pl/po/33/90/583390/7441162.6.jpg'
	},
	{
		id: 5,
		title:'Ojciec chrzestny',
		desc: 'Lorem ipsum dolor sit amet.',
		img: 'http://1.fwcdn.pl/po/10/89/1089/7196615.6.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.img})
	);
});
var element = 
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));