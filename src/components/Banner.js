import React from "react";
import img2 from "../images/img3.jpg";
import topics1 from "../images/topics1.png";
import topics2 from "../images/topics2.png";
import topics3 from "../images/topics3.png";
import topics4 from "../images/topics4.png";

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
				<div className="contagion-center">
					<h2 className="contagion-title">Covid-19</h2>
					<h1 className="contagion-title1">Contagion</h1>
					<div className="block-desc">
						<span className="contagion-desc">
							Corona viruses are a type of virus. There are many different
							kinds, and some cause disease. A newly identified type
						</span>
					</div>
				</div>
				<div className="topics">
					<div className="topics-item">
						<img src={topics1} alt="" />
						<div className="topics-content">
							<h2 className="topics-title">Air Transmission</h2>
							<span className="topics-desc">
								Objectively evolve tactical expertise before extensible
								initiatives. Efficiently simplify
							</span>
						</div>
					</div>
					<div className="topics-item">
						<img src={topics2} alt="" />
						<div className="topics-content">
							<h2 className="topics-title">Human Contacts</h2>
							<span className="topics-desc">
								Washing your hands is one of thesimplest ways you can protect
							</span>
						</div>
					</div>
					<div className="topics-item">
						<img src={topics3} alt="" />
						<div className="topics-content">
							<h2 className="topics-title">Containted Objects</h2>
							<span className="topics-desc">
								Use the tissue while sneezing,In this way, you can protect your
								droplets.
							</span>
						</div>
					</div>
				</div>
				<img className="topics-outside" src={topics4} alt="" />
			</section>
		</div>
	);
};

export default Banner;
