import React from 'react'

function Header({data}) {
    console.log('header is re-rendered!');
  return (
    <div>
       header 
       <br/>
       data {JSON.stringify(data)}
    </div>
  )
}

export default React.memo(Header);//avoiding rerenders with memo
