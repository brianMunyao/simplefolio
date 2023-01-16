import React from 'react';
import styled from 'styled-components';

const Projects = ({ projects }) => {
	return (
		<Container>
			<p className="title p-title">Projects</p>

			<div className="projects">
				{projects.map((p, i) => (
					<div
						className="project"
						style={{ background: p.color }}
						key={i}>
						<img src={p.img} alt={p.name} />

						<div className="project-detail">{p.name}</div>
					</div>
				))}
			</div>
		</Container>
	);
};

const Container = styled.div`
	/* min-height: 100vh; */
	background: #f2fbfa;
	padding: 0 0 70px;
	.p-title {
		padding: 60px 0 40px;
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		grid-auto-rows: 350px;
		column-gap: 30px;
		row-gap: 80px;
		padding: 10px 50px;
		/* transition: all 0.2s linear; */

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
			grid-auto-rows: 290px;
			row-gap: 40px;
			padding: 10px;

			.project {
				width: 290px;
			}
		}
	}
`;

export default Projects;
