//import  React,{ useEffect } from 'react';
import github from './github.png';
import email from './email.png';
import linkedin from './linkedin.png';
import './App.css';
import ReactGA from 'react-ga';

function initializedAnalytics() {
  ReactGA.initialize("UA-201448747-1");
  ReactGA.pageview("/");
  //ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  initializedAnalytics();

  return (
    
    <div className="App">
      <header className="App-header">
        <h1>El&iacute;as Galli</h1>
        <p>
          Systems Engineer | Developer
        </p>
        <div className="rrss">
          <a href="https://www.linkedin.com/in/eliasgalli/" rel="noreferrer" target="_blank"><img src={linkedin} className="App-rrss" alt="linkedin" /></a>
          <a href="https://github.com/eliasgalli" rel="noreferrer" target="_blank"><img src={github} className="App-rrss" alt="github" /></a>
          <a href="mailto:info@eliasgalli.com"><img src={email} className="App-rrss" alt="email" /></a>
        </div>
      </header>
    </div>
  );
}

export default App;
