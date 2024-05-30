import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", phone: '39-44-123456' }]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const nameExists = persons.some(person => person.name === newName)
    if (!nameExists) {
      const newObject = {
        name: newName,
        phone: newPhone
      };
      setPersons(persons.concat(newObject));
      setNewName("");
      setNewPhone("")
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>number: <input value={newPhone} onChange={handleNewPhone}/></div>
        <div>
          <button type='submit' onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name}  {person.phone}</div>
      ))}
    </div>
  );
};

export default App;
