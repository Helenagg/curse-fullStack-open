export const PersonForm = ({
  newName,
  onNewName,
  newPhone,
  onNewPhone,
  onAddPerson,
  textButton,
}) => (
    <form>
        <div>
            name: <input value={newName} onChange={onNewName} />
        </div>
        <div>
            number: <input value={newPhone} onChange={onNewPhone} />
        </div>
        <div>
            <button type='submit' onClick={onAddPerson}>
                {textButton}
            </button>
        </div>
    </form>
);

export const DataPerson = ({ data }) => (
    <div>
        {data.map((person) => (
            <div key={person.id}>
                {person.name} {person.phone}
            </div>
        ))}
    </div>
);

const PersonFilter = ({ filter, onFilter }) => (
    <div>
        filter shown with <input value={filter} onChange={onFilter} />
    </div>
);

export default PersonFilter;
