import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const GetCopyright=() =>(
      <ul className="copyright">
      <li>&copy; Copyright 2020 {this.props.data ?this.props.data.name:""} </li>
   </ul>
    )
    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      
      <footer>

     <div className="row">
        <div className="twelve columns">
           

        {GetCopyright()}

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
