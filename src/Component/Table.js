import React from "react";
import Moment from "react-moment";

function Table(props) {
  console.log(props);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, index) => (
          <tr key={index}>
            <td>
              <img
                alt="thumbnail"
                className="img-fluid"
                src={result.picture.thumbnail}
              />
            </td>
            <td>
              {result.name.first} {result.name.last}
            </td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>
              <Moment format="MM/DD/YYYY">{result.dob.date}</Moment>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
