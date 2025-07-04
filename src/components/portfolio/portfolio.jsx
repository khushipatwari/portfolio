import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
        <header>
            <h2 className='portfolio-heading heading'>Portfolio</h2>
            <div className='underline'></div>
        </header>
        <div className='portfolio-cards'>
            <div className='portfolio-card'>
                <div className='portfolio-image'>
                    <img src="./images/portfolio-image1.png" alt="" />
                    <div className='button-container'>
                        <button className='button-link'><a href="https://github.com/khushipatwari/gemini-clone">Code</a></button>
                        <button className='button-link'><a href= "https://gemini-clonewebsite-1.netlify.app/"> Website</a></button>
                    </div>
                    <div className='overlay'></div>
                </div>
            </div>
{/*             <div className='portfolio-card'>
                <div className="portfolio-image">
                    <img src="./images/portfolio-image1.png" alt="" />
                    <div className='button-container'>
                    <button className='button-link'>Code</button>
                    <button className='button-link'>Website</button>
                    </div>
                </div>
            </div> */}
{/*             <div className='portfolio-card'>
                <div className="portfolio-image">
                    <img src="./images/portfolio-image1.png" alt="" />
                    <div className='button-container'>
                    <button className='button-link'>Code</button>
                    <button className='button-link'>Website</button>
                    </div>
                </div>
            </div> */}
            // <div className='portfolio-card'>
            //     <div className="portfolio-image">
            //         <img src="./images/portfolio-image1.png" alt="" />
            //         <div className='button-container'>
            //         <button className='button-link'>Code</button>
            //         <button className='button-link'>Website</button>
            //         </div>
            //     </div>
            // </div>
            // <div className='portfolio-card'>
            //     <div className="portfolio-image">
            //         <img src="./images/portfolio-image1.png" alt="" />
            //         <div className='button-container'>
            //         <button className='button-link'>Code</button>
            //         <button className='button-link'>Website</button>
            //         </div>
            //     </div>
            // </div>
            // <div className='portfolio-card'>
            //     <div className="portfolio-image">
            //         <img src="./images/portfolio-image1.png" alt="" />
            //         <div className='button-container'>
            //         <button className='button-link'>Code</button>
            //         <button className='button-link'>Website</button>
            //         </div>
            //     </div>
            // </div>
        </div>
    </div>
  )
}

export default Portfolio
