import React from 'react';
import Slideshow from './Slideshow';
import Albums from './Albums.js';

const SlideshowContainer = React.createClass({
  getInitialState: function () {
    return { currentAlbum: 0 };
  },

  nextAlbum: function () {
    var current = this.state.currentAlbum;
    var next = ++current % Albums.length;
    this.setState({ currentAlbum: next });
  },

  interval: null,

  componentDidMount: function () {
    this.interval = setInterval(this.nextAlbum, 2000);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  render: function () {
    var src = Albums[this.state.currentAlbum];
    return <Slideshow src={src}/>
  }
});

module.exports = SlideshowContainer;