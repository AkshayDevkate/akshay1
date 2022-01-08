import React, { Components } from 'react';
import { MenuItems } from "./MenuItems"

class Navbar extends React.Components {
	render() {
		return(
			<nav ClassName="NavbarItems">
			<h1 ClassName="navbar-logo" >React</h1>
			<div ClassName="menu-icon">

			</div>
			<ul>
			{MenuItems.map((item, index)=>{
				return (
					<li key={index}>
					<a ClassName={item.cName} href={item.url}>
					{item.title}
					</a>
					</li> 
					)
			})}

						
			</ul> 
			</nav>
			)
	}
}

export default Navbar