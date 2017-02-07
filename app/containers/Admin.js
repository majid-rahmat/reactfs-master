import React from 'react';
import { Link } from 'react-router';

function Admin(props) {
  	return (
		<div className="ui container">
        <div className="ui grid">
        	<div className='five wide centered column'>
	        	<div className="ui buttons">
	  				<Link to='/signup'><button className="ui primary button">Signup</button></Link>
	  				<div className="or"></div>
	  				<Link to='/login'><button className="ui positive button">Login</button></Link>
				</div>
	        </div>
		</div>
		</div>	
  	);
};

export default Admin;