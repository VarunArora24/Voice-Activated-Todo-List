function AddText(){
    task = document.getElementById('write_text')
    const b=task.value
    const newdiv=document.createElement('div')
    const newspan=document.createElement('span')
    const tick = document.createElement('input');
    tick.type = 'checkbox';
    const cross=document.createElement('button')
    cross.innerText="x"
    cross.onclick=function() {
        newdiv.remove()
    }
    cross.classList.add('cross')
    tick.classList.add('tick')
    newdiv.classList.add('new_task')
    newspan.classList.add('text_span')
    finally_add_task = document.getElementById('task_container')
    newspan.innerText = b
    newdiv.appendChild(tick)
    newdiv.appendChild(newspan)
    newdiv.appendChild(cross)
    finally_add_task.appendChild(newdiv)
    
}



const micButton = document.getElementById('mic_button');
  const input = document.getElementById('write_text');

  // Check if browser supports SpeechRecognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('Sorry, your browser does not support speech recognition.');
  } else {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false; // Get final result only

    micButton.onclick = () => {
      recognition.start();
      micButton.innerText = '🎙️';
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      input.value = transcript;
      micButton.innerText = '🎤';
    };

    recognition.onerror = (event) => {
      micButton.innerText = '🎤';
      alert('Error occurred in recognition: ' + event.error);
    };

    recognition.onend = () => {
      micButton.innerText = '🎤';
    };
  }