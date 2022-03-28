import './App.css';
import React from 'react'
import ClickedCounter from './components/ClickedCounter';
import ComponentC from './components/ComponentC';
import ComponentF from './components/ComponentF';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import HoverCounter from './components/HoverCounter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { UserProvider } from './components/UserContext';
import HookReducer from './components/HookReducer';
import ParentComponent from './components/ParentComponent';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={'Nilesh'}>
        <ChannelContext.Provider value={'Code evaluation'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <ParentComponent />
    </div>
  );
}

export default App;
