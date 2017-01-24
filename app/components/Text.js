import React from 'react';

function Text(props) {
  	return (
	<div>
		<div className={props.customClass}>{props.msg}</div> 
	</div>
    );
};

Text.propTypes={
	customClass: React.PropTypes.string,
	msg: React.PropTypes.string.isRequired
}

export default Text;