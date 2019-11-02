import React, { Component } from "react"

class Table extends Component {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      problems: [
        {
          id: 1,
          name: "0-1 Sequences",
          sub_tot: 7498,
          sub_acc: 1074,
          sub_rat: 14,
          sub_fas: 0.0,
          users_tot: 1428,
          users_acc: 712,
          users_rat: 50,
          difficulty: 6.9,
        },
        {
          id: 2,
          name: "10 Kinds of People",
          sub_tot: 14662,
          sub_acc: 3058,
          sub_rat: 21,
          sub_fas: 0.01,
          users_tot: 2530,
          users_acc: 1763,
          users_rat: 70,
          difficulty: 4.5,
        },
        {
          id: 3,
          name: "2048",
          sub_tot: 7251,
          sub_acc: 3365,
          sub_rat: 46,
          sub_fas: 0.0,
          users_tot: 3271,
          users_acc: 2784,
          users_rat: 85,
          difficulty: 2.5,
        },
        {
          id: 4,
          name: "3D Printed Statues",
          sub_tot: 8181,
          sub_acc: 3765,
          sub_rat: 46,
          sub_fas: 0.0,
          users_tot: 3503,
          users_acc: 3137,
          users_rat: 90,
          difficulty: 2.1,
        },
        {
          id: 5,
          name: "3D Printer",
          sub_tot: 640,
          sub_acc: 119,
          sub_rat: 19,
          sub_fas: 0.0,
          users_tot: 245,
          users_acc: 94,
          users_rat: 38,
          difficulty: 8.5,
        },
      ],
    }
  }

  handleClick = (msg) => (e) => {
    e.preventDefault()
    alert(msg)
  }

  renderTableHeader() {
    let header = Object.keys(this.state.problems[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  renderTableData() {
    return this.state.problems.map((problem) => {
      const id = problem.id
      const keys = Object.keys(problem) //destructuring
      return (
        <tr key={id}>
          {keys.map((key) => {
            return <td key={problem.id}>{problem[key]}</td>
          })}
          <td>
            <button onClick={this.handleClick("upload " + id)}>Upload</button>
          </td>
          <td>
            <button onClick={this.handleClick("stat " + id)}>Stat</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <table id="problems">
          <thead>
            <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    )
  }
}

export default Table
