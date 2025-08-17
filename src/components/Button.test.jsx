import  { describe, it, expect, vi } from "vitest";
import { screen ,render } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";
describe('Button Component Test Cases : ',()=>{

    it('button renders',()=>{
        render(<Button/>)
        expect(screen.getByRole('button')).toBeInTheDocument();
    })

    it('button renders correct text',()=>{
        render(<Button>login</Button>)
        expect(screen.getByRole('button',{ name : 'login' })).toBeInTheDocument();
    })


    it('button should call onlick function',async ()=>{ 
        const onClick= vi.fn();
        const user = userEvent.setup();
        render(<Button onClick={onClick}  >login</Button>)
        const button = screen.getByRole('button',{ name : 'login' });
        
        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    })


    it('button should not call onlick function',async ()=>{ 
        const onClick= vi.fn();
        const user = userEvent.setup();
        render(<Button type="submit" onClick={onClick}  >login</Button>)
        const button = screen.getByRole('button',{ name : 'login' });
        
        await user.click(button);

        expect(onClick).not.toHaveBeenCalled();
    })

})