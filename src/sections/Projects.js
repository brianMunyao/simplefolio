import React from 'react';
import styled from 'styled-components';

const Projects = ({ projects }) => {
	return (
		<Container>
			<p className="title">Projects</p>

			<div className="projects">
				{projects.map((p, i) => (
					<div className="project">
						<img src={p.img} alt={p.name} />

						<div className="project-detail">
							<p>{p.name}</p>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
};

const Container = styled.div`
	/* min-height: 100vh; */

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 30px;
		padding: 10px 50px;
		.project {
			background: #f5f5f5;
			width: 320px;
			border-radius: 10px;
			overflow: hidden;
			margin: auto;
			box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
			border-radius: 10px;
			transition: all 0.2s linear;
			cursor: pointer;

			img {
				width: 100%;
			}
			.project-detail {
				padding: 10px;
				min-height: 200px;
			}

			&:hover {
				transform: scale(1.01);
				box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
			}
		}
	}
`;

export default Projects;
