import {React , useEffect } from 'react';
import AOS from 'aos';
function ProjectBox(props) {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
        <div className='p_box' data-aos="zoom-in" data-aos-duration="500">
            <h3> {props.title} </h3>
            <img src={props.img} alt='project' className='p_img'/>
            <a href='www.google.com' className='p_link' id="demo"> Demo </a>
            <a href='www.google.com' download className='p_link' id="download"> Download </a>
        </div>
    </>
  )
}

export default ProjectBox;