import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Header from './components/Header';

const App = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to Madhav RO Sales</h1>
            <p>Your one-stop solution for water purification systems.</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));