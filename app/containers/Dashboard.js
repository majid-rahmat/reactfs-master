import React from 'react';
import {Link} from 'react-router';

function Dashboard(props) {
  	return (
		<div>
		
		<div className="ui container">
    <div className="ui grid">
    <div className='five wide centered column'>

      <div className="ui buttons">
        <div className="row">
        <Link to='/addarticle'><button className="ui primary button" type="submit" value="addarticle">Add Article</button></Link>
        <Link to='/editarticle'><button className="ui positive button" type="submit" value="addarticle">Edit Article</button></Link>
        </div>
        <div className="row">
        <Link to='/addvideo'><button className="ui primary button" type="submit" value="addarticle">Add Video</button></Link>
        <Link to='/editvideo'><button className="ui positive button" type="submit" value="addarticle">Edit Video</button></Link>
      </div>
      </div>          
    
    </div>
		</div>
    </div>
		</div>
  	);
};

export default Dashboard;