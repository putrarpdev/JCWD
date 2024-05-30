import { useState, createContext } from 'react';
import './App.css';
import HookEffect from './hookEffect';
import HookMemo from './hookMemo';
import HookRef from './hookRef';
import HookState from './hookState';

export const UserContext = createContext<string>("");

function App() {
  const [user, setUser] = useState<string>("Putra");
  return (
    <>
      <UserContext.Provider value={user}>
        <HookState />
        <hr />
        <HookEffect />
        <hr />
        <HookRef />
        <hr />
        <HookMemo />
      </UserContext.Provider>
    </>
  )
}

export default App
