import React from 'react';
import css from '../styles/EmployeesAlphabetList.module.css';

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function EmployeesAlphabetList({ employees, handleChange, selectedEmployees }) {
  const sortedEmployees = {};
  const sortedArr = employees.sort((a, b) => {
    return a.lastName < b.lastName ? -1 : 1;
  });

  sortedArr.forEach((element) => {
    let letter = element.lastName[0].toUpperCase();

    if (!sortedEmployees[letter]) {
      sortedEmployees[letter] = [];
    }

    sortedEmployees[letter].push(element);
  });

  return (
    <div className={css.content}>
      <h3 className={css.label}>Employees</h3>
      <div className={css.list}>
        {alphabet.map((letter) => {
          const capitalLetter = letter.toUpperCase();

          return (
            <div key={letter} className={css.item}>
              <h4>{capitalLetter}</h4>
              <div className={css.employees}>
                {sortedEmployees[capitalLetter]
                  ? sortedEmployees[capitalLetter].map((employee) => {
                      return (
                        <div className={css.line} key={employee.id}>
                          {`${employee.lastName} ${employee.firstName}`}
                          <input
                            type="checkbox"
                            defaultChecked={selectedEmployees[employee.id]}
                            onChange={(e) => {
                              handleChange(e, employee.id);
                            }}
                          />
                        </div>
                      );
                    })
                  : '-----'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmployeesAlphabetList;
