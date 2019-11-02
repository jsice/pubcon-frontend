import React from "react"
import PropTypes from "prop-types"

const NavigatorBar = (props) => {
  let counter = 0
  const navLinks = props.menuList.map((menu) => {
    return (
      <a href={menu.route} key={counter++}>
        <li>{menu.name}</li>
      </a>
    )
  })
  return (
    <nav>
      <ul>{navLinks}</ul>
    </nav>
  )
}

NavigatorBar.propTypes = {
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      route: PropTypes.string,
    }),
  ),
}

export default NavigatorBar
