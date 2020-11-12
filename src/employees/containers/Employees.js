import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { requestEmployees } from '../../store/employeesReducer';
import EmployeesLayout from '../components/EmloyeesLayout';
import storage from '../../store/localStorage';

function Employees({ employees, requestEmployees }) {
  const [selectedEmployees, setSelectedEmployees] = useState(
    storage.get('selectedEmployees')
  );
  useEffect(() => {
    requestEmployees();
  }, [requestEmployees]);

  const handleChange = useCallback(
    (e, id) => {
      setSelectedEmployees((prevState) => {
        const newState = { ...prevState };

        if (e.target.checked) {
          newState[id] = true;
        } else {
          delete newState[id];
        }

        storage.set('selectedEmployees', newState);

        return newState;
      });
    },
    [setSelectedEmployees]
  );

  return (
    <EmployeesLayout
      employees={employees}
      handleChange={handleChange}
      selectedEmployees={selectedEmployees}
    />
  );
}

let mapStateToProps = (state) => {
  return {
    employees: state.employees,
  };
};

export default connect(mapStateToProps, { requestEmployees })(Employees);
