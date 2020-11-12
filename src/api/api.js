import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://yalantis-react-school-api.yalantis.com/api/task0/users',
});

export const employeesAPI = {
  requestEmployees() {
    return instance.get().then((response) => {
      return response.data;
    });
  },
};
