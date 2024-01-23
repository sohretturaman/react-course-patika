/** @format */

import Main from "./components/Main";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Main />
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
