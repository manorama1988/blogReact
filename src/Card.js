import React , { useState } from 'react';
import './Card.css';
function Card() {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [enteredImage, setEnteredImage] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); 
    }

    const messageChangeHandler = (event) => {
        setEnteredMessage(event.target.value); 
    }
    const imageChangeHandler = (event) => {
        setEnteredImage(event.target.value); 
    }
    const categoryChangeHandler = (event) => {
        setEnteredCategory(event.target.value); 
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("hello");

        const generatedData = {
            title : enteredTitle,
            message : enteredMessage,
            image : enteredImage,
            category : enteredCategory
        };
        console.log(" this is generated data",generatedData);
    }

    return(
    <div className="header">
        <h1 className="card-heading"> post it</h1>
        <div className="card">
        <div className="card-detail">
            <form onSubmit={submitHandler}>
            <div className="card-content">
                <div className="card-title">
                    <input type="text" className="text" placeholder="Title" onChange={titleChangeHandler}/>
                </div>
                <div className="card-text">
                    <textarea type="text" className="textarea"id="" cols="48" rows="6" 
                    placeholder="Enter Your Text" onChange={messageChangeHandler}></textarea>
                </div>
                <div className="card-footer">
                    <div className="card-img">
                     <input type="imgurl" className="imagurl" placeholder="Enter image URL" onChange={imageChangeHandler} />
                    </div>
                    <div className="card-category">
                        <input type="text" className="text-category" placeholder="Category" onChange={categoryChangeHandler}/>
                    </div>
                </div>
                <div className="card-button">
                    <button className="btn btn-post">Post It</button>
                </div>
            </div>
            </form>
        </div>
    </div>
    </div>
    )
} 

export default Card;