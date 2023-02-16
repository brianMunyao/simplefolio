import React from 'react';
import styled from 'styled-components';
import Skill from '../components/Skill';

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
					<div className="new-project" key={i}>
						<p className="project-name">{p.name}</p>

						<p className="project-desc">{p.description}</p>

						<div className="project-tags">
							{p.tags.map((tag, i) => (
								<Skill key={i} tag={tag} brief={true} />
							))}
						</div>
					</div>
				))}
			</div>
			{/* <div className="projects">
				{projects.map((p, i) => (
					<div
						className="project"
						style={{ background: p.color }}
						key={i}>
						<img src={p.img} alt={p.name} />

						<div className="project-detail">{p.name}</div>
					</div>
				))}
			</div> */}
		</Container>
	);
};

const Container = styled.div`
	/* min-height: 100vh; */
	background: #f2fbfa;
	padding: 0 0 70px;
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
		/* transition: all 0.2s linear; */

		.new-project {
			background: #f3fbfa;
			width: 100%;
			box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
			height: fit-content;
			border-radius: 17px;
			border: 2px solid #ccefeb;
			padding: 20px;
			transition: all 0.2s linear;

			&:hover {
				box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
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
		}

		.project {
			position: relative;
			background: #f5f5f5;
			width: 350px;
			height: 100%;
			border-radius: 10px;
			overflow: hidden;
			margin: auto;
			box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
			border-radius: 10px;
			transition: all 0.2s linear;
			cursor: pointer;

			img {
				width: 100%;
				height: 100%;
			}
			.project-detail {
				transition: all 0.2s linear;
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 0;
				overflow: none;
				padding: 0 10px;
				background: linear-gradient(
					#ffffff16,
					#ffffff8c,
					#ffffffb9,
					#ffffff,
					#ffffff
				);
			}

			&:hover {
				transform: scale(1.05);
				box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

				.project-detail {
					height: auto;
					padding: 10px;
				}
			}
		}
	}

	@media (max-width: 470px) {
		.projects {
			grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
			/* grid-auto-rows: 290px; */
			row-gap: 40px;
			padding: 10px;

			.project {
				width: 290px;
			}
		}
	}
`;

export default Projects;
