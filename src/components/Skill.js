import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	IoLogoCss3,
	IoLogoDocker,
	IoLogoHtml5,
	IoLogoJavascript,
	IoLogoPython,
	IoLogoReact,
} from 'react-icons/io5';
import { DiJava, DiPostgresql } from 'react-icons/di';
import {
	SiExpress,
	SiFlask,
	SiJupyter,
	SiMongodb,
	SiPhp,
	SiRealm,
	SiSqlite,
	SiTypescript,
	SiVisualstudiocode,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { ImGit } from 'react-icons/im';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const skills = [
	{
		Logo: IoLogoHtml5,
		name: 'HTML',
		tag: '#html',
		backColor: '#f75421',
		textColor: '#f2f2f2',
	},
	{
		Logo: IoLogoCss3,
		name: 'CSS',
		tag: '#css',
		backColor: '#2194f0',
		textColor: '#f4f4f4',
	},
	{
		Logo: IoLogoJavascript,
		name: 'JavaScript',
		tag: '#javascript',
		backColor: '#F0DB4F',
		textColor: '#ffffff',
	},
	{
		Logo: IoLogoReact,
		name: 'React',
		tag: '#react',
		backColor: '#282c34',
		textColor: '#61DAFB',
	},
	{
		Logo: SiTypescript,
		name: 'TypeScript',
		tag: '#typescript',
		backColor: '#007ACC',
		textColor: '#FFF',
	},
	{
		Logo: TbBrandReactNative,
		name: 'React Native',
		tag: '#reactnative',
		backColor: '#282c34',
		textColor: '#61DAFB',
	},
	{
		Logo: IoLogoPython,
		name: 'Python',
		tag: '#python',
		backColor: '#ffde57',
		textColor: '#3e7aab',
	},
	{
		Logo: SiPhp,
		name: 'PHP',
		tag: '#php',
		backColor: '#7377ad',
		textColor: '#e4e5ea',
	},
	{
		Logo: AiOutlineConsoleSql,
		name: 'SQL',
		tag: '#sql',
		backColor: '#0091df',
		textColor: '#cae1f1',
	},
	{
		Logo: DiPostgresql,
		name: 'PostgreSQL',
		tag: '#postgresql',
		backColor: '#31648c',
		textColor: '#fff',
	},
	{
		Logo: SiMongodb,
		name: 'Mongo DB',
		tag: '#mongodb',
		backColor: '#023430',
		textColor: '#00ed64',
	},
	{
		Logo: DiJava,
		name: 'Java',
		tag: '#java',
		backColor: '#f09112',
		textColor: '#507e9c',
	},
	{
		Logo: SiFlask,
		name: 'Flask',
		tag: '#flask',
		backColor: '#282828',
		textColor: '#f7f7f7',
	},
	{
		Logo: SiExpress,
		name: 'Express.js',
		tag: '#expressjs',
		backColor: '#333333',
		textColor: '#f6f6f6',
	},
	{
		Logo: ImGit,
		name: 'Git',
		tag: '#git',
		backColor: '#e84d31',
		textColor: '#3b2c00',
	},
	{
		Logo: SiVisualstudiocode,
		name: 'VS Code',
		tag: '#vscode',
		backColor: '#1e97e8',
		textColor: '#f6f6f6',
	},
	{
		Logo: SiJupyter,
		name: 'Jupyter Notebooks',
		tag: '#jupyter',
		backColor: '#eb7325',
		textColor: '#616262',
	},
	{
		Logo: IoLogoDocker,
		name: 'Docker',
		tag: '#docker',
		backColor: '#218bea',
		textColor: '#ffffff',
	},
	{
		Logo: SiSqlite,
		name: 'SQLite',
		tag: '#sqlite',
		backColor: '#044a5d',
		textColor: '#8ecbff',
	},
	{
		Logo: SiRealm,
		name: 'Realm DB',
		tag: '#realm-db',
		backColor: '#7056bc',
		textColor: '#e9e9e9',
	},
];

const Skill = ({ tag, brief = false }) => {
	const [skill, setSkill] = useState({
		Logo: IoLogoHtml5,
		name: 'HTML',
		tag: '#html',
		backColor: '#f75421',
		textColor: '#f2f2f2',
	});

	useEffect(() => {
		const item = skills.filter((s) => s.tag === tag);
		setSkill(item[0]);
	}, [tag]);

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
	margin: ${({ brief }) => (brief ? '10px 10px 10px 0' : '15px 10px')};
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
