import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function fetchContactById(contactId) {
  const { data } = await axios.get(`/contacts/${contactId}`);
  return data;
}
