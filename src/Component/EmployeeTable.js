import React, { Component } from "react";
import Search from "./Search";
import Table from "./Table";
import TableHeader from "./TableHeader";
import API from "../utils/api";

class EmployeeTable extends Component {
  state = {
    results: [],
    search: "",
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.getEmployee(50);
  }

  getEmployee = (query) => {
    console.log(query);
    API.search(query)
      .then((res) => {
        console.log(res);
        this.setState({
          results: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (
      <div>
        <TableHeader />
        <Search />
        <Table results={this.state.results} />
      </div>
    );
  }
}

export default EmployeeTable;

//››fake data events into a map and make them into props
// const events = [
//   {
//     id: 1,
//     name: "event 1",
//     date: "may31,2021",
//     Location: "san Diego",
//   },
//   {
//     id: 2,
//     name: "event 2",
//     date: "june31,2021",
//     Location: "San Francisco",
//   },
//   {
//     id: 3,
//     name: "event 3",
//     date: "july31,2021",
//     Location: "New York",
//   },
// ];

// function EventContainer() {
//   return (
//     <table>
//       <thead>
//         <tbody>
//           <trow></trow>
//         </tbody>
//       </thead>
//     </table>
//   );
// }
