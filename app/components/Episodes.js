import React from 'react';
import Text from './Text';
import Title from './Title';
import Video from './Video';
import { Link } from 'react-router';

function Episodes(props) {
    return (
        <div>

        <div className="ui container">
        <div className="ui grid">
                    
            <div className='eleven wide column centered medium txt3 align'>
                <Text msg='Blogological strives to be a primary point of interaction between you and the (rap) world. It is a digital haven and sanctuary for all – from the battle-hardened hip hop head to the soon-to-be-Stan. It is a platform for YOUR active participation and engagement in showcasing the world, its wonders, and its people to its people!
                The site’s objectives are threefold, (verbally) these are: to educate, to entertain, and to inspire; anything beyond is consumer surplus. TOGETHER, we shall overcome because only TOGETHER can we overcome.
                So, please, let’s use this space to change, save, and heal the world! If not world peace or some grander motivation, then, let us at least, push, promote, and proliferate the positivity encapsulated within the musical Gemini- Rhythm And Poetry.'/>
            </div>
                
                
                <div className='thirteen wide column centered'>
                <div className='toc3'>
                <Link to='/episodes/epi1'><Title msg='Episode 1:'/></Link>
                </div>
                <div className='ui two column grid'>
            
                <div className='column'>
                <Video src='https://www.youtube.com/embed/Jsb4EDtTDyk' width="100%" height='315' />
                </div>
                
                <div className="column">
                <h3>Description:</h3>
                <Text customClass='medium x' msg='A "rather unique" look at marketing and rap... 
                In this introductory episode, we go over some basic marketing frameworks (4Ps, 3As, 3Cs) and fit 2pac and Biggie into them.
                We then view contemporary corporate strategy through Kanye Wests 2004 classic The College Dropout, closing with a special plea to Wale and Kendrick Lamar...Word to Drizzy and Cole' />
                </div>
                </div>
                
                
                

                <Link to='/episodes/epi2'><Title customClass='toc2' msg='Episode 2:' /></Link>
                <div className='ui two column grid'>
                
                    <div className='column'>
                
                    <Video src='https://www.youtube.com/embed/08vEi-vhZIA' width="100%" height='315' />
                    </div>
                    <div className="column">
                    <div className="ui segment">
                    <h3>Description:</h3>
                    <Text customClass='medium' msg='The ruler is Back!
                    First and second mover advantage is discussed in relation to Jay-Zs music and businesses as we see where and when he applies each. 
                    Likewise, we see how Jigga has practically applied a couple of Warren Buffetts most famous pieces of advice and the rewards he has reaped.' />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>        
    );
};

export default Episodes;