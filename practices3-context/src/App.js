

import Main from './components/Main';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider >
       <Main/>
    </ThemeContextProvider>
  );
}

export default App;
