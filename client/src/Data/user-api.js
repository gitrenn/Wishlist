import axios from "axios";
const userApi = {
  login: credential => axios.post('/api/login', credential),
  getUser: () => axios.get('/api/user_data', data => {
    console.log(typeof(data.username));
    return data;
  }),
  getAll: () => axios.get('/api/user').then(results => results.data),
  getById: id => axios.get(`/api/user/${id}`).then(results => results.data),
  create: account => axios.post('/api/account', account).then(results => results.data),
  update: user => axios.put(`/api/user/${user.id}`, user),
  delete: id => axios.delete(`/api/user/${id}`)
};
export {
  userApi as default
};
