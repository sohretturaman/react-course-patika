
import { useState } from 'react';
import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl'

function App() {
  const [lang,setLang] =useState('en');
  const defaultLang= navigator.language;
  console.log('default lang', defaultLang);


  const messages ={
    'en':{
      id:'msg',
    desc:'you have a new message'
    },
    'tr':{
      id:'msg',
      desc:'yeni bir mesaj var'
    }
    
  }
  //intl provider should be placed at the top
  return (
    <div className="App">
   <IntlProvider messages={messages[lang]} >
     <FormattedMessage 
     id='id'

     />
     <p>
     <FormattedMessage  id='desc'/> </p>
    
     <br/>
     <br/>
     <button onClick={()=>setLang('tr')}>TR</button>
 
     <button onClick={()=>setLang('en')}> EN</button>
   </IntlProvider>

    </div>
  );
}

export default App;
