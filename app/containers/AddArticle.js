import React from 'react';

function AddArticle(props) {
  	return (
		<div>
		
		<div className="ui container">
        <div className="ui grid">
        <div className='five wide centered column'>
        		
        	<form>
  				
          <div className='row'>
          Title:
  				<input type="text" name="title" value="Article 1" />
  				</div>
          <div className='row'>
  				Beginning Quote :
  				<input type="text" name="begquote" value="Lorem ipsum." />
  				</div>
          <div className='row'>
  				Beginning Cite:
  				<input type="text" name="begcite" value="Lorem" />
  				</div>
          <div className='row'>
  				Beginning Vid:
  				<input type="text" name="begvid" value="http://youtube.com" />
				  </div>
          <div className='row'>
			  	text:
			  	<input type="text" name="text" value="Mouse" />
  				</div>
          <div className='row'>
  				Closing Vid:
  				<input type="text" name="closingvid" value="http://youtube.com" />
				  </div>
          <div className='row'>
  				Closing Quote :
  				<input type="text" name="closingquote" value="Lorem ipsum." />
  				</div>
          <div className='row'>
  				Closing Cite:
  				<input type="text" name="closingcite" value="Lorem" />
          </div>
			  	<button type="submit" value="Submit"> Submit</button>
				</form> 
		
		</div>
		</div>
    </div>
		</div>
  	);
};

export default AddArticle;