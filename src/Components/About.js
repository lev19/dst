import React, { Component } from 'react';


class About extends Component {
   
   render() {
   const {name,bio,phone,email,resumeDownload,address,image,show_download_button} = {...this.props.data};
   const {street,city,state,zip} ={...address};
   const profilepic = "images/" + image;
   const DownloadButton=()=>{
      debugger;
      if(show_download_button){
         return ( <div className="columns download">
         <p>
            <a href={resumeDownload} className="button" download><i className="fa fa-download"></i>Download Resume</a>
         </p>
      </div>)
      }
   }
   
   const aboutStyle = {
      color: 'white',
      fontSize:'1.4em'
    };

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Lev Faiger Profile Pic" />
                 
               </div>
               <div className="nine columns main-col">
                  <h2>About Us</h2>

                  <p style={aboutStyle}>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>{street}<br />
                              {city} {state}, {zip}
                           </span><br />
                           <span>{phone}</span><br />
                           <span>{email}</span>
                        </p>
                     </div>
                    
                     {DownloadButton()}

                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
