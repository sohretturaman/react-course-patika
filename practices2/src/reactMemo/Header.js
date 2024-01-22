import React from 'react'

function Header({data,increment}) {
    console.log('header is re-rendered!');
  return (
    <div>
       header 
       <br/>
       data {JSON.stringify(data)}
        <button onClick={increment}>press</button>
        <br/>


    </div>
  )
}

export default React.memo(Header);//avoiding rerenders with memo

//callback is using to avoidign rerenders on functions especially when giving it in comp as paramather!