import React from 'react';
import Image from './Image';
import Text from './Text';
import Video from './Video';
import Slideshow from './Slideshow';
import SlideshowContainer from './SlideshowContainer'

function Home(props) {
  return (
    <div className="ui container">
      <div className="ui grid">

        <div className="six wide column ui large image">
          <Image customClass='img' src='/app/public/images/4elements.jpg' /> 
        </div>
            
        <div className='ten wide column'>
        <div className='left'>
          
          <Text customClass='hometext' msg='This site strives to be a primary point of interaction between you and the rap world. It is a digital haven and sanctuary for all — from the battle-hardened hip hop head to the soon-to-be-Stan— and is a platform for YOUR active participation and engagement in showcasing the world, its wonders, and its people to its people!
          The site’s objectives are threefold; verbally, these are: to educate, to entertain, and to inspire. 
          Together, we will proliferate the positivity encapsulated within the musical Gemini- Rhythm And Poetry.
          Click here for more.' />

          <div className="ui divider"></div>
              
          <div className='ui two column grid'>
                
            <div className="column">
              <div className="middle aligned content">
                <Text customClass='hometext hometextborder' msg='Press play for a look at pop culture through marketing, branding and business strategy (or is it the other way round?!)
                Click here for more episodes' />
              </div>
            </div>
                
            <div className="column">
              <Video src='https://www.youtube.com/embed/08vEi-vhZIA' width="100%" height="225" />
            </div>
          </div>
        </div>
        </div> 
      </div>          
          
      <div className="ui divider"></div> 
          
      <SlideshowContainer />
    
    </div>
  );
};

export default Home;