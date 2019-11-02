import React from "react"
import NavigatorBar from "../components/NavigatorBar"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuList: [
        { name: "Problems", route: "/problems" },
        { name: "Contests", route: "/contests" },
      ],
    }
  }
  render() {
    return (
      <div id="home">
        <div id="header">
          <NavigatorBar menuList={this.state.menuList} />
          <button>
            <a href="/login">Login</a>
          </button>
        </div>
      </div>
    )
  }
}

export default Home
