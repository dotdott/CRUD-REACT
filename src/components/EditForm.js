import React, { useState } from 'react';
import DataForm from './DataForm';

const EditForm = ({overlay, setOverlay, updateData}) => {
    const [newName, setNewName] = useState('');

    const [newPhone, setNewPhone] = useState('');    

    const handleNewName = e => {
        setNewName(e.target.value)
    }

    const handleNewPhone = e => {
        setNewPhone(e.target.value)
    }

    const updateChanges = () => {
        updateData(newName, newPhone)
        setOverlay(false)
    }

    const cancelChanges = () => {
        setOverlay(false)
    }

    return (
        <>
        <div className={overlay ? 'overlay active' : 'overlay'}>
            <div className="edit-overlay">
                <input 
                    type="text"
                    name="new-name" 
                    placeholder="Enter the new name"    
                    onChange={handleNewName}
                    />
                
                <input 
                    type="tel" 
                    name="new-phone" 
                    placeholder="Enter the new number"  
                    onChange={handleNewPhone}                      
                />

                    <div className="overlay-buttons">
                        <button 
                            type="submit" 
                            id="save-edit"
                            onClick={updateChanges}>
                            Save
                        </button>
                        <button 
                            type="submit" 
                            id="cancel-edit"
                            onClick={cancelChanges}>
                            Cancel
                        </button>
                    </div>
            </div>
        </div>
        </>
    )
}

export default EditForm;