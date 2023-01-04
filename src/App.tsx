import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import AppProvider, { ThemeContext } from './providers/AppProvider';
import { Application } from './components/application/Application';
import { Skills } from './components/skills/Skills';
import { Counter } from './components/counter/Counter';
import { CounterTwo } from './components/counter-two/CounterTwo';
import {Users} from './components/users/Users';

const App : React.FC = () => {
  const {isDarkTheme, toggleTheme} = useContext(ThemeContext);

  return (
    <AppProvider>
    <div className="App">
      <button>{`Switch to ${isDarkTheme ? "Light Theme" : "Dark Theme"}`}</button>
      <Application />
      <Skills skills={['HTML', 'CSS']} />
      <Counter />
      <CounterTwo count={1} />
      <Users />
    </div>
    </AppProvider>
  );
}

export default App;
