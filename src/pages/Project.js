import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TbCircleChevronLeft } from 'react-icons/tb';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import Skill from '../components/Skill';
import Footer from '../components/Footer';

const mobileSliderSettings = {
	slidesToShow: 4,
	responsive: [
		{
			breakpoint: 1150,
			settings: { slidesToShow: 3 },
		},
		{
			breakpoint: 880,
			settings: { slidesToShow: 2 },
		},
		{
			breakpoint: 630,
			settings: { slidesToShow: 1 },
		},
	],
};
const webSliderSettings = {
	slidesToShow: 1,
	// responsive: [
	// 	{
	// 		breakpoint: 1150,
	// 		settings: { slidesToShow: 3 },
	// 	},
	// 	{
	// 		breakpoint: 880,
	// 		settings: { slidesToShow: 2 },
	// 	},
	// 	{
	// 		breakpoint: 630,
	// 		settings: { slidesToShow: 1 },
	// 	},
	// ],
};

const Project = () => {
	let { state } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		document.querySelector('#con-id').scrollTo({ top: 10 });
	}, []);

	return !state ? (
		<></>
	) : (
		<Container id="con-id">
			{/* <Link to={'/simplefolio'}> */}
			<span className="back-btn" onClick={() => navigate(-1)}>
				<TbCircleChevronLeft />
			</span>
			{/* </Link> */}

			<div className="title-section">
				<h1>{state.name}</h1>
				<p className="project-desc">{state.description}</p>

				{state.features && (
					<>
						<h2 className="features-title">Features</h2>
						<ul className="features">
							{state.features.map((f) => (
								<li>✅ {f}</li>
							))}
						</ul>
					</>
				)}

				<h2>Technologies Used</h2>
				<div className="skills">
					{state.tags.map((p, i) => (
						<Skill key={i} tag={p} />
					))}
				</div>
			</div>

			{state.mobileImages && (
				<div className="screenshot-section">
					<h2>App Screenshots</h2>

					<div className="img-list">
						<Slider
							className="slider"
							autoplay
							infinite
							speed={500}
							autoplaySpeed={4000}
							slidesToScroll={1}
							{...mobileSliderSettings}
							prevArrow={<BasicArrow prev />}
							nextArrow={<BasicArrow />}
						>
							{state.mobileImages.map((img) => (
								<div className="img">
									<img src={img} alt={img} />
								</div>
							))}
						</Slider>
					</div>
				</div>
			)}

			{state.webImages && (
				<div className="screenshot-section">
					<h2>Web Screenshots</h2>

					<div className="img-list">
						<Slider
							className="slider web-slider"
							autoplay
							infinite
							speed={500}
							autoplaySpeed={4000}
							slidesToScroll={1}
							{...webSliderSettings}
							prevArrow={<BasicArrow prev />}
							nextArrow={<BasicArrow />}
						>
							{state.webImages.map((img) => (
								<div className="img">
									<img src={img} alt={img} />
								</div>
							))}
						</Slider>
					</div>
				</div>
			)}
			<Footer />
		</Container>
	);
};

const BasicArrow = ({ prev, onClick }) => {
	return (
		<Arrow
			className="arrow"
			prev={prev}
			onClick={(e) => {
				onClick();
				e.stopPropagation();
			}}
		>
			{prev ? <FaCaretLeft /> : <FaCaretRight />}
		</Arrow>
	);
};
const Arrow = styled.div`
	position: absolute;
	top: 0;
	z-index: 1;
	height: 100%;
	width: 30px;
	background: #0000003e;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	opacity: 0.6;
	transition: all 0.2s linear;
	font-size: 20px;
	right: ${({ prev }) => !prev && 0};
	&:hover {
		background: #0000006f;
		opacity: 1;
	}
`;

const Container = styled.div`
	height: 100vh;
	min-height: 500px;
	transition: all 0.2s linear;

	h1,
	h2 {
		text-align: center;
		opacity: 0.8;
		letter-spacing: 0.5px;
	}
	h1 {
		font-size: 45px;
		line-height: 70px;
	}
	h2 {
		font-size: 30px;
		margin: 50px 0;
		color: #2b2b2b;
	}

	.back-btn {
		position: absolute;
		top: 10px;
		left: 10px;
		font-size: 40px;
		opacity: 0.3;
		z-index: 1;
		cursor: pointer;
		transition: all 0.2s linear;
		&:hover {
			opacity: 0.7;
		}
	}
	.title-section {
		width: 50%;
		margin: auto;
		/* padding: 0 100px; */
		text-align: center;
		h1 {
			padding: 100px 10px 60px;
		}

		.project-desc {
			text-align: center;
			font-size: 18px;
			font-weight: 300;
			opacity: 0.7;
			letter-spacing: 0.4px;
			line-height: 30px;
		}
		.skills {
			width: 100%;
			margin: 10px auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.features-title {
			margin-bottom: 30px;
		}
		ul.features {
			list-style: none;
			li {
				font-size: 17px;
				font-weight: 300;
				opacity: 0.7;
				letter-spacing: 0.4px;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 10px;
			}
		}
	}
	.screenshot-section {
		position: relative;

		.slider {
			/* overflow: hidden; */
			height: 500px;
			margin-bottom: 20px;
			img {
				margin: auto;
				height: 500px;
				/* width: 100%; */
			}
		}
		.web-slider {
			/* width: 100%; */
			height: auto;
			img {
				height: auto;
				width: 100%;
			}
		}
		.project-tags {
			display: flex;
			flex-wrap: wrap;
			justify-content: left;
		}
	}

	@media (max-width: 1000px) {
		.title-section {
			width: 60%;
		}
	}
	@media (max-width: 850px) {
		.title-section {
			width: 60%;
		}
	}

	@media (max-width: 750px) {
		.title-section {
			width: 70%;
		}
	}

	@media (max-width: 650px) {
		.title-section {
			width: 80%;
		}
	}
	@media (max-width: 550px) {
		.title-section {
			width: 90%;
			h1 {
				font-size: 35px;
				line-height: 50px;
				padding: 80px 10px 35px;
			}
		}
		h2 {
			font-size: 25px;
			margin: 40px 0 20px;
		}
	}
`;

export default Project;
