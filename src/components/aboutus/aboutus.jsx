import React from 'react'
import './aboutus.css'

const Aboutus = () => {
  return (
    <article className="aboutus">

        <header>
          <h2 className="aboutus-heading heading">About me</h2>
          <div className='underline'></div>
        </header>

        <section className="aboutus-text">
          <p>
          I am a full-stack developer and software engineer with skills in React, JSX, and JavaScript. 
          My strong foundation in problem-solving enhances my ability to tackle complex challenges effectively.
           I excel in creating functional, visually appealing websites and resolving complex package management 
           issues.
          </p>

          <p>
          With a deep understanding of both frontend development I ensure smooth development
           workflows and efficient  management. Additionally, I am proficient in using GitHub 
           for version control, which facilitates effective collaboration and maintenance of codebases. My 
           dedication to continuous learning and professional growth is reflected in the high-quality software 
           solutions I deliver.
          </p>
        </section>
        <section className='service'>
            <header>
                  <h2 className="service-heading heading">What am I doing?</h2>
                  <div className='underline'></div>
            </header>
            <div className='service-cards'>
                <div className='service-card'>
                    <div class="service-icon-box">
                        <img src="./images/icon-design.svg " alt="design icon" width="40"/>
                    </div>

                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Web design</h4>

                        <p class="service-item-text">
                            The most modern and high-quality design made at a professional level.
                        </p>
                    </div>
                </div>
                <div className='service-card'>
                    <div class="service-icon-box">
                        <img src="./images/icon-design.svg " alt="design icon" width="40"/>
                    </div>

                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Web Development</h4>

                        <p class="service-item-text">
                        High-quality development of sites at the professional level.
                        </p>
                    </div>
                </div>
                <div className='service-card'>
                    <div class="service-icon-box">
                        <img src="./images/icon-design.svg " alt="design icon" width="40"/>
                    </div>

                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Problem Solving</h4>

                        <p class="service-item-text">
                        Proficient developer excelling in DSA, React, Vite, and debugging.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </article>

  )
}

export default Aboutus