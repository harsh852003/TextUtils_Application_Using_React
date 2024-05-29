import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here')
    const handleClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted into Uppercase","success")
    }
    const handleChange = (event) => {
        setText(event.target.value)
       
    }
    const handleOnClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted into Lowercase","success")
    }
    const handleClearClick = () => {
        setText("")
        props.showAlert("Clear the text","success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed", "success")
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="TextArea">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" >{props.text}</label>
                    <textarea className="form-control" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'dark' ? 'off white' : 'white', color: props.mode === 'dark' ? 'green' : 'black' }} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-success my-1 my-2" onClick={handleClick}>Convert to UpperCase</button>
                <button className="btn btn-success mx-1 my-2" onClick={handleOnClick}>Convert to LowerCase</button>
                <button className="btn btn-success mx-1 my-2" onClick={handleClearClick}>Clear the text</button>
                <button className="btn btn-success mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spacet</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>no of words - { text.split(" ").filter((element)=>{return element.length !=0}).length}</p>
                <p>no of character- {text.length}</p>
                <p>{0.008 * text.split(" ").length} per min read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Plaese rite something to preview"}</p>
            </div>
        </>
    )
}
