import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { MAIN_THEME } from '../../styles/theme'

test("loads and displays header navigation bar", () => {
    const { container, getByTestId } = render(
        <ThemeProvider theme={MAIN_THEME}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </ThemeProvider>
    );

    expect(container.querySelector('[id="dashboard"]')).toBeInTheDocument()
    expect(getByTestId('logo')).toBeInTheDocument()
    expect(getByTestId('dashboard')).toBeInTheDocument()
    expect(getByTestId('login')).toBeInTheDocument()
    expect(getByTestId('interests')).toBeInTheDocument()

});