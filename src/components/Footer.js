import React from "react";
import logo from "../images/c-logo.png";
import iconFace from "../images/icon-face.png";
import iconYtb from "../images/icon-ytb.png";
import iconV from "../images/icon-v.png";
import iconTw from "../images/icon-tw.png";

const Footer = () => {
	return (
		<div className="container">
			<div className="footer">
				<h2 className="footer-title">Have Question in mind? Let us help you</h2>
				<div className="footer-search">
					<input type="text" placeholder="snmonydemo@gmail.com" />
					<button>Send</button>
				</div>
				<div className="footer-info">
					<div className="footer-logo">
						<img src={logo} alt="" />
					</div>
					<ul className="footer-menu">
						<li>Overview</li>
						<li>Symptoms</li>
						<li>Prevention</li>
						<li>Treatment</li>
					</ul>
					<ul className="footer-icon">
						<li>
							<img src={iconFace} alt="" />
						</li>
						<li>
							<img src={iconYtb} alt="" />
						</li>
						<li>
							<img src={iconV} alt="" />
						</li>
						<li>
							<img src={iconTw} alt="" />
						</li>
					</ul>
				</div>
				<div className="footer-copy-right">
					2020 @ All rights reserved by pixelspark.co
				</div>
			</div>
		</div>
	);
};

export default Footer;
