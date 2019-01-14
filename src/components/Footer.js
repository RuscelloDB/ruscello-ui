import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// similar to function Footer(props) {
class Footer extends Component {
  render() {
    return (
        <ul className="list-inline">
            <li className="list-inline-item">version</li>
            <li className="list-inline-item"><a href="#" target="_blank">Documentation</a></li>
            <li className="list-inline-item"><a href="#" target="_blank">Support</a></li>
        </ul>
    );
  }
}

export default Footer;
