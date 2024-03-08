import { useState } from 'react';
import Background from '../components/Backround'


export default function About(props) {
	return(
		<div className="AboutPage">
			<Background />
			<center>
			<h1>about me</h1>
			<div>
				<p>My name is Michael. I recently completed General Assembly's SEI Intensive Bootcamp. < br /> I am a former educator looking to break into the software engineering industry. I designed this application to help engineers like myself put their best foot forward on applications. </p>
				
				<p>Did you know that Applicant Tracking Systems (ATS) check your resume for hard-skill buzz words and that by tailoring your resume to reflect your expertise in these skills—literally by making sure to include them directly—you can increase the chances of your application making a good impression? This application checks job descriptions for the buzz words that may be missing from your resume so that you can improve your resume for that application! <br /> See my <a href="https://github.com/m-j-terry/resume_checker">README</a> for a more thorough explanation of the steps for doing this!</p>

				<p>Follow me on github and connect with me on Linkedin! Want to see more of my projects? Check out my portfolio!</p>
				<div className="socials">
						<p><a href="https://github.com/m-j-terry"><img className='thumbnail' id='github' src="https://pngimg.com/d/github_PNG32.png"></img></a></p>
						<p><a href="https://portfolio-mjterry.netlify.app/"><img className='thumbnail' id='portfolio' src='https://portfolio-mjterry.netlify.app/assets/logo-black-5b2b3903.png'></img></a></p>
						<p><a href="https://www.linkedin.com/in/michaeljterry/"><img className='thumbnail' src="https://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png"></img></a></p>
				</div>
			</div>			
			</center>
		</div>
	) 
}
