import React from "react";
import img2 from "../images/img3.jpg";

const Banner = () => {
	return (
		<div className="container">
			<section className="banner">
				<div className="test">
					<img src={img2} alt="" />
				</div>
				<div className="banner-content">
					<span className="banner-title">What Is Covid-19 </span>
					<h3 className="banner-title-1">Coronavirus</h3>
					<span className="banner-desc">
						Corona viruses are a type of virus. There are many different kinds,
						and some cause disease. A newly identified type has caused a recent
						outbreak of respiratory illness now called COVID-19.Lauren Sauer,
						M.S., the director of operations with the Johns Hopkins Office of
						Critical Event Preparedness and Response
					</span>
					<div className="button-learn">
						<button className="btn-learn-more">Learn More</button>
					</div>
				</div>
			</section>
			<section className="contagion">
				<h2 className="contagion-title">Covid-19</h2>
				<h1 className="contagion-title1">Contagion</h1>
				<div className="block-desc">
					<span className="contagion-desc">
						Corona viruses are a type of virus. There are many different kinds,
						and some cause disease. A newly identified type
					</span>
				</div>
			</section>
		</div>
	);
};

export default Banner;
