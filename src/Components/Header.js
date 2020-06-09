import React from 'react';
import PropTypes from 'prop-types';


function Header ({data}) {
 

    if(data){
      var hometitle = data.hometitle;
      var occupation= occupation;
      var description= data.description;
      var city= data.address.city;
      var networks= data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    
      const subDescriptionStyle = {
         color: 'white',
         fontSize:'1.4em'
       };

    return (

      
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Implementation</a></li>
            {/* <li><a className="smoothscroll" href="#portfolio">Projects</a></li> */}
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{hometitle}.</h1>
            <div style={subDescriptionStyle}>{description}.</div>
            <p style={subDescriptionStyle}>{data.subDescription}</p>
            <hr />
            
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

Header.propTypes = {
   data: PropTypes.object
}
export default Header;
