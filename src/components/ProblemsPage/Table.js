import React, { Component } from "react"

class Table extends Component {
  constructor(props) {
    super(props) // since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      // mockup data for table
      problems: [
        {
          id: 1,
          name: "0-1 Sequences",
          time_limit: 1,
          author: "Tung Kam Chuen",
        },
        {
          id: 2,
          name: "0-2 chao",
          time_limit: 1.5,
          author: "jsice",
        },
        {
          id: 3,
          name: "0-3 ni",
          time_limit: 1,
          author: "Thms",
        },
        {
          id: 4,
          name: "0-4 ma",
          time_limit: 2,
          author: "Aminomous",
        },
        {
          id: 5,
          name: "0-5 fuck you",
          time_limit: 1,
          author: "HumHoo",
        },
      ],
    }
  }

  // temp function for button onClick
  handleClick = (msg) => (e) => {
    e.preventDefault()
    alert(msg)
  }

  renderTableHeader() {
    const { problems } = this.state
    const header = Object.keys(problems[0])
    return header.map((key) => <th>{key.toUpperCase()}</th>)
  }

  renderTableData() {
    const { problems } = this.state
    return problems.map((problem) => {
      const keys = Object.keys(problem)
      return (
        <tr key={problem.id}>
          {keys.map((key) => (
            <td>{problem[key]}</td>
          ))}
          <td>
            <button type="button" onClick={this.handleClick(problem.id)}>
              Upload
            </button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <table id="problems">
          <thead>{this.renderTableHeader()}</thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    )
  }
}

export default Table
