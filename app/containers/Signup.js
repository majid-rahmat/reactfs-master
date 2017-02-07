import React from 'react';

function Signup(props) {
  	return (
		<div>
		
		<div className="ui container">
        <div className="ui grid">

        <div className='five wide centered column'>
        
      
        	<h1> Sign up, it's free! </h1>
        		<form>
        		<div className='row'>
  				User name:
  				<input type="text" name="username" value="Mickey" />
  				</div>
  				<div className='row'>
  				Email:
  				<input type="text" name="email" value="Mickey@yahoo.com" />
  				</div>
  				<div className='row'>
  				Password:
  				<input type="text" name="password" value="Mouse" />
  				</div>
				<div className='row'>
			  	Confirm Password:
			  	<input type="text" name="password" value="Mouse" />
			  	</div>
			  	<div className='row'>
			  	<button type="submit" value="Submit">Login</button>
				</div>
				</form> 
		
		</div>
		</div>
		</div>
		
		</div>
  	);
};

export default Signup;