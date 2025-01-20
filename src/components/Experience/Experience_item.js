import React from 'react'
import { useNavigate } from 'react-router-dom';
import Img from '../../assets/plytol.png'
import "./experience.css";
import Button from '../Button/Button';

const Experience_item = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about_plytol');
    };

    return (
        <div className='experience-item-container'>
            <div className='layout-structure'>
                <img src={Img} ></img>
                <div className='experience-information'>
                    <h1>Plytol</h1>
                    <h4>Software developer and Co-founder</h4>
                    <Button children={<p>Learn more</p>} onClick={handleClick} />
                </div>

            </div>
        </div>
    )
}

export default Experience_item
