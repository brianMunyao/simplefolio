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

// const Skill = styled.div`
// 	background: #eaeaea;
// 	color: #474747;
// 	margin: 15px 10px;
// 	padding: 10px;
// 	border-radius: 10px;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	transition: all 0.15s linear;
// 	user-select: none;

// 	svg {
// 		margin-right: 6px;
// 		font-size: 18px;
// 	}

// 	&:hover {
// 		background: ${({ backColor }) => backColor};
// 		color: ${({ textColor }) => textColor};
// 	}
// `;

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
