import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var skillSubMessage = this.props.data.skillSubMessage;

      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <a href={work.website} target="_blank" >{work.website}</a>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
          <Divider />
        </div>
      })
      var personalmedecine = this.props.data.personalmedecine.map(function (personal) {
        return <div key={personal.company}><h3>{personal.company}</h3>
          <a href={personal.website} target="_blank" >{personal.website}</a>
          <p className="info">{personal.title}<span>&bull;</span> <em className="date">{personal.years}</em></p>
          <p>{personal.description}</p>
          <Divider />
        </div>
      })

     var generalmedecine = this.props.data.generalmedecine.map(function (general) {
        return <div key={general.company}><h3>{general.company}</h3>
          <a href={general.website} target="_blank" >{general.website}</a>
          <p className="info">{general.title}<span>&bull;</span> <em className="date">{general.years}</em></p>
          <p>{general.description}</p>
          <Divider />
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Oncology treatment</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Stroke treatment</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Personal medicine</span></h1>
          </div>

          <div className="nine columns main-col">
            {personalmedecine}
          </div>
        </div>



        <div className="row work">

          <div className="three columns header-col">
            <h1><span>General internal medicine</span></h1>
          </div>

          <div className="nine columns main-col">
            {generalmedecine}
          </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Uses of our technology</span></h1>
          </div>

          <div className="nine columns main-col">

            <h1>{skillmessage}
            </h1>
            <h1>{skillSubMessage}</h1>
            <Divider />
            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
