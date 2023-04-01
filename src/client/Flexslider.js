import React, { Component } from 'react';
import $ from 'jquery';
import 'flexslider';

class FlexSlider extends Component {
  componentDidMount() {
    $(this.refs.slider).flexslider({
      animation: "slide",
      slideshowSpeed: 3000,
      controlNav: false,
      directionNav: true,
      prevText: "",
      nextText: ""
    });
  }

  render() {
    return (
      <div className="flexslider" ref="slider">
        <ul className="slides">
          <li><img src="http://example.com/slide1.jpg" alt="Slide 1" /></li>
          <li><img src="http://example.com/slide2.jpg" alt="Slide 2" /></li>
          <li><img src="http://example.com/slide3.jpg" alt="Slide 3" /></li>
        </ul>
      </div>
    );
  }
}

export default FlexSlider;
