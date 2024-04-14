import React, { useEffect, useState } from "react";
import Navigasi from "./Navigasi";
import { Container, Table } from "react-bootstrap";
import axios from 'axios';

function UserList() {

  const [users,setUser] = useState([]);

  useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      // console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log({msg: error})
    }
  }

  return (
    <div>
      <Navigasi />
      <Container>
        <Table className="table-bordered mt-3">
          <thead>
            <tr className="table-warning">
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Email</th>
              <th scope="col">Jenis Kelamin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{ index+1 }</th>
              <td>{ user.name }</td>
              <td>{ user.email }</td>
              <td>{ user.gender }</td>
            </tr>
            ))}
            {/* <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default UserList;
