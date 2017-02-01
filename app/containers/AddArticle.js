import React from 'react';

function AddArticle(props) {
  	return (
		<div>
		
		<div className="ui container">
        <div className="ui grid">
        		
        		<form>
  				Title:
  				<input type="text" name="title" value="Article 1" />
  				<br />
  				Beginning Quote :
  				<input type="text" name="begquote" value="Lorem ipsum." />
  				<br />
  				Beginning Cite:
  				<input type="text" name="begcite" value="Lorem" />
  				<br />
  				Beginning Vid:
  				<input type="text" name="begvid" value="http://youtube.com" />
				<br />
			  	text:
			  	<input type="text" name="text" value="Mouse" />
  				<br />
  				Closing Vid:
  				<input type="text" name="closingvid" value="http://youtube.com" />
				<br />
  				Closing Quote :
  				<input type="text" name="closingquote" value="Lorem ipsum." />
  				<br />
  				Closing Cite:
  				<input type="text" name="closingcite" value="Lorem" />


			  	
			  	<button type="submit" value="Submit"> Login</button>
				</form> 
		
		</div>
		</div>
		
		</div>
  	);
};

export default AddArticle;