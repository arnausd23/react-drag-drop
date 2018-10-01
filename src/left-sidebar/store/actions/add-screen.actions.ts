export const ADD_SCREEN = "[Products] Add Screen";
export const ADD_SCREEN_FAIL = "[Products] Add Screen Fail";
export const ADD_SCREEN_SUCCESS = "[Products] Add Screen Success";

export const addScreen = (payload: any) => ({
  type: ADD_SCREEN,
  payload
});

export const addScreenSuccess = (payload: any) => ({
  type: ADD_SCREEN_SUCCESS,
  payload
});

export const addScreenFail = (payload: any) => ({
  type: ADD_SCREEN_FAIL,
  payload
});

export const addScreenActionTypes = {
  ADD_SCREEN,
  ADD_SCREEN_SUCCESS,
  ADD_SCREEN_FAIL
};
