import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../components/FormInput'
import Background from '../components/Backround'

export default function Input(props) {
	const [values, setValues] = useState({
		jobDescription: '',
		resume: ''
	})
	const inputs = [
        {
            id: "job-description",
            name: "description",
            type: "textarea",
            placeholder: "Paste job description here",
            errorMessage: "whoopsiedaisy!",
            label: "Job Description: ",
            required: true,
        },
        {
            id: "resume",
            name: "resume",
            type: "textarea",
            cols: "40",
            rows: "10",
            placeholder: "Paste resume here",
            errorMessage: "whoopsiedaisy!",
            label: "Resume: ",
        },
    ]

	const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value }) 
    }

	const handleSubmit = async (e) => {
        e.preventDefault()
        
        let formData = new FormData()
        console.log('values = ' + values)
        for (let key in values) {
            formData.append(key, values[key])
        }
        console.log('formData = ' + formData)
	}
	return(
		<div className="InputPage">
			<h1>ATS Resume Checker</h1>
			<Background />
			<center>
			<h2>Paste your resume check what percent it matches with the listing's job description.</h2>
                <form action="/resume" method='GET'>
					{inputs.map(input => <FormInput key={input.id} {...input} value={values[input.name]} handleInputChange={handleInputChange} />)}
					
                </form>	
				<button formMethod='dialog'><Link className="resultsLink" key="Results" to="/results" >Submit</Link></button>

			</center>
		</div>
	) 
}
