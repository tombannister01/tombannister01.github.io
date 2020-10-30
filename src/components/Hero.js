import React from 'react'

const Hero = () => {

  return <>
    <div className="hero-div">
      <div className="container container2 section-box">
        {/* <div className="section-box"> */}
        <div className="profile">
          <div className="row">
            <div className="col-md-5">
              {/* <div className="profile-photo container"> */}
              <img src="ProfilePic2.jpg" alt="profile" className="profile-pic" />
              {/* </div> */}
            </div>
            <div className="col-md-7">
              <div className="profile-intro">
                <h1 className="name-intro">Hello I'm <br></br>
                  <span className="name">Thomas Bannister</span>
                </h1>
                <h2 className="junior-developer">Junior Developer</h2>
                <ul className="profile-list">
                  <li className="clearfix">
                    <strong className="title">Age</strong>
                    <span className="li-item">19</span>
                  </li>
                  <li className="clearfix">
                    <strong className="title">Email</strong>
                    <span className="li-item">tombannister2463@gmail.com</span>
                  </li>
                  <li className="clearfix">
                    <strong className="title">Number</strong>
                    <span className="li-item">07963 175251</span>
                  </li>
                  <li className="clearfix">
                    <strong className="title">Location</strong>
                    <span className="li-item">London/Hertfordshire</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-social">
          <a href="https://github.com/tombannister01" target="blank" ><i class="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/thomas-bannister-0916b5166/" target="blank" ><i class="fa fa-linkedin"></i></a>

        </div>


      </div>
    </div>
  </>


}

export default Hero