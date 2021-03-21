import Axios from 'axios';
import React, { useState } from 'react';
import EditForm from './EditForm';

const DataForm = ({ 
        name, 
        phone, 
        id, 
    }) => {
    const db = 'https://crud-mysql-heroku.herokuapp.com';

    const [overlay, setOverlay] = useState(false);

    const [isUpdated, setIsUpdated] = useState(false);

    function removeData(id) {
        Axios.delete(db + `/crud/delete/${id}`)
    } 

    function updateData(newName, newPhone){   
        Axios.put(db + '/crud/update', {
            name: newName,
            note: newPhone,
            id: id
        })
    }

return (
    <>
        <li>
            <p>{name}</p>
            <small>{phone}</small>
            <a>
            <i className="fas fa-edit" onClick={() => setOverlay(true)}></i>
            </a>

            <a>
            <i className="fas fa-trash-alt" onClick={() => removeData(id)}></i>
            </a>
        </li>
        <EditForm 
            setOverlay={setOverlay}
            overlay={overlay}
            updateData={updateData}
            isUpdated={isUpdated}
            setIsUpdated={setIsUpdated}
        />
    </>
    )
}

export default DataForm;