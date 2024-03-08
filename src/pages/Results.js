import { useState } from 'react';
import Background from '../components/Backround'

export default function Results(props) {
	return(
		<div className="ResultsPage">
			<Background />
			<center>
			<h1>{props.page}</h1>
			<div className="opacity">
				<h2>Your resume is a {props.result.Percentage}% match to the job description.</h2>
				{props.result.Percentagercentage === 100 ? <h2>You're a great fit! Make sure to include a cover letter to take your application to the next level!</h2> : <h2>These are the words that were missing in your resume: {props.result.MissingWords} <br />Update your resume to include these so that your resume goes even farther!</h2>}
			</div>			
			</center>
		</div>
	) 
}
