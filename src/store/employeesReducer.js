import { employeesAPI } from '../api/api';

const SET_EMPLOYEES = 'SET-EMPLOYEES';

let initialState = [];

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return action.payload;
    default:
      return state;
  }
};

const setEmployees = (employees) => ({
  type: SET_EMPLOYEES,
  payload: employees,
});

export const requestEmployees = () => {
  return async (dispatch) => {
    let data = await employeesAPI.requestEmployees();
    dispatch(setEmployees(data));
  };
};

export default employeesReducer;
