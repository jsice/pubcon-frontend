import React from 'react'


class NavigatorBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const navLinks = this.props.map(menu => {
            return <a href={menu.route} ><li>{menu.name}</li></a>
        })
        return (
            <nav>
                <ul>
                    {navLinks}
                </ul>
            </nav>
        )
    }
}




export default NavigatorBar