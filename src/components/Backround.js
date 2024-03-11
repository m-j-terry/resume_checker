import buzzWords from '../array'

export default function Background(props){
    let random = Math.floor(Math.random() * 2) + 1
    let background
    if (random === 1){
        background = buzzWords.slice(0, 50)
    } else if (random === 2) {
        background = buzzWords.slice(50, 100)
    }
    return (
        <div className="BackgroundComponent">
            <center>
                { background.map( (word) => (
                    <h3 key={word} className="word">{word}</h3>
                ))}
            </center>
        </div>
    )
}