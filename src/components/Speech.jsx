import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import movieData from './movieData.json';
import './style.css'

const Speech = () => {
  // total movies calculations 
  const Bollywood = movieData['Bollywood :'].length
  const Hollywood = movieData['Hollywood :'].length
  const Tollywood = movieData['Tollywood :'].length
  const total = Bollywood + Hollywood + Tollywood
  // date
  const currentHour = new Date().getHours();
  // state mgmt
  const [message, setMessage] = useState('');
  const commands = [
    {
      command: 'reset',
      callback: () => resetTranscript()
    },
    {
      command: 'shut up',
      callback: () => setMessage('I wasn\'t talking.')
    },
    {
      command: ['Hello', 'hello bro', 'bro', 'hello bot', 'chat bot'],
      callback: () => {
        if (currentHour >= 5 && currentHour < 12) {
          setMessage("Hello Good morning! how can i help you");
        } else if (currentHour >= 12 && currentHour < 17) {
          setMessage("Hello Good afternoon! how can i help you");
        } else if (currentHour >= 17 && currentHour < 20) {
          setMessage("Hello Good evening! how can i help you");
        } else {
          setMessage("Hello!, how can i help you");
        }
      }
    },
    {
      command: 'who are you',
      callback: () => setMessage('I am a chatbot. I was developed by Mr. Ankit on 29/10/2023. How can i help you?')
    },
    {
      command: ['contact', 'contact to admin', 'can i talk with you boss', 'can i talk with admin','how can I contact with admin','admin','admin contact'],
      callback: () => setMessage('contact: demo@gmail.com')
    },
    {
      command: ['only 3 categories of movies are available', 'only 3 categorie of movies are available', 'only 3 categorie of movie are available', 'only 3 categories movies are available', 'how many categories of movies are available', 'how many categorie of movies are available', 'how many categories of movies are there', 'how many categorie of movies are there'],
      callback: () => setMessage('We are currently developing this site. After some time, you will be able to access more categories.')
    },
    {
      command: ['how many movies are there', 'total movies'],
      callback: () => setMessage(`in our website we have Bollywood: ${Bollywood}, Hollywood: ${Hollywood}, Tollywood: ${Tollywood} Total: ${total}`)
    },
    {
      command: ['total bollywood movies', 'how many bollywood movies are there'],
      callback: () => setMessage(`Total Bollywood movies ${Bollywood}`)
    },
    {
      command: ['total hollywood movies', 'how many hollywood movies are there'],
      callback: () => setMessage(`Total Hollywood movies ${Hollywood}`)
    },
    {
      command: ['total Tollywood movies', 'how many Tollywood movies are there'],
      callback: () => setMessage(`Total Tollywood movies ${Tollywood}`)
    },
    {
      command: ['great'],
      callback: () => setMessage(`Thanks Boss`)
    },
    {
      command: ['Thanks'],
      callback: () => setMessage(`Welcome Boss`)
    },
    {
      command: ['you are worst bot', 'worst bot', 'you are bad bot', 'you are not a good bot'],
      callback: () => setMessage('Currently, I am not at my best because I am in the development stage. Give me some time, and I will strive to improve.')
    },
    {
      command: ['you are not a good'],
      callback: () => setMessage('Currently, I am not at my best because I am in the development stage. Give me some time, and I will strive to improve.')
    },
    {
      command: ['reset', 'clear'],
      callback: () => {
        setMessage(transcript='',)
        // alert('say reset to clear all chats')
      }
    },
    {
      command:['switch','change your background','switch mode','enable dark mode','dark mode','dark theme'],
      callback: ()=> setMessage('bg-dark text-white')
    }
  ]
  var {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });
  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-GB',
    });
  };
  return (
    <div className={message}>
      <div>
        <span>
          listening:
          {' '}
          {listening ? 'on' : 'off'}
        </span>
        <div>
          <button type="button" onClick={resetTranscript}>Reset</button>
          <button type="button" onClick={listenContinuously}>Listen</button>
          <button type="button" onClick={SpeechRecognition.stopListening}>Stop</button>
        </div>
      </div>
      <div className="wrapper">
        <div className='transcript'>
          <h4>You</h4>
          <span>{transcript}</span>
        </div>
        <div className='msg'>
          <h4>Bot</h4>
          {message}
        </div>
      </div>
    </div>
  );
};

export default Speech;