import React from 'react';

function Quotebox(props) {
  	return(
		<div>
    		<blockquote>{props.quote}</blockquote>
    		<div className="ui center aligned container"> 
    		<cite>{props.say}</cite>
    		</div>
  		</div>  
	);
};

Quotebox.propTypes={
	quote: React.PropTypes.string,
	say: React.PropTypes.string
}

export default Quotebox;