import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import {BrowserRouter, useLocation } from "react-router-dom";
import ErrorPage from "../ErrorPage"
describe('testing Error Page', () => {
    it('check components', () => {
        render(
            <BrowserRouter>
                <ErrorPage />
            </BrowserRouter>
        );
        const titleElement = screen.getAllByText(
          /Something went wrong/i
        );
        expect(titleElement[0]).toBeInTheDocument();
    });
    
  });