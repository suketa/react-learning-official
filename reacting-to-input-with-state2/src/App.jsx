import './App.css';
import { useState } from 'react';

export default function EditProfile() {
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');
  const [isEditing, setIsEditing] = useState(false);

  const buttonLabel = isEditing ? 'Save Profile' : 'Edit Profile';
  const fullName = `${firstName} ${lastName}`;

  function handleSubmit(event) {
    setIsEditing(!isEditing);
    event.preventDefault();
  }

  function handleChangeFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleChangeLastName(event) {
    setLastName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:{' '}
        {isEditing ? <input value={firstName} onChange={handleChangeFirstName}/> : <b>{firstName}</b>}
      </label>
      <label>
        Last name:{' '}
        {isEditing ? <input value={lastName} onChange={handleChangeLastName}/> : <b>{lastName}</b>}
      </label>
      <button type="submit">
        {buttonLabel}
      </button>
      <p><i>{`Hello, ${firstName} ${lastName}!`}</i></p>
    </form>
  );
}

