import React from 'react';

function Login(props) {
  	return (
		<div>
		
		<div className="ui container">
        <div className="ui grid">
        
      		 <div className='five wide centered column'>
        	<h1> Welcome Back! </h1>
        		
        		<form>
        		<div className='row'>
  				User name:
  				<input type="text" name="username" value="Mickey" />
  				</div>
				<div className='row'>
			  	Password:
			  	<input type="text" name="password" value="Mouse" />
			  	</div>
			  	<div className='row'>
			  	<button type="submit" value="Submit"> Login</button>
			  	</div>
				</form> 
		
		</div>
		</div>
		</div>
		
		</div>
  	);
};

export default Login;