import { ADD_SCREEN, ADD_SCREEN_SUCCESS, ADD_SCREEN_FAIL } from "../actions";

export interface IInitialState {
  screens: any[];
}

export const initialState: IInitialState = {
  screens: []
};

export default (state: IInitialState = initialState, action: any) => {
  switch (action.type) {
    case ADD_SCREEN:
      return {
        ...state,
        screens: [...state.screens, action.payload]
      };

    case ADD_SCREEN_SUCCESS:
      return state;

    case ADD_SCREEN_FAIL:
      return state;

    default:
      return state;
  }
};
