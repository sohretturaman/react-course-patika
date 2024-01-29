import {screen,render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Todo from './index'

describe('todo tests',()=>{
let button, input

beforeEach(()=>{
     render(<Todo/>);
     button = screen.getByText('Submit')
     input = screen.getByLabelText('Text')

     
})

test ('defalut list should be on screen',()=>{
    const items = screen.getAllByText(/item/i); //the items which starts with item 
    expect(items.length).toEqual(3); 
})

test('input and button should be on screen',()=>{
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
})

test('input value should be add into list',()=>{
    //put value into input
     const name = 'sohret';
     userEvent.type(input,name);
     
     //click button to add value
     userEvent.click(button);
     
     //assertion -control
     expect(screen.getByText(name)).toBeInTheDocument(); 

})

})

