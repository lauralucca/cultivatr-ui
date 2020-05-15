import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UserSignUp from './UserSignUp.js'

test('loads and displays user sign up form', () => {
    const form = render(<UserSignUp />)
    const name = form.getByRole('name')
    const email = form.getByRole('email')
    const submit = form.getByRole('submit')
    
    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(submit).toBeInTheDocument()
})