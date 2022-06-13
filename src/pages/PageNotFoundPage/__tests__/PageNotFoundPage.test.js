import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import PageNotFoundPage from "../PageNotFoundPage"
describe('testing Page not found Page', () => {
    test('check components', () => {
        render(
            <BrowserRouter>
                <PageNotFoundPage />
            </BrowserRouter>
        );
        const titleElement = screen.getByText(
          /The page you looking for dosen't exist/i
        );
        expect(titleElement).toBeInTheDocument();
    });
  });