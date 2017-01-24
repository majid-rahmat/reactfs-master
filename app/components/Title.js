import React from 'react';

function Title(props) {
  	return (
	    <div>
	    	<h1 className={props.customClass}>{props.msg}</h1>
	    </div>  
    );
};

Title.propTypes={
	customClass: React.PropTypes.string,
	msg: React.PropTypes.string.isRequired
}

export default Title;