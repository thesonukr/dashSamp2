import React from 'react'
import style from './content.module.css'
import Cards from '../cards/Cards'
import CardsTilt from '../cards/CardsTilt'


function Content() {

  return (
    <div className={style.container}>

      {/* TODO */}
      <div className={style.todo}>
        <div className={style.headTitle}>
          <p className={style.headText}> To-Do List (24)</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
            <g filter="url(#filter0_d_1_413)">
              <rect x="8" y="4" width="49" height="49" rx="14" fill="#6418C3" />
            </g>
            <path d="M30.426 20V26.596H24V30.744H30.426V37.34H34.914V30.744H41.34V26.596H34.914V20H30.426Z" fill="white" />
            <defs>
              <filter id="filter0_d_1_413" x="0" y="0" width="65" height="65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_413" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_413" result="shape" />
              </filter>
            </defs>
          </svg>

        </div>
        <Cards 
        serious={'important'} 
        serColor={'#FFAB2D'} 
        topic={'Create sign up sheet for holiday student/parent conferences.'}
        value={30}
        tanki={4}
        />
        <Cards 
        serious={'Instructor Meeting'} 
        serColor={'#E328AF'} 
        topic={'Plan holiday demonstration program. Create outline.'}
        value={40}
        tanki={3}
        />
        <Cards 
        serious={'Databse'} 
        serColor={'#38E25D'} 
        topic={'Create sign up sheet for holiday student/parent conferences.'}
        value={28}
        tanki={2}
        />
        
       </div>

       {/* In progress */}
       <div className={style.progress}>

       <div className={style.headTitle}>
          <p className={style.headText}> In Progress (2)</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
  <rect width="49" height="49" rx="14" fill="#211A75"/>
  <path d="M22.426 16V22.596H16V26.744H22.426V33.34H26.914V26.744H33.34V22.596H26.914V16H22.426Z" fill="#6418C3"/>
</svg>

        </div>
        <Cards 
        serious={'Video'} 
        serColor={'#5ECFFF'} 
        topic={'Create sparring tutorial video for the weekly class.'}
        value={85}
        tanki={3}
        />
        <CardsTilt 
        serious={'BUGS FIXING'} 
        serColor={'#FF4A55'} 
        topic={'Create sign up sheet for holiday student/parent conferences.'}
        value={93}
        tanki={2}
        />
        

       </div>

       {/* Done */}
       <div className={style.done}>
        
       <div className={style.headTitle}>
          <p className={style.headText}> Done (3)</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
  <rect width="49" height="49" rx="14" fill="#211A75"/>
  <path d="M22.426 16V22.596H16V26.744H22.426V33.34H26.914V26.744H33.34V22.596H26.914V16H22.426Z" fill="#6418C3"/>
</svg>

        </div>
        <Cards 
        serious={'BUGS FIXING'} 
        serColor={'#FF4A55'} 
        topic={'Create sign up sheet for holiday student/parent conferences.'}
        value={100}
        tanki={4}
        />
        <Cards 
        serious={'Database'} 
        serColor={'#38E25D'} 
        topic={'Update new instructor photos.'}
        value={100}
        tanki={4}
        />
        <Cards 
        serious={'Instructor Meeting'} 
        serColor={'#E328AF'} 
        topic={'Create sign up sheet for holiday student/parent conferences.'}
        value={100}
        tanki={4}
        />
        
       </div>

       {/* Reviced */}
       <div className={style.mainRece}>

       <div className={style.headTitle}>
          <p className={style.headText}>Revised (0)</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
  <rect width="49" height="49" rx="14" fill="#211A75"/>
  <path d="M22.426 16V22.596H16V26.744H22.426V33.34H26.914V26.744H33.34V22.596H26.914V16H22.426Z" fill="#6418C3"/>
</svg>
        </div>
        <div>
        </div>

        <div className={style.received}>

          <div className={style.receivedBox}>
            <p className={style.receivedText}>Move card here</p>
          </div>
        </div>
        


  
       </div>
    </div>
  )
}

export default Content