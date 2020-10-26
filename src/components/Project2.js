import React from 'react'

const Project2 = () => {
  return <section className="section">
    <div className="columns">

      <div className="column">
        <div className="card">
          {/* <div className="card-header">
          <h3 className="card-header-title">
            
          </h3>
        </div> */}
          <div className="card-image">
            <figure className="image is-4by3 project-2">
            </figure>
          </div>
        </div>

      </div>

      <div className="column">
        <div className="card">

          <div className="card-header">
            <h3 className="card-header-title">
              Local Weather App
            </h3>
          </div>
          <div className="card-content">
           <strong> Project 2 </strong> - A Front-end weather app that displays data from a public API and displays in local time. We chose the DarkSky API as the documentation was easy to follow and use. I was in a pair and I had 2 days to complete this Front-end React app. We both worked on this app together as we only had a short amount of time to complete it and didn't want to separate the workload on 2 different laptops.
          </div>
          
        </div>
        <div className="skills-container1">
          <div className="skills-container-title">
            Technologies used
          </div>
          <div className="icon-container">
            <i className="devicon-css3-plain-wordmark"></i>
            <i className="devicon-git-plain"></i>
            <i className="devicon-github-plain"></i>
            <i className="devicon-html5-plain-wordmark"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-visualstudio-plain"></i>
            <i className="devicon-react-original-wordmark"></i>
            <i className="devicon-sass-original"></i>
          </div>
        </div>
      </div>
    </div>
  </section>

}

export default Project2