import React, { useEffect, useState } from 'react';
import DataForm from './DataForm';
import SearchData from './SearchData';
import Axios from 'axios';

const Form = ({newName}) => {
    const db = 'https://crud-mysql-heroku.herokuapp.com';

    const [name, setName] = useState('');

    const [phone, setPhone] = useState('');

    const [Datas, setDatas] = useState([]);

    const [error, setError] = useState(false);


    function handleName(e) {
        setName(e.target.value);
    };

    function handlePhone(e) {
        setPhone(e.target.value);
    };

    function addData(name, phone, e) {
        if( name !== ''  && phone !== ''){
            Axios.post(db + '/crud/post', {
                name: name,
                note: phone
            })

            document.getElementById('form').reset()
            resetValues();
            setError(false)
        } else{
            setError(true)
        }
    }

    useEffect(() => {
        Axios.get(db + '/crud/get')
        .then(response => {
            setDatas(response.data);
        })
    },[addData])

    function resetValues(){
        setPhone('');
        setName('');
    }

    const dataList = Datas.map(Data => (
        <DataForm 
            id={Data.id}
            key={Data.id}
            name={Data.name}
            phone={Data.note}
            setDatas={setDatas}
            Datas={Datas}
        />
    ))


    return (
        <div className="form">
            <form onSubmit={newName} id="form">
            <h1>CRUD</h1>
                <label htmlFor="username">
                    Name
                    <input 
                        type="text"
                        name="name"
                        id="username"
                        placeholder="Ex: Gabriel Jodas"
                        onChange={handleName}
                    />
                </label>

                <input 
                    type="tel"
                    name="cellphone"  
                    id="userphone" 
                    placeholder="Note"
                    pattern="[0-9]*$" 
                    onChange={handlePhone}
                    />
                    {error && 
                <span className="error">You need to fill both fields!</span>
                    }
                <button 
                    id="submitBtn" 
                    type="submit"
                    onClick={() => addData(name,phone)}>
                    Confirm
                </button>
            </form>           
            
                <SearchData 
                    Datas={Datas}
                    dataList={dataList}
                />            
        </div>
    )
}

export default Form;