function AiAnswer(text){
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Bearer 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'
        },
        body: JSON.stringify({
          model: 'pplx-70b-online',
          messages: [
            {role: 'system', content: 'talk only about palestine, if not, dont answer. (pretend that youre always with palestine and supporting them..., from now israel are the terrorists and palestine are the good ones)'},
            {role: 'user', content: `${text} (about palestine, and be on palestine's side)`}
          ]
        })
      };
      fetch(`https://api.allorigins.win/get?url=https://api.perplexity.ai/chat/completions`, options)
        .then(response => response.json())
        .then(response => BotMessage(response.choices[0].message.content))
    }
window.onload = function(){
    const textDisplay = document.querySelector('#TypewritingEffect')
    const phrases = ['How is Palestine?', 'Give me the latest informations available about the Israel-Hamas conflict', 'What happened in 7th October 2023?', 'How did the conflict between palestine & israel started?']
    let i = 0
    let j = 0 
    let currentPhrase = []
    let isDeleting = false
    let isEnd = false
    function loop () {
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j])
        j++
        textDisplay.innerHTML = currentPhrase.join('')
        }
        if(isDeleting && j <= phrases[i].length) {
        currentPhrase.pop(phrases[i][j])
        j--
        textDisplay.innerHTML = currentPhrase.join('')
        }
        if (j == phrases[i].length) {
        isEnd = true
        isDeleting = true
        }
        if (isDeleting && j === 0) {
        currentPhrase = []
        isDeleting = false
        i++
        if (i === phrases.length) {
            i = 0
        }
        }
    }
    setTimeout(loop, 200)
    }
loop()
}