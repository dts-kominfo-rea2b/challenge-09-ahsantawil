// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    const {data} = props;
    return (
        <div className='card'>
            <img className='card-img' src={data.photo} alt={data.name} />
            <div className='card-body'>
                <h3>{data.name}</h3>
                <span>{data.phone}</span>
                <span>{data.email}</span>
            </div>            
        </div>
    )
}

export default Contact;