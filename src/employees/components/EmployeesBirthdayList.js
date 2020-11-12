import React from 'react';
import css from '../styles/EmployeesBirthdayList.module.css';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function EmployeesBirthdayList({ employees, selectedEmployees }) {
  let selectedIds = Object.keys(selectedEmployees);
  let sortedBySelect = employees.filter((employee) => {
    return selectedIds.includes(employee.id);
  });
  const sortedByMonth = {};
  monthNames.forEach((month, index) => {
    sortedByMonth[month] = sortedBySelect.filter((employee) => {
      const date = new Date(employee.dob);

      return index === date.getMonth();
    });
  });

  return (
    <div className={css.content}>
      <h3 className={css.label}>Employees birthday</h3>
      <div className={css.list}>
        {monthNames.map((month) => {
          if (!sortedByMonth[month].length) return null;

          return (
            <div key={month}>
              <h4>{month}</h4>
              <ul>
                {sortedByMonth[month].map((employee) => {
                  let dob = new Date(employee.dob);

                  return (
                    <li key={employee.id}>
                      {`${employee.lastName} ${
                        employee.firstName
                      } - ${dob.getDate()} ${
                        monthNames[dob.getMonth()]
                      }, ${dob.getFullYear()} year`}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmployeesBirthdayList;
