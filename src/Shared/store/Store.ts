import { configureStore } from "@reduxjs/toolkit";

export type UrlState = {
  url: string;
};

type UrlAction = {
  type: string;
  payload: UrlState;
};

const urlInitialState: UrlState = {
  url: ''
};

const reducer = (state = urlInitialState, action: UrlAction): UrlState => {
  switch (action.type) {
    case "url": {
      return {
        ...state,
        url: action.payload.url,
      };
    }
    default: {
      return state;
    }
  }
};

export const store = configureStore({
  reducer
});