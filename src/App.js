import github from './github.png';
import email from './email.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>El&iacute;as Galli</h1>
        <p>
          Systems Engineer | Developer
        </p>
        <div className="rrss">
          <a href="https://github.com/eliasgalli" rel="noreferrer" target="_blank"><img src={github} className="App-rrss" alt="github" /></a>
          <a href="mailto:info@eliasgalli.com"><img src={email} className="App-rrss" alt="email" /></a>
        </div>
      </header>
    </div>
  );
}

export default App;
