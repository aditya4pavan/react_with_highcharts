import React from 'react';
import ReactDOM from 'react-dom';
import HomeView from './components/home';
import './styles.scss';

function createComponent() {
    var div = document.createElement('div')
    div.setAttribute('id', 'root');
    div.classList.add('h-100', 'col-container-fluid');
    document.body.appendChild(div)
}

createComponent();

ReactDOM.render(<HomeView />, document.getElementById('root'))