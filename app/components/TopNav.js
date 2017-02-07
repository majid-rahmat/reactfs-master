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
    link: '/episodes',
    name: 'Episodes'
  },
  {
    id: 2,
    class:"item",
    link: '/hhandi',
    name: 'HH&I'
  }
];

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

class TopNav extends React.Component{
  constructor(props) {
    super(props);
  
  this.listItems = links.map((object) =>
      <Link key={ object.id } to={object.link}>{object.name}</Link>
      );
  
  this.socialItems = Social.map((object) =>
      <a href={object.href} className={object.class} key={ object.id }><i className={object.className}></i></a>
      );
}    

render() {
  return (
    <div className="ui inverted menu blue">
        
          <a href="#" className="header item">
            <h1 className="logo">Blog-<i className="fa fa-globe" aria-hidden="true"></i>-Logical</h1>
          </a>
          
          <div className="ui center aligned container space">  
            <p className='nav'>{this.listItems}</p>
          </div>
          
          <i className="icons item right">{this.socialItems}</i> 
          <p className='item'><Link to='/admin'>Admin</Link></p>
    </div>
  )
};
};

export default TopNav;