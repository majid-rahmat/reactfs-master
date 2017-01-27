import React from 'react';

function Slideshow(props) {
const src = props.src;
	return (
	<div>
		<div>
			<div className="ui center aligned segment">
			<h1 className="logo">🎤 The GOATs 🐐</h1>
			</div>
	    	<img className="ui large centered rounded image" src={src} />
	    </div>
	</div>
	);
};

Slideshow.propTypes = {
	src: React.PropTypes.string.isRequired
}

export default Slideshow;