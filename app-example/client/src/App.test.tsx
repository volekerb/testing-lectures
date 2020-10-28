import React from 'react';
import {render, screen} from '@testing-library/react'
import App from './App';

describe('Everything is rendered', () => {

    beforeEach(() => {
        render(<App/>);
    })

    afterEach(() => {
    })

    it('renders learn react link', () => {
        let linkElement: any;
        linkElement = screen.queryByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('button is rendered', () => {
      let button = screen.getByTestId(/id/);
      expect(button).toBeInTheDocument();
    })

    it('button is clicked and service get called', () => {
        let button = screen.getByTestId(/id/);
        button.click();
    })
})
