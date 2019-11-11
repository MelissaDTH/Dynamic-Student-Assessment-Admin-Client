import React, { Component } from "react"
import SubNavigation from "../SubNavigation/SubNavigation"
// import Link from '@material-ui/core/Link';
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import picture from "../../constants/icon.png"
const removeUnderline = { textDecoration: "none" }

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<AppBar variant="fixed" className="bg-white" position="static">
					<Toolbar>
						<Link to="/">
							<img
								src="https://vectr.com/tmp/a5Cpw0Nj34/cl8ePfAwW.png?width=62.19&height=91.77&select=aFphC0vP&source=selection"
								width="50px"
							></img>
							{/* <img className="logo pt-1" src='https://i1.wp.com/thenextwomen.com/summit/wp-content/uploads/2017/03/codaisseur-logo-long-2e9b7b7b839a33128016eb77b49ff2bb6397b6b3552523ee09273d6a5b427861.png?resize=1200%2C279&ssl=1' alt="codaisseur logo" width="260"/> */}
						</Link>

						<Link to="/signup" color="inherit" style={removeUnderline}>
							<p className="text-dark text-bold-spaced nav-link pt-1">
								Sign Up
							</p>
						</Link>

						<Link to="/login" style={removeUnderline}>
							<p className="text-dark text-bold-spaced nav-link pt-1">
								Sign In
							</p>
						</Link>
						<Link to="/logout" style={removeUnderline}>
							<p className="text-dark text-bold-spaced nav-link pt-1">
								Log Out
							</p>
						</Link>
					</Toolbar>
				</AppBar>

				<SubNavigation />
			</div>
		)
	}
}
