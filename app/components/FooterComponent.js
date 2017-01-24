import React from 'react';

function FooterComponent(props) {
  	return (
		<div>
    		
    		{props.close}
    		
    	</div>
  	);
};

FooterComponent.propTypes={
	close: React.PropTypes.string.isRequired
}

export default FooterComponent;