import { useEffect, useState } from 'react'
import FormInput from '../components/FormInput'
import Background from '../components/Backround'
import resumeChecker from '../check-resume'

export default function Input(props) {
	const [result, setResult] = useState({})

	const [values, setValues] = useState({})

	useEffect(() => {
		setResult({
			Resume: null,
			Description: null,
			Percentage: null,
			MissingWords: null 
		})
		console.log(result.Percentage)
		setValues({
			description: '',
			resume: ''
		})
	}, [])

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
        // e.preventDefault()
        // let formData = new FormData()
        // console.log('values = ' + values)
        // for (let key in values) {
        //     formData.append(key, values[key])
        // }
		let checker = resumeChecker(values.description, values.resume)
		console.log(checker)
		setResult(checker)
        // console.log('formData = ' + formData)
	}

	if (!result.Percentage) {
	return(
		<div className="InputPage">
			<Background />
			<center>
				<div className="opacity">
					<h1 className="heading">ATS Resume Checker</h1>
					<h2 className="heading">Paste your resume check what percent it matches with the listing's job description.</h2>
				</div>
                <form>
					{inputs.map(input => <FormInput key={input.id} {...input} value={values[input.name]} handleInputChange={handleInputChange} />)}
                </form>	
				<button onClick={() => handleSubmit()}>submit</button>

			</center>
		</div>
	) 
	} else {
		return(
			<div className="InputPage">
				<Background />
				<h2>Your resume is a {result.Percentage}% match to the job description.</h2>
				{result.Percentage === 100 ? <h2>You're a great fit! Make sure to include a cover letter to take your application to the next level!</h2> : <h2>These are the words that were missing in your resume: {result.MissingWords} <br />Update your resume to include these so that your resume goes even farther!</h2>}
				<p>Ready to try another job description?</p>
				<button onClick={() => setResult({ Resume: null, Description: null, Percentage: null, MissingWords: null })}>reset</button>
			</div>	
		)
	}
}