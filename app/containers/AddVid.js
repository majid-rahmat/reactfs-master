import React from 'react';

function AddVid(props) {
  	return (
		<div>
		
		<div className="ui container">
        <div className="ui grid">
        		
        	<form>
  				Video:
  				<input type="text" name="title" value="Article 1" />
  				<br />
  				Title :
  				<input type="text" name="begquote" value="Lorem ipsum." />
  				<br />
  				Text:
  				<input type="text" name="begcite" value="Lorem" />
	
			  	<button type="submit" value="Submit"> Login</button>
				</form> 
		
		</div>
		</div>
		
		</div>
  	);
};

export default AddVid;