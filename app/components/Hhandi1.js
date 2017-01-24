import React from 'react';
import Title from './Title';
import Quotebox from './Quotebox';
import Video from './Video';
import Text from './Text';

function Hhandi1(props) {
    return (
        <div>
            
            <div className="ui container">
            <div className="ui grid">

                <div className='thirteen wide column centered'>

            <div className="ui center aligned container">
            <Title customClass='episode-title' msg='Why Rap 1' />
            </div>

            <div className="content text-quotes">
                <Quotebox quote='Lorem ipsum dolor.' say='Jay-Z' />
            </div>
        
            <div className="ui center aligned container">
            <Video customClass='hhandi1-vid' src='https://www.youtube.com/embed/Jsb4EDtTDyk' width='560' height='315' />
            </div>

            <Text customClass='hhandi1-text' msg='A "rather unique" look at marketing and rap... 
            In this introductory episode, we go over some basic marketing frameworks (4Ps, 3As, 3Cs) and fit 2pac and Biggie into them.
            We then view contemporary corporate strategy through Kanye Wests 2004 classic The College Dropout, closing with a special plea to Wale and Kendrick Lamar...Word to Drizzy and Cole' />
            
            <div className="content text-quotes">
                <Quotebox quote='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, alias ut facere?' />
            </div>
            
            <div className="ui center aligned container">
            <Video customClass='hhandi1-vid' src='https://www.youtube.com/embed/08vEi-vhZIA' width='560' height='315' />
            </div>
            
            <Text customClass='hhandi1-text' msg='The ruler is Back!
            First and second mover advantage is discussed in relation to Jay-Zs music and businesses as we see where and when he applies each. 
            Likewise, we see how Jigga has practically applied a couple of Warren Buffetts most famous pieces of advice and the rewards he has reaped.' />
        </div>
        </div>
        </div>
        </div>
    );
};

export default Hhandi1;