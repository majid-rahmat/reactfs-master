import React from 'react';
import FooterComponent from './FooterComponent';

function Footer(props) {
  	return (
		<div>
			<div className='ui inverted vertical footer segment ui fixed bottom teal'>
            	<div className="ui center aligned container">
            		<div className='footer-text small'>
            		<FooterComponent close='To Educate. To Entertain. To Inspire.' />
            		</div>
      			</div>
            </div>
        </div>
    );
};

export default Footer;