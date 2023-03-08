import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Skill from '../components/Skill';
import download from '../assets/Uptodown.png';

const Projects = ({ projects }) => {
	return (
		<Container>
			<p className="title p-title">Projects</p>
			<p className="subtitle">
				Here you will find some of my notable personal projects that I
				created over the years
			</p>

			<div className="projects">
				{projects.map((p, i) => (
					<Link to={p.to} state={p}>
						<div className="new-project" key={i}>
							<p className="project-name">{p.name}</p>

							<p className="project-desc">{p.description}</p>

							{/* <a href={p.link}> */}
							{p.link && (
								<img
									className="img"
									src={download}
									alt="download"
								/>
							)}
							{/* </a> */}

							<div className="project-tags">
								{p.tags.map((tag, i) => (
									<Skill key={i} tag={tag} brief={true} />
								))}
							</div>
						</div>
					</Link>
				))}
			</div>
		</Container>
	);
};

const Container = styled.div`
	border-top: 2px solid #f6f6f6;
	padding: 0 0 20px;
	.p-title {
		padding: 70px 0 10px;
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-auto-rows: auto;
		column-gap: 40px;
		row-gap: 60px;
		padding: 10px 150px;

		.new-project {
			cursor: pointer;
			/* background: #f3fbfa; */
			width: 100%;
			box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
			height: 100%;
			/* height: fit-content; */
			border-radius: 10px;
			border: 1.5px solid #ebebeb;
			padding: 20px;
			transition: all 0.2s linear;

			&:hover {
				box-shadow: rgba(0, 0, 0, 0.13) 0px 2px 8px;
			}

			.project-name {
				color: #113834;
				font-weight: 700;
				font-size: 18px;
				letter-spacing: 0.3px;
			}
			.project-desc {
				font-weight: 300;
				opacity: 0.75;
				letter-spacing: 0.4px;
				line-height: 24px;
				margin: 12px 0 30px;
			}
			.project-tags {
				display: flex;
				flex-wrap: wrap;
				justify-content: left;
			}
			.img {
				margin-bottom: 15px;
				height: 40px;
			}
		}
	}

	@media (max-width: 650px) {
		.projects {
			grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
			/* grid-auto-rows: 290px; */
			row-gap: 40px;
			padding: 10px 30px;
		}
	}
`;

export default Projects;
