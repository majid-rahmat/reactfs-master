import React from 'react';

function Signup(props) {
  	return (
		<div>
		
		<div className="ui container">
        <div className="ui grid">
        
      
        	<h1> Sign up, it's free! </h1>
        		
        		<form>
  				User name:
  				<input type="text" name="username" value="Mickey" />

  				Email:
  				<input type="text" name="email" value="Mickey@yahoo.com" />

  				Password:
  				<input type="text" name="password" value="Mouse" />
				
			  	Confirm Password:
			  	<input type="text" name="password" value="Mouse" />
			  	
			  	<button type="submit" value="Submit"> Login</button>
				</form> 
		
		
		</div>
		</div>
		
		</div>
  	);
};

export default Signup;