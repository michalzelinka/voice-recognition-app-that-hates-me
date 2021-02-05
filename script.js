const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

btn.addEventListener('click', () => {
	recognition.start()
})

const greetings = [
	'I am good you little piece of love',
	'Leave me alone',
	'Die'
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onstart = () => {
	console.log('Voice is activated, you can speak to the microphone.')
}

recognition.onresult = event => {
	const current = event.resultIndex
	const transcript = event.results[current][0].transcript

	content.textContent = transcript
	readOutLoud(transcript)
}

function readOutLoud(msg) {
	const speech = new SpeechSynthesisUtterance()

	speech.text = 'I dont know what you sayed'

	if (msg.includes('how are you')) {
		const reply = greetings[Math.floor(Math.random() * greetings.length)]
		speech.text = reply
	}

	speech.volume = 1
	speech.rate = 1 // Speed
	speech.pitch = 1

	window.speechSynthesis.speak(speech)
}