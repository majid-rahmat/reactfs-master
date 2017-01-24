import React from 'react';

function Image(props) {
  	return(
		<div>
        	<img className={props.customClass} src={props.src} /> 
      	</div>
	);
};

Image.propTypes={
	customClass: React.PropTypes.string,
	src: React.PropTypes.string.isRequired
}

export default Image;