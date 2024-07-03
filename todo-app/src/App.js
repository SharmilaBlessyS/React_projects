import React, { useState } from 'react';
import './App.css';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [texts, setTexts] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddText = () => {
        if (inputValue.trim() !== '') {
            setTexts([...texts, { id: Date.now(), text: inputValue }]);
            setInputValue('');
        }
    };

    const handleRemoveText = (id) => {
        setTexts(texts.filter(text => text.id !== id));
    };

    return (
        <div className="App">
            <h1>Display Input Text</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter text"
            />
            <button onClick={handleAddText}>Add Text</button>
            <div className="text-container">
                {texts.map((text) => (
                    <div key={text.id} className="text-item">
                        <span>{text.text}</span>
                        <button onClick={() => handleRemoveText(text.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
