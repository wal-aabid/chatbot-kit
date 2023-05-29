import logo from './logo.svg';
import './App.css';
import {Chatbot} from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'
import config from './bot/config.js';
import MessageParser from './bot/MessageParser.js';
import ActionProvider from './bot/ActionProvider.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </header>
    </div>
  );
}

export default App;
