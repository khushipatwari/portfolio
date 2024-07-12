
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import './resume.css'
import { IoMdBook } from "react-icons/io";
import AOS from 'aos'
import 'aos/dist/aos.css' 


const Resume = () => {
  return (
    <article className="resume heading" >

        <header>
          <h2 className="h2 heading">Resume</h2>
          <div className='underline'></div>
        </header>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
            <IoMdBook />
            </div>

            <h6 className='resume-sub-heading'>Education</h6>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title"> Amity University Kolkata </h4>

              <span>2022 — 2026</span>

              <p className="timeline-text">
                Pursuing Btech (CSE) with 7.38 CGPA
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">CBSE 12th (Shiv Jyoti International)</h4>

              <span>2021</span>

              <p className="timeline-text">
                Scored 91% in PMC
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">CBSE 10th (Sunbeam Bhagwanpur)</h4>

              <span>2019</span>

              <p className="timeline-text">
                Scored 93%
              </p>

            </li>

          </ol>

        </section>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
            <IoMdBook />
            </div>

            <h6 className='resume-sub-heading'>Experience</h6>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Web-Developer</h4>

              <span>May 2024- Present</span>

              <p className="timeline-text">
              A Startup lead by IIT Rourkee Students, which provide a platform for creators and brands to collaborate
               where I was charged to design and develope their website from stratch using Technologies like React

              </p>

            </li>
          </ol>

        </section>

      </article>


  )
}

export default Resume