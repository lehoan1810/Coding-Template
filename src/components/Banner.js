import React from "react";
import img2 from "../images/img3.jpg";
import topics1 from "../images/topics1.png";
import topics2 from "../images/topics2.png";
import topics3 from "../images/topics3.png";
import topics4 from "../images/topics4.png";
import symp1 from "../images/symp.png";
import step1 from "../images/step1.png";
import step2 from "../images/step2.png";
import step3 from "../images/step3.png";
import step4 from "../images/step4.png";
import mapBg from "../images/table.png";
import map from "../images/map.png";
import supplement from "../images/supplement.png";

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
			<section className="symp">
				<div className="contagion-center">
					<h2 className="contagion-title">Covid-19</h2>
					<h1 className="contagion-title1">Symptomps</h1>
					<div className="block-desc">
						<span className="contagion-desc">
							Corona viruses are a type of virus. There are many different
							kinds, and some cause disease. A newly identified type has caused
							a recent outbreak of respiratory
						</span>
					</div>
				</div>
				<div className="symp-image">
					<img src={symp1} alt="" />
				</div>
			</section>
			<section className="step">
				<div className="contagion-center">
					<h2 className="contagion-title">Covid-19</h2>
					<h1 className="contagion-title1">What should we do</h1>
					<div className="block-desc">
						<span className="contagion-desc">
							Corona viruses are a type of virus. There are many different
							kinds, and some cause disease. A newly identified type has caused
						</span>
					</div>
				</div>
				<div className="step-menu">
					<div className="step-item reverse">
						<div className="step-main">
							<span className="step-ellipse">01</span>
							<div className="step-content right">
								<h2 className="step-title">Wear Masks</h2>
								<span className="step-desc">
									Continually seize impactful vortals rather than future-proof
									supply chains. Uniquely exploit emerging niches via fully
									tested meta-services. Competently pursue standards compliant
									leadership skills vis-a-vis pandemic "outside the box"
									thinking. Objectively
								</span>
							</div>
						</div>
						<div className="step-image">
							<img src={step1} alt="" />
						</div>
					</div>
					<div className="step-item">
						<div className="step-image">
							<img src={step2} alt="" />
						</div>
						<div className="step-main right">
							<span className="step-ellipse">02</span>
							<div className="step-content">
								<h2 className="step-title">Wear Masks</h2>
								<span className="step-desc">
									Continually seize impactful vortals rather than future-proof
									supply chains. Uniquely exploit emerging niches via fully
									tested meta-services. Competently pursue standards compliant
									leadership skills vis-a-vis pandemic "outside the box"
									thinking. Objectively
								</span>
							</div>
						</div>
					</div>
					<div className="step-item reverse">
						<div className="step-main">
							<span className="step-ellipse">03</span>
							<div className="step-content right">
								<h2 className="step-title">Wear Masks</h2>
								<span className="step-desc">
									Continually seize impactful vortals rather than future-proof
									supply chains. Uniquely exploit emerging niches via fully
									tested meta-services. Competently pursue standards compliant
									leadership skills vis-a-vis pandemic "outside the box"
									thinking. Objectively
								</span>
							</div>
						</div>
						<div className="step-image">
							<img src={step3} alt="" />
						</div>
					</div>
					<div className="step-item">
						<div className="step-image">
							<img src={step4} alt="" />
						</div>
						<div className="step-main right">
							<span className="step-ellipse">04</span>
							<div className="step-content">
								<h2 className="step-title">Wear Masks</h2>
								<span className="step-desc">
									Continually seize impactful vortals rather than future-proof
									supply chains. Uniquely exploit emerging niches via fully
									tested meta-services. Competently pursue standards compliant
									leadership skills vis-a-vis pandemic "outside the box"
									thinking. Objectively
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="map">
				<div className="map-item">
					<div className="map-content">
						<img src={map} alt="" />
					</div>
					<div className="map-bg">
						<img src={mapBg} alt="" />
					</div>
				</div>
				<div className="map-supplement">
					<img src={supplement} alt="" />
				</div>
			</section>
		</div>
	);
};

export default Banner;
