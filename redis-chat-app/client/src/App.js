/** @format */


import "./App.css";
import MainChat from "./components/MainChat";
import { ChatContextProvider } from "./context/ChatContext";


function App() {

  return (
    <div className="App">
      <ChatContextProvider>
        <MainChat />
      </ChatContextProvider>
    </div>
  );
}

export default App;
