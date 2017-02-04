import React from 'react';
import Title from './Title';
import Quotebox from './Quotebox';
import Video from './Video';
import Text from './Text';

function Hhandi1(props) {
    return (
        <div>
            

            <div className="ui grid">


            <div className="ui center aligned container">
            <Title customClass='toc2' msg='Why Rap 1' />
            

            <div className="content text-quotes small">
                <Quotebox quote='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quas voluptatibus tempora culpa qui porro numquam quasi neque. Magni laudantium, dolores aut aliquid dolore nobis repudiandae voluptatem, rerum, esse accusantium voluptatibus modi? Saepe provident minus, necessitatibus voluptas nobis velit, quae eaque tempore maxime numquam fuga incidunt earum reiciendis, ipsam sequi!' say='Jay-Z' />
            </div>
            </div>
            </div>

            <div className="ui grid">
        
            <div className="ui center aligned container">
            <Video customClass='hhandi1-vid' src='https://www.youtube.com/embed/Jsb4EDtTDyk' width='50%' height='315' />
            </div>

            <Text customClass='medium margin' msg='A "rather unique" look at marketing and rap... 
            In this introductory episode, we go over some basic marketing frameworks (4Ps, 3As, 3Cs) and fit 2pac and Biggie into them.
            We then view contemporary corporate strategy through Kanye Wests 2004 classic The College Dropout, closing with a special plea to Wale and Kendrick Lamar...Word to Drizzy and Cole' />
            
            <div className="ui center aligned container">
            <Video customClass='hhandi1-vid' src='https://www.youtube.com/embed/08vEi-vhZIA' width='50%' height='315' />
            </div>
            
            <div className="content text-quotes small">
                <Quotebox quote='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, alias ut facere?' say='The Notorious B.I.G' />
            </div>

            </div>
            </div>
    );
};

export default Hhandi1;