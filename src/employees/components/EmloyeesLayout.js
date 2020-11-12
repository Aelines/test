import React from 'react';
import css from '../styles/EmployeesLayout.module.css';
import EmployeesAlphabetList from './EmployeesAlphabetList';
import EmployeesBirthdayList from './EmployeesBirthdayList';

function EmployeesLayout({ employees, handleChange, selectedEmployees }) {
  return (
    <div className={css.content}>
      <EmployeesAlphabetList
        employees={employees}
        handleChange={handleChange}
        selectedEmployees={selectedEmployees}
      />
      <EmployeesBirthdayList
        employees={employees}
        selectedEmployees={selectedEmployees}
      />
    </div>
  );
}

export default EmployeesLayout;
