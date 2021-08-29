import ContactsList from './components/ContactsList';
import Form from './components/Form';
import Filter from './components/Filter';

function App() {
  return (
    <>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
}

export default App;
