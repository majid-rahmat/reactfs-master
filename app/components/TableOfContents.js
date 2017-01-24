import React from 'react';
import {Link} from 'react-router';

const links = [

  {
    id: 0,
    class:"item",
    link: '/hhandi/hiphopandi1', 
    name: 'Why Rap 1'
  },
  {
    id: 1,  
    class:"item",
    link: '/hhandi/hiphophandi2',
    name: 'Why Rap 2'
  }
];

function TableOfContents(props) {
    const listItems = links.map((object) =>
      <h4 className={object.class} key={ object.id }><Link to={object.link}>{object.name}</Link></h4>
      );
    return (
      <div>
          <h3>Table of Contents</h3>
          <ul>{listItems}</ul>            
      </div>
    );
};

export default TableOfContents;