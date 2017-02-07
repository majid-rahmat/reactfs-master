import React from 'react';

function Slideshow(props) {
const src = props.src;
	return (
		<div className="topss">
			<h1 className="logo titleborder">🎤 The GOATs 👑</h1>
			
	    	<div className='slideshowbackground'>	
	    		<img className="ui large centered rounded image slideshowborder" src={src} />
	    	</div>
    	</div>
	);
};

Slideshow.propTypes = {
	src: React.PropTypes.string.isRequired
}

export default Slideshow;