import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
let image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};

class GalleryItem extends React.Component {
	render() {
		return  (
			<div>
				<img src={this.props.image.src}/>	
			</div>	
		)		
	}
}

GalleryItem.propTypes = {
	image: PropTypes.object.isRequired
}
GalleryItem.defaultProps = {
	image: image
}


var element = <GalleryItem />;
ReactDOM.render(element, document.getElementById('app'));