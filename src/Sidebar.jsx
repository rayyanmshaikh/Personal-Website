import React from 'react';
import './Sidebar.css';
import github from './assets/github-logo.svg'
import linkedin from './assets/linkedin-logo.svg'
import resume from './assets/resume-logo.svg'

function Sidebar() {
  return (
    <div className='sidebar'>
      <a href='https://www.linkedin.com/in/rayyan-m-shaikh/'><img src={linkedin} alt='Linkedin'/></a>
      <a href='https://github.com/rayyanmshaikh'><img src={github} alt='Github'/></a>
      <a href='https://drive.google.com/file/d/1PFC8FInwBTAkt8-L53S1oqUR8VLiByob/view?usp=sharing'><img src={resume} alt='Resume'/></a>
    </div>
  );
}

export default Sidebar;
