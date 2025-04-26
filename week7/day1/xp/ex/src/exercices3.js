import React, { Component } from 'react';
import './Exercise.css';

class Exercise extends Component {
  // Define style object
  style_header = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial',
  };

  render() {
    return (
      <div>
        {/* Apply style object to h1 */}
        <h1 style={this.style_header}>This is a styled heading</h1>

        <p className="para">This is a paragraph with external CSS styling.</p>

        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          Visit React Official Site
        </a>

        <form>
          <label>
            Name:
            <input type="text" />
          </label>
        </form>

        <img src="https://via.placeholder.com/150" alt="placeholder" />

        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
