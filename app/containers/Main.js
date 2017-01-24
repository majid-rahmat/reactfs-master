import React from 'react';
import TopNavContainer from './TopNavContainer';
import FooterContainer from './FooterContainer';

function Main (props) {
  	return (
		<div>
			<TopNavContainer />
        	{props.children}
        	<FooterContainer />
      	</div>
	);
}

Main.propTypes={
	children: React.PropTypes.object.isRequired
}

export default Main;