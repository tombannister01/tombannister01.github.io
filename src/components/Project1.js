import React from 'react'

const Project1 = () => {

  return <section className="section">
    <div className="my-projects">
      <h3 className="my-projects-title">
        My Projects
        </h3>
    </div>
    <div className="columns">

      <div className="column">
        <div className="card">
          {/* <div className="card-header">
            <h3 className="card-header-title">
              Frogger
            </h3>
          </div> */}
          <div className="card-image">
            <figure className="image is-4by3 project-1">
            </figure>
          </div>
        </div>

      </div>

      <div className="column">
        <div className="card">

          <div className="card-header">
            <h3 className="card-header-title">
              Frogger
            </h3>
          </div>
          <div className="card-content">
            <strong>Project 1 </strong> - The task was to create a Front-end functional game which was powered by JavaScript. I chose to make a game similar to the classic game ‘Frogger’. This was a solo project we had to complete in a week.


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
          </div>
        </div>

      </div>
    </div>
  </section>


}
export default Project1