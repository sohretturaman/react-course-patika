import { render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'


describe('counter test',()=>{
    let increaseBtn, decreaseBtn , count; 
    beforeEach(()=>{
        render(<Counter/>);
        increaseBtn= screen.getByText('Increase');  
        decreaseBtn= screen.getByText('Decrease');  
        count = screen.getByText('0');
    })
    test('increase btn',()=>{
        
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent('1');
    })
afterEach(()=>{
    console.log('worked after each  test ');
    
})

    test('decrease btn',()=>{
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent('-1');
    })
})
