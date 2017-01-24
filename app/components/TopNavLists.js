import React from 'react';
import { Link } from 'react-router';

const links = [
  {
    id: 0,
    class:"item",
    link: '/',
    name: 'Home'
  },
  {
    id: 1,
    class:"item",
    link: '/hhandi',
    name: 'HH&I'
  },
  {
    id: 2,
    class:"item",
    link: '/episodes',
    name: 'Episodes'
  }
];

function TopNavBar(props) {
    const listItems = links.map((object) =>
      <a className={object.class} key={ object.id }><Link to={object.link}>{object.name}</Link></a>
      );
    return (<template> {listItems}</template>) 
      
    
};

const Social = [
  {
    id: 0,
    class:"item",
    href: '#',
    className: 'big facebook icon'
  },
  {
    id: 1,
    class:"item",
    href: '#',
    className: 'big twitter icon'
  },
  {
    id: 2,
    class:"item",
    href: '#',
    className: 'big youtube icon'
  },
  {
    id: 3,
    class:"item",
    href: '#',
    className: 'big instagram icon'
  }
];

function TopNavSocial(props) {
    const SocialItems = Social.map((object) =>
      
      <a href={object.href} className={object.class}><i className={object.className}></i></a>
      );
      
    return (<i className="icons item right">{SocialItems}</i>)
        
};

TopNavBar.propTypes={
  customClass: React.PropTypes.string
}

TopNavSocial.propTypes={
  customClass: React.PropTypes.string
}

module.exports = {TopNavBar, TopNavSocial};