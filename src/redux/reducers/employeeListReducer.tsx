const initialValues = {
  employeeList: [],
};

const EmployeeListReducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'GET_EMPLOYEE_LIST':
      return {...state, employeeList: action.payload.employeeList};
    default:
      return state;
  }
};

export default EmployeeListReducer;
