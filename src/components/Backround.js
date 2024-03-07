import buzzWords from '../array'

export default function Background(props){
    return (
        <div className="BackgroundComponent">
            <center>
                { buzzWords.map( (word) => (
                    <h3 key={word} className="word">{word}</h3>
                ))}
            </center>
        </div>
    )
}