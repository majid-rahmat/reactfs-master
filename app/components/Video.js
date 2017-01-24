import React from 'react';

function Video(props) {
  	return(
		<div>
    		<iframe className={props.customClass} src={props.src} width={props.width} height={props.height} frameBorder="0" allowFullScreen></iframe>
    	</div> 
		);
};

Video.propTypes={
  customClass: React.PropTypes.string,
  src: React.PropTypes.string.isRequired,
  width: React.PropTypes.string,
  height: React.PropTypes.string
}

export default Video;