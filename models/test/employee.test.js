const Employee = require('../employee.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const employeeModel = require('../employee.model.js');

describe('Employee', () => {

  it('should throw an error if no "firstNname", "lastName", "department" arg', () => {

    const cases = [
      {
        firstName: 'Jane',
      },
      {
        lastName: 'Doe',
      },
      {
        Department: 'IT',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      {
        firstName: 'Jane',
        Department: 'IT',
      },
      {
        lastName: 'Doe',
        Department: 'IT',
      },
    ];

    for (let employees of cases) {
      const emp = new Employee(employees);
      emp.validate(err => {
      expect(err.errors).to.exist;
      });
    }
  });

    {/* 
  it('should throw an error if "name" is not a string', () => {

    const cases = [{}, []];
    for(let name of cases) {
      const dep = new Department({ name });
  
      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });
    }
  });

  it('should throw an error if "name" is too short or too long', () => {

    const cases = ['ABC', 'abcd', 'Lorem ipsum, Lorem Ip']; // we test various cases, some of them are too short, some of them are too long
    for(let name of cases) {
      const dep = new Department({ name });
  
      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });
    }
  });

  it('should not throw an error if "name" is okay', () => {

    const cases = ['Management', 'Human Resources'];
    for(let name of cases) {
      const dep = new Department({ name });
  
      dep.validate(err => {
        expect(err).to.not.exist;
      });
  
    }
  
  });   */}

});