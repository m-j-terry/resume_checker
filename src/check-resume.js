const buzzWords = require('../array')

function resumeChecker(description, resume) {
    if (res !== String && des !== String) return 'error'
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
    // results.append(`percentage match is ${percentage}%`)
    // results.append(document.createElement('br'))
    // results.append(`missing buzz words include: ${missingWords}`)
    return `percentage match is ${percentage}% and missing buzz words include: ${missingWords}`
}