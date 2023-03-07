import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import styled from 'styled-components';
import { TbCircleChevronLeft } from 'react-icons/tb';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Skill from '../components/Skill';
import Footer from '../components/Footer';

const Project = () => {
	let { state } = useLocation();
	const navigate = useNavigate();

	return !state ? (
		<></>
	) : (
		<Container>
			{/* <Link to={'/simplefolio'}> */}
			<span className="back-btn" onClick={() => navigate(-1)}>
				<TbCircleChevronLeft />
			</span>
			{/* </Link> */}

			<div className="title-section">
				<h1>{state.name}</h1>
				<p className="project-title">{state.description}</p>
				<h2>Technologies Used</h2>
				<div className="skills">
					{state.tags.map((p, i) => (
						<Skill key={i} tag={p} />
					))}
				</div>
			</div>

			{state.images && (
				<div className="screenshot-section">
					<h1>Screenshots</h1>

					<div className="img-list">
						<Slider
							className="slider"
							autoplay
							infinite
							speed={500}
							autoplaySpeed={4000}
							// slidesToScroll={1}
							slidesToShow={2}
							prevArrow={<BasicArrow prev />}
							nextArrow={<BasicArrow />}>
							{state.images.map((img) => (
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
			}}>
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
		font-size: 20px;
		margin: 40px 0 20px;
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

		.project-title {
			text-align: center;
			font-size: 18px;
			/* width: 100%; */
			/* margin: 35px auto; */
			font-weight: 300;
			opacity: 0.7;
			letter-spacing: 0.4px;
			line-height: 30px;
		}
		.skills {
			width: 70%;
			margin: 20px auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
	.screenshot-section {
		position: relative;
		h1 {
			font-size: 35px;
			padding: 100px 10px 60px;
			opacity: 0.6;
		}

		.slider {
			/* overflow: hidden; */
			height: 550px;
			margin-bottom: 20px;
			img {
				margin: auto;
				height: 550px;
				/* width: 100%; */
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
`;

export default Project;
