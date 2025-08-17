import { describe, it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import Input from "./Input"; 
import userEvent from "@testing-library/user-event";


describe('Input Component Test Case', () => {  
    it('input + label renders',()=>{
        render(<Input label="username" type="text" />);
        expect(screen.getByLabelText('username')).toBeInTheDocument();
        expect(screen.getByLabelText('username')).toHaveAttribute('type','text');
    })


    it('input accepts input properly', async()=>{
        
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(<Input onChange={onChange} label="username" type="text" />);
        const input = screen.getByLabelText('username');

        await user.type(input,'cyprian@k');
        expect(input).toHaveValue('cyprian@k');
        
    })

    it('input is controlled input', async()=>{
        
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(<Input onChange={onChange} label="username" type="text" />);
        const input = screen.getByLabelText('username');

        await user.type(input,'hello');
        expect(onChange).toHaveBeenCalled();
        expect(onChange).toHaveBeenCalledTimes(5);
        
    })


})