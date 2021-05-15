import React, { Component } from "react";
import Search from "./Search";
import Table from "./Table";
import TableHeader from "./TableHeader";
import API from "../utils/api";

class EmployeeTable extends Component {
  state = {
    results: [],
    search: "",
    searchResults: [],
  };

  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          results: res.data.results,
          searchResults: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <TableHeader />
        <Search></Search>
        <Table results={this.state.results} />
      </div>
    );
  }
}

export default EmployeeTable;
