import React from 'react';
import Video from './Video';
import Title from './Title';
import Text from './Text';

function Episodes1(props) {
  return (
  <div className="ui container">
    <div className="ui grid">
      <div className='sixteen wide column centered'>
        
        <div className="ui center aligned container">           
          
          <Video src='https://www.youtube.com/embed/Jsb4EDtTDyk' width='50%' height='315' />
        
          <div className='titlemargin'>
            <Title customClass='epititle' msg='Episode 1 Transcript' />
          </div>
      	
        
          <Text customClass='epitext' msg='A "rather unique" look at marketing and rap... 
          In this introductory episode, we go over some basic marketing frameworks (4Ps, 3As, 3Cs) and fit 2pac and Biggie into them.
          We then view contemporary corporate strategy through Kanye Wests 2004 classic The College Dropout, closing with a special plea to Wale and Kendrick Lamar...Word to Drizzy and Cole' />
        </div>
      </div>
    </div>
  </div>
    );
};

export default Episodes1;