import React, { useState, useEffect } from 'react';

export const ProfileField = props => {
  const { value , fieldName, saveNewProfileField } = props;
  const [newValue, setNewValue] = useState(value);

  useEffect(()=>{
    setNewValue(value  || `Your ${fieldName}`);
  }, [props]);

  const [buffer, setBuffer] = useState('');
  const handleChange = e => {
    setNewValue(e.target.value);
  }
  const [toggle, setToggle] = useState(false);
  const switchToEdit = e => {
    if (e.target.classList.value.includes('FontAwesomeIcon')) {
      setToggle(true);
      setBuffer(newValue);
    }
  }

  const saveEdit = () => {
    const uid = JSON.parse(localStorage.getItem('userId'));
    saveNewProfileField( uid, fieldName.toLowerCase(), newValue );
    setToggle(false);
  }

  const cancelEdit = () => {
    setNewValue(buffer);
    setToggle(false);
  }

  const renderEditableInput = () => {
    return (
      <div>
        <input value={newValue} onChange={handleChange}
          className="ProfileField-input" id="fieldName" />
        <button
          onClick={saveEdit}
          className="ProfileField-button ProfileField-button-save"
        >Save
        </button>
        <button
          onClick={cancelEdit}
          className="ProfileField-button ProfileField-button-cancel"
        >Cancel
        </button>
      </div>
    )
  }

  const pencilIcon = () =>{
    return(
      <div onClick={switchToEdit} className = "Profile-Field-icon-container">
        <i className="fas fa-sm fa-pencil-alt FontAwesomeIcon"></i>
      </div>
    )
  }
  
  const renderInfo = (props) => {
    if (props!== undefined) return (
      <div >
        <p className="ProfileField-values">
        {fieldName}: {' '}{newValue}{' '}
      </p>
        {props.editable ? pencilIcon() : ''}
        
      </div>
    )
  }

  return (
    <div>
      {!toggle && renderInfo(props)}
      {toggle && renderEditableInput()}
    </div>
  )
}


