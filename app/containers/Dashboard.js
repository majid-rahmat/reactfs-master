import React from 'react';

function Dashboard(props) {
  	return (
		<div>
		
		<div className="ui container">
        <div className="ui grid">
        	
          <button type="submit" value="addarticle"> Add Article </button>
          <button type="submit" value="editarticle"> Edit Article </button>
          <button type="submit" value="addvid"> Add Video </button>
          <button type="submit" value="editvid"> Edit Video </button>
          
		</div>
		</div>
		
		</div>
  	);
};

export default Dashboard;