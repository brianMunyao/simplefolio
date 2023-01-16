import React from 'react';
import styled from 'styled-components';

const Skills = ({ skills }) => {
	return (
		<Container>
			<p className="title">Skills and Tools</p>

			<p className="subtitle">
				Here are some of the most notable programming languages,
				frameworks, and tools that I have used in my projects
			</p>

			<div className="skills">
				{skills.map((p, i) => (
					<Skill
						key={i}
						className="skill"
						textColor={p.textColor}
						backColor={p.backColor}>
						<p.Logo />
						{p.name}
					</Skill>
				))}
			</div>
		</Container>
	);
};

const Skill = styled.div`
	background: #eaeaea;
	color: #474747;
	margin: 15px 10px;
	padding: 10px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.15s linear;
	svg {
		margin-right: 6px;
		font-size: 18px;
	}

	&:hover {
		background: ${({ backColor }) => backColor};
		color: ${({ textColor }) => textColor};
	}
`;

const Container = styled.div`
	margin: 20px 0 70px;
	.skills {
		width: 70%;
		margin: 15px auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		/* white-space: normal;
			overflow-wrap: break-word; */
		/* word-wrap: normal; */
		/* display: grid;
			grid-template-columns: repeat(auto-fill, 100px); */
	}
`;

export default Skills;
