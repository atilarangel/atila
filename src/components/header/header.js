import React, { Component } from 'react';
import MenuIcon from '../menu/menu-icon';
import Menu from '../menu/menu';
import Popup from "reactjs-popup";
import './header.css'

class Header extends Component {

	render() {

		  const contentStyle = {
			background: "rgba(255,255,255,0)",
			width: "100%",
			border: "none"
		  };
		return (
			<header>
				<h1 className='title-header'>atila</h1>
				<Popup
					modal
					overlayStyle={{ background: "#da4453" }}
					contentStyle={contentStyle}
					closeOnDocumentClick={false}
					trigger={open => <MenuIcon open={open} />}
					>
					{close => <Menu close={close} />}
				</Popup>
			</header>
		)
	}
}

export default Header;