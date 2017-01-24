import React from 'react';
import Image from './Image';
import Text from './Text';
import Video from './Video';
import Slideshow from './Slideshow';
import SlideshowContainer from './SlideshowContainer'

function Home(props) {
    return (
    <div>
      
      <div className="ui container">
        <div className="ui grid">            
          
          <div className="six wide column">
            <Image customClass='ui large image' src='/app/public/images/IHeartRap.jpg' /> 
          </div>
            
          <div className='ten wide column'>
                            
              <Text customClass='column' msg='This site strives to be a primary point of interaction between you and the rap world. It is a digital haven and sanctuary for all — from the battle-hardened hip hop head to the soon-to-be-Stan— and is a platform for YOUR active participation and engagement in showcasing the world, its wonders, and its people to its people!
              The site’s objectives are threefold; verbally, these are: to educate, to entertain, and to inspire. 
              Together, we will proliferate the positivity encapsulated within the musical Gemini- Rhythm And Poetry.
              Click here for more.' />

          <div className="ui divider"></div>
              
              <div className='ui two column grid'>
                
                <div className="column x">
                  <div className="middle aligned content">
                    <Text msg='Press play for a look at pop culture through marketing, branding and business strategy (or is it the other way round?!)
                    Click here for more episodes' />
                  </div>
                </div>
                
                <div className="column x">
                  <Video src='https://www.youtube.com/embed/08vEi-vhZIA' width="340" height="225" />
                </div>
              </div>

            </div>
          
          </div>
          
          <div className="ui divider"></div> 
          <SlideshowContainer />
          
    
    </div>

    </div>
    );
};

export default Home;
          <div className='home-header-container'></div>