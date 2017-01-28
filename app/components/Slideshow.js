import React from 'react';

function Slideshow(props) {
const src = props.src;
	return (
	<div>
			
			<div className="align ">
			<h1 className="logo good">🎤 The GOATs 👑</h1>
			</div>
	    	<div className='slideshow'>	
	    	<img className="ui large centered rounded image" src={src} />
	    	</div>
	    	
	    
	</div>
	);
};

Slideshow.propTypes = {
	src: React.PropTypes.string.isRequired
}

export default Slideshow;