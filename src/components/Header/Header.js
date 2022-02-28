import React from "react";
import logo from "../../images/c-logo.png";
import { Link } from "react-router-dom";
import img1 from "../../images/c-header-1.png";

const Header = () => {
	return (
		<div className="container">
			<div className="nav-header">
				<img src={logo} alt="" />
				<div className="flex">
					<ul className="nav-menu">
						<li className="nav-item">
							<Link className="first" to="/">
								Overview
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/">Contagion</Link>
						</li>
						<li className="nav-item">
							<Link to="/">Symptoms</Link>
						</li>
						<li className="nav-item">
							<Link to="/">Prevention</Link>
						</li>
					</ul>
					<div className="icon-menu">
						<i className="bx bx-menu"></i>
					</div>
					<div className="item-contact">
						<Link className="btn btn-outline" to="/">
							Contact
						</Link>
					</div>
				</div>
			</div>
			<section className="header-content">
				<div className="content-left">
					<h3>COVID-19 Alert </h3>
					<h1>Stay at Home quarantine </h1>
					<h1>To stop Corona virus</h1>
					<span>
						There is no specific medicine to prevent or treat coronavirus
						disease (COVID-19). People may need supportive care to .
					</span>
					<button className="btn btn-primary">Let Us Help</button>
				</div>
				<div className="content-right">
					<img src={img1} alt="" />
				</div>
			</section>
		</div>
	);
};

export default Header;
