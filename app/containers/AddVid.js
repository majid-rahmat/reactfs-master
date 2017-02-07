import React from 'react';

function AddVid(props) {
  	return (
		<div>
		
		<div className="ui container">
        <div className="ui grid">
        <div className='five wide centered column'>
        		
        	<form>
          <div className='row'>
  				Video:
  				<input type="text" name="title" value="Article 1" />
  				</div>
          <div className='row'>
  				Title :
  				<input type="text" name="begquote" value="Lorem ipsum." />
  				</div>
          <div className='row'>
  				Text:
  				<input type="text" name="begcite" value="Lorem" />
	        </div>
			  	<button type="submit" value="Submit"> Submit</button>
				</form> 
		
		</div>
		</div>
    </div>		
		</div>
  	);
};

export default AddVid;