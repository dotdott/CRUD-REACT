import React, { useState } from 'react';

const SearchData = ({ dataList }) => {
    const [typedSearch, setTypedSearch] = useState('');

    const typedFilter = e => {
        setTypedSearch(e.target.value.toUpperCase())        
    }
    
    const filteredData = dataList.filter(data => {
        const values = data.props.name.toUpperCase() || data.props.phone.toUpperCase();
        if(values.includes(typedSearch)){
            return data
        } 
    })

    return (
        <div className="users-datas">
        <input 
            type="text" 
            id="search-name" 
            name="search-name" 
            placeholder="Buscar" 
            onChange={typedFilter} 
        />
            {filteredData ? (filteredData) : (dataList)}
        </div>                    
    )
}

export default SearchData;