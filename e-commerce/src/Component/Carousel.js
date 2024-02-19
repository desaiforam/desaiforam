import React from 'react'
import Images from '../utils/images'

const Carousel = () => {
  return (
    <div className='row'>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
  
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active" />
    <li data-target="#myCarousel" data-slide-to="1" />
    <li data-target="#myCarousel" data-slide-to="2" />
    <li data-target="#myCarousel" data-slide-to="3" />
    <li data-target="#myCarousel" data-slide-to="4" />
  </ol>

  
  <div className="carousel-inner">
    <div className="item active">
      <img src={Images.iphone} alt="" style={{height:'250px', width:'250px'}} />
      <div className="carousel-caption">
        <h3>Los Angeles</h3>
        <p>LA is always so much fun!</p>
      </div>
    </div>

    <div className="item">
      <img src={Images.iphone} alt="" style={{height:'250px', width:'250px'}} />
      <div className="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>
    </div>

    <div className="item">
      <img src={Images.iphone} alt="New York" />
      <div className="carousel-caption" style={{height:'250px', width:'250px'}} >
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>
    </div>
  </div>
  <div className="item">
      <img src={Images.iphone} alt="Chicago" />
      <div className="carousel-caption" style={{height:'250px', width:'250px'}} >
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>
    </div>
    <div className="item">
      <img src={Images.iphone} alt="Chicago" />
      <div className="carousel-caption" style={{height:'250px', width:'250px'}} >
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>
    </div>

  
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" />
   
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" />
    
  </a>
</div>
    </div>
  )
}

export default Carousel
