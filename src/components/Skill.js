import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { skills } from '../config/skills_data';

const Skill = ({ tag, brief = false }) => {
	const [skill, setSkill] = useState(null);

	useEffect(() => {
		const item = skills.filter((s) => s.tag === tag);
		setSkill(item[0]);
	}, [tag]);

	if (!skill) return;

	return brief ? (
		<Container
			brief={brief}
			className="skill"
			textColor={skill.textColor}
			backColor={skill.backColor}>
			{skill.tag}
		</Container>
	) : (
		<Container
			brief={brief}
			className="skill"
			textColor={skill.textColor}
			backColor={skill.backColor}>
			<skill.Logo />
			{skill.name}
		</Container>
	);
};

const Container = styled.div`
	background: ${({ backColor, brief }) => (brief ? backColor : '#eaeaea')};
	color: ${({ textColor, brief }) => (brief ? textColor : '#474747')};
	margin: ${({ brief }) => (brief ? '0 15px 15px 0' : '15px 10px')};
	padding: ${({ brief }) => (brief ? '8px 10px' : '12px 10px')};
	border-radius: 10px;
	font-size: ${({ brief }) => (brief ? '14px' : '16px')};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.15s linear;
	user-select: none;

	svg {
		margin-right: 6px;
		font-size: 18px;
	}

	&:hover {
		background: ${({ backColor }) => backColor};
		color: ${({ textColor }) => textColor};
	}
`;

export default Skill;
