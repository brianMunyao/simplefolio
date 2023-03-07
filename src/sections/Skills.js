import React from 'react';
import styled from 'styled-components';
import Skill from '../components/Skill';

const Skills = ({ skills }) => {
	return (
		<Container>
			<p className="title s-title">Skills and Tools</p>

			<p className="subtitle">
				Here are some of the most notable programming languages,
				frameworks, and tools that I have used in my projects
			</p>

			<div className="skills">
				{skills.map((p, i) => (
					<Skill key={i} tag={p.tag} />
				))}
			</div>
		</Container>
	);
};

const Container = styled.div`
	margin: 20px 0 70px;

	.s-title {
		padding: 70px 0 10px;
	}
	.skills {
		width: 70%;
		margin: 15px auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		@media (max-width: 470px) {
			width: 80%;
		}
	}
`;

export default Skills;
