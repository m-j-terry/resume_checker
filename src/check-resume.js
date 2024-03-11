const buzzWords = require('./array')

function resumeChecker(description, resume) {
    function slidingWindow(string) { // To check for periods and commas between words
        let text = string.toLowerCase().split('')
        for (let i = 0; i < text.length; i++){
            let punctuation = text[i]
            let space = text[i+1]
            if ((punctuation === "." || punctuation === ',') && space === " "){
                text.splice(i, 1)
            } else if (punctuation === '/' || punctuation === "(" || punctuation === ")"){
                text.splice(i, 1, ' ')
            }
        }
        text = text.join('').split(' ')
        return text
    }
    let res = slidingWindow(resume)
    let des = slidingWindow(description)
    const resBuzzedWords = []
    const desBuzzedWords = []
    const unBuzzedWords = []
    for (let i = 0; i < buzzWords.length; i++) {
        if (des.includes(buzzWords[i]) === true) {
            desBuzzedWords.push(buzzWords[i])
        }
    }
    for (let i = 0; i < desBuzzedWords.length; i++) {
        if (res.includes(desBuzzedWords[i]) === true) {
            resBuzzedWords.push(desBuzzedWords[i])
        } else {
            unBuzzedWords.push(desBuzzedWords[i])
        }
    }
    let percentage = Math.round((resBuzzedWords.length / desBuzzedWords.length) * 100)
    const missingWords = unBuzzedWords.join(', ')
    console.log('percentage match is ' + percentage + '%')
    console.log('missing buzz words include: ' + missingWords)
    let result = {
        Resume: resume,
        Description: description,
        Percentage: percentage,
        MissingWords: missingWords
    }
    // return `percentage match is ${percentage}% and missing buzz words include: ${missingWords}`
    return result
}

module.exports = resumeChecker