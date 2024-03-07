import { useState } from 'react'

export default function FormInput(props) {
    const [isBlur, setIsBlur] = useState(false)
    const { label, errorMessage, handleInputChange, id, ...inputProps } = props

    const handleInputBlur = (e) => {
        setIsBlur(true)
    }
    if (id === "submission-text") {
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <textarea 
                    id={id}
                    cols="70"
                    rows="15"
                    wrap="hard"
                    {...inputProps}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    blurred={isBlur.toString()}
                    onFocus={() => inputProps.name === 'confirm' && setIsBlur(true)}
                    >
                    </textarea>
            </div>
        )
    } else {
        return (
            <div className="FormInputComponent">
                <label htmlFor={id}>{label}</label>
                <textarea
                    id={id}
                    {...inputProps}
                    cols="70"
                    rows="15"
                    wrap="hard"
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    blurred={isBlur.toString()}
                    onFocus={() => inputProps.name === 'confirm' && setIsBlur(true)}
                />
            </div>
        )
    }
}