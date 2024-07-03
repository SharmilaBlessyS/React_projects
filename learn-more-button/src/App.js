import React, { useState } from 'react';
import './App.css';

function App() {
  const [isHtmlVisible, setIsHtmlVisible] = useState(false);
  const [isCssVisible, setIsCssVisible] = useState(false);
  const [isJsVisible, setIsJsVisible] = useState(false);

  function ChangeHtml() {
    setIsHtmlVisible(!isHtmlVisible);
  }

  function ChangeCss() {
    setIsCssVisible(!isCssVisible);
  }

  function ChangeJs() {
    setIsJsVisible(!isJsVisible);
  }

  return (
    <div>
      <div className="container">
        <div className="box">
          <h3>HTML</h3>
          <p>HTML stands for Hyper Text Markup Language
            HTML is the standard markup language for creating Web pages
            HTML describes the structure of a Web page
            HTML consists of a series of elements
            HTML elements tell the browser how to display the content
            HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
          </p>
          <div className='btn'>
          <button onClick={ChangeHtml}>Learn More</button>
          </div>
          <span style={{ display: isHtmlVisible ? 'block' : 'none' }}>
            HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. HTML is the backbone of website design and function. It provides a structure for web pages that allows browsers to understand and display the content on the page. By understanding how HTML works, you can create better websites with more sophisticated features.
          </span>
        </div>
        <div className="box">
          <h3>CSS</h3>
          <p>CSS is used to define styles for your web pages, including the design, layout, and variations in display for different devices and screen sizes.</p>
          <div className='btn'>
          <button onClick={ChangeCss}>Learn More</button>
          </div>
          <span style={{ display: isCssVisible ? 'block' : 'none' }}>
            Examples include font style, transform, border, color, and margin. A CSS property declaration consists of a property name and a property value. Following a colon, the value is listed after the property name. A semicolon separates each name-value pair if more than one CSS property is specified.
          </span>
        </div>
        <div className="box">
          <h3>JavaScript</h3>
          <p>The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.</p>
          <div className='btn'>
          <button onClick={ChangeJs}>Learn More</button>
          </div>
          <span style={{ display: isJsVisible ? 'block' : 'none' }}>
            JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation.
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;