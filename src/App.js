import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

import './App.css';



function App() {

  const [tax, setTax] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/users/list/')
      .then(response => response.json())
      .then(data => {

        setTax(data);
      })
      .catch(error => console.error(error));
  }, []);

  console.log(tax);

  return (
    <div className="App">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>USER ID</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>PASSWORD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tax.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  );
};


export default App;
