import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import { act } from 'react-dom/test-utils';
import Autocomplete from "../Autocomplete";
import store from "../../../store/store";
import axios from "axios";
import userEvent from '@testing-library/user-event'
jest.mock("axios");

const mockedsetUserInput = jest.fn();

const yourInitialState = {
    postCodesData: [],
    loading: false,
    error: null,
    postCodeDetilas: {}
};

const MockAutocomplete = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Autocomplete/>
            </Provider>
        </BrowserRouter>
    )
}

describe("Autocomplete",() => {
    it('should render input element', () => {
        axios.get.mockResolvedValueOnce({
            status: 200,
            data: data,
          });
        render(
            <MockAutocomplete/>
        );
        const inputElement = screen.getByPlaceholderText(/Enter postcode here.../i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into input', async () => {
        axios.get.mockResolvedValueOnce({
            status: 200,
            data: data,
          });
        await act( async () => render(<MockAutocomplete/>));
        
        const inputElement = screen.getByPlaceholderText(/Enter postcode here.../i);  
        act(() =>{ 
            fireEvent.change(inputElement, { target: { value: "LS1 1AZ" } })

        });   
        const followerDivElement = await screen.findByTestId(`suggestion-active-0`)
        expect(followerDivElement).toBeInTheDocument();  
        const faveBandItem = screen.getByText('LS1 1BA')
        expect(faveBandItem).toBeInTheDocument();  
        await act( async () => userEvent.click(faveBandItem));
        //expect(mockedonClick).toBeCalled()
       
        
       
    });

    
});

const data = {
    "status": 200,
    "result": [
       "LS1 1AZ",
       "LS1 1BA",
       "LS1 1BL",
       "LS1 1DN",
       "LS1 1HE",
       "LS1 1HQ",
       "LS1 1HT",
       "LS1 1JF",
       "LS1 1LD",
       "LS1 1NS",
       "LS1 1NX",
       "LS1 1NZ",
       "LS1 1PH",
       "LS1 1PJ",
       "LS1 1UR",
       "LS1 1WU",
       "LS1 1ZB",
       "LS1 2AD",
       "LS1 2AF",
       "LS1 2AJ",
       "LS1 2AL",
       "LS1 2AX",
       "LS1 2AY",
       "LS1 2BA",
       "LS1 2BH",
       "LS1 2BL",
       "LS1 2DE",
       "LS1 2DR",
       "LS1 2DS",
       "LS1 2DZ",
       "LS1 2ED",
       "LS1 2EE",
       "LS1 2EF",
       "LS1 2EQ",
       "LS1 2ES",
       "LS1 2EU",
       "LS1 2EX",
       "LS1 2EY",
       "LS1 2FA",
       "LS1 2FH",
       "LS1 2FJ",
       "LS1 2FL",
       "LS1 2HA",
       "LS1 2HD",
       "LS1 2HH",
       "LS1 2HJ",
       "LS1 2HL",
       "LS1 2HQ",
       "LS1 2HT",
       "LS1 2JG",
       "LS1 2JJ",
       "LS1 2JP",
       "LS1 2JS",
       "LS1 2JT",
       "LS1 2JY",
       "LS1 2JZ",
       "LS1 2LE",
       "LS1 2LF",
       "LS1 2LH",
       "LS1 2LT",
       "LS1 2LW",
       "LS1 2ND",
       "LS1 2NE",
       "LS1 2NG",
       "LS1 2NL",
       "LS1 2NP",
       "LS1 2NU",
       "LS1 2NY",
       "LS1 2PF",
       "LS1 2PL",
       "LS1 2PQ",
       "LS1 2PW",
       "LS1 2PX",
       "LS1 2QB",
       "LS1 2QH",
       "LS1 2QS",
       "LS1 2RA",
       "LS1 2RD",
       "LS1 2RG",
       "LS1 2RL",
       "LS1 2RP",
       "LS1 2RU",
       "LS1 2RX",
       "LS1 2RY",
       "LS1 2SJ",
       "LS1 2SL",
       "LS1 2SP",
       "LS1 2SX",
       "LS1 2SZ",
       "LS1 2TE",
       "LS1 2TW",
       "LS1 2UA",
       "LS1 2UT",
       "LS1 3AA",
       "LS1 3AB",
       "LS1 3AD",
       "LS1 3AF",
       "LS1 3AH",
       "LS1 3AJ",
       "LS1 3AL"
    ]
 }