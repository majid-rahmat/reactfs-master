import React from 'react';

function Slideshow(props) {
const src = props.src;
	return (
	<div>
		<div>
			<h1 className="ui center aligned segment title">🎤 The GOATs 🐐</h1>
	    	<img className="ui large centered rounded image" src={src} />
	    </div>
	</div>
	);
};

Slideshow.propTypes = {
	src: React.PropTypes.string.isRequired
}

export default Slideshow;