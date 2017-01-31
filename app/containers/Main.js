import React from 'react';
import TopNavContainer from './TopNavContainer';
import FooterContainer from './FooterContainer';
import TableofContents from '../components/TableOfContents.js'

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
			// <TableofContents /> after line 9