const buzzWords = require('./array')

function resumeChecker(description, resume) {
    if (resume !== String && description !== String) return 'error'
    let res = resume.toLowerCase().split(' ')
    let des = description.toLowerCase().split(' ')
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