import { useState } from "react";
import PersonFilter, {
  DataPerson,
  PersonForm,
} from "./components/PersonFilter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);
    if (!nameExists) {
      const newObject = {
        name: newName,
        phone: newPhone,
        id: persons.length + 1,
      };
      setPersons(persons.concat(newObject));
      setNewName("");
      setNewPhone("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const filterValue = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const personsToShow = filterValue.length > 0 ? filterValue : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter filter={filter} onFilter={handleFilter} />
      <PersonForm
        newName={newName}
        onNewName={handleNewName}
        newPhone={newPhone}
        onNewPhone={handleNewPhone}
        onAddPerson={addPerson}
        textButton='add'
      />
      <h2>Numbers</h2>
      <DataPerson data={personsToShow} />
    </div>
  );
};

export default App;
