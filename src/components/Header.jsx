import React from "react";
const Header = (props)=>{
    return (
        <React.Fragment>
          <span>logo</span>
          <nav>导航</nav>
          <div>{props.num2}</div>
        </React.Fragment>
    )
}

export default Header;