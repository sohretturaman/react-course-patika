
import { useEffect, useState } from 'react';
import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl'

function App() {
const localVal= localStorage.getItem('locale'); 
  const defaultLang= localVal? localVal : navigator.language;
  const [locale,setLocale] = useState(defaultLang);
  console.log('default lang', defaultLang);


useEffect(()=>{
  localStorage.setItem('locale',locale); 
},[locale])

  const messages ={
    'en-US':{
      id:'msg',
    desc:'you have {count} new messages from {name} at {time}'
    },
    'tr-TR':{
      id:'msg',
      desc:' {name} kişisinden,{count} adet yeni mesaj var {time}'
    }
    
  }
  //intl provider should be placed at the top
  return (
    <div className="App">
   <IntlProvider locale={locale}messages={messages[locale]} >
     <FormattedMessage 
     id='id'
  
     />
     <p>
     <FormattedMessage  id='desc'  values={{name:'Meryem sohret', time:new Date().getHours()+':'+new Date().getMinutes(),count:5 }}/> </p>
    
     <br/>
     <br/>
     <button onClick={()=>setLocale('tr-TR')}>TR</button>
 
     <button onClick={()=>setLocale('en-US')}> EN</button>
   </IntlProvider>

    </div>
  );
}

export default App;
