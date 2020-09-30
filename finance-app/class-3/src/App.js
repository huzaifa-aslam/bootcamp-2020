import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TableData} from './components/Table'

import './App.css';

function App() {
    return (
        <div className = "App" >
        <h1 >Table List </h1>
        <TableData/>
        </div>
    );
}

export default App;