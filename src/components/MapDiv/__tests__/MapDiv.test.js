import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import { act } from 'react-dom/test-utils';
import MapDiv from "../MapDiv";
import store from "../../../store/store";
import axios from "axios";

jest.mock("axios");

test('Map div render', () => {
    render(<MapDiv center={[53.469278, -2.913844]} />);
    const titleElement = screen.getByText(/Pigeon/i);
    expect(titleElement).toBeInTheDocument();
  });