import React from 'react';

function Login(props) {
  	return (
		<div>
		
		<div className="ui container">
        <div className="ui grid">
        
      
        	<h1> Welcome Back! </h1>
        		
        		<form>
  				User name:
  				<input type="text" name="username" value="Mickey" />
				
			  	Password:
			  	<input type="text" name="password" value="Mouse" />
			  	
			  	<button type="submit" value="Submit"> Login</button>
				</form> 
		
		
		</div>
		</div>
		
		</div>
  	);
};

export default Login;