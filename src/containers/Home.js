import React from 'react'

class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            menuList: [
                {name: "Problems", route: "/problems"}
                ,{name:"Contests", route:"/contests"}
            ]
        }
    }
    render(){
        <div id="home">
            <div id="header">
                <NavagatorBar menu={this.state.menuList} />
                <button><a href="/login">Login</a></button>
            </div>
        </div>
    }
}



export default Home