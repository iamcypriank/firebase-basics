import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import ThirdPartyLogin from "./ThirdPartyLogin";
import { MemoryRouter } from "react-router-dom";

describe('Third party login test cases',()=>{
    it('renders elements correctly',()=>{
        render(
                <MemoryRouter>
                <ThirdPartyLogin ariaLabel='google-login' />
                </MemoryRouter>
        )
        expect(screen.getByLabelText('google-login')).toBeInTheDocument();
    })
})


