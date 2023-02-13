import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	IoLogoCss3,
	IoLogoDocker,
	IoLogoGithub,
	IoLogoHtml5,
	IoLogoJavascript,
	IoLogoLinkedin,
	IoLogoPython,
	IoLogoReact,
	IoLogoTwitter,
} from 'react-icons/io5';
import { DiJava, DiPostgresql } from 'react-icons/di';
import {
	SiExpress,
	SiFlask,
	SiJupyter,
	SiMongodb,
	SiPhp,
	SiTypescript,
	SiVisualstudiocode,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { ImGit } from 'react-icons/im';
import { AiOutlineConsoleSql } from 'react-icons/ai';

// import background from './assets/background.jpg';
// import logo_white from './assets/logo_white.png';
// import me from './assets/me.jpg';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

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
];

const projects = [
	{
		name: 'Freedom - Personal Finance Tracker',
		color: '#3F9569',
		tags: ['#react-native', '#realm-db'],
		img: 'https://res.cloudinary.com/breivaco/image/upload/v1676284888/simplefolio/freedom_l4lfk0.png',
	},
	{
		name: 'Stadium Ticket Booking',
		color: '#ffd700',
		tags: ['#react', '#flask', '#sqlite'],
		img: 'https://res.cloudinary.com/breivaco/image/upload/v1676284921/simplefolio/booking_wchfdk.png',
	},
	{
		name: 'Project Manager',
		color: '#5c4bff',
		tags: ['#react', '#mongodb', '#expressjs'],
		img: 'https://res.cloudinary.com/breivaco/image/upload/v1676284901/simplefolio/pm_j0eiuz.png',
	},
	{
		name: 'Notera - Notes and ToDoList',
		color: '#4834d4',
		tags: ['#react-native', '#realm-db'],
		img: 'https://res.cloudinary.com/breivaco/image/upload/v1676284853/simplefolio/notera_bbndri.png',
	},

];

const App = () => {
	const [scrollHeight, setScrollHeight] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = () => {
		const scrollTop = window.pageYOffset;
		setScrollHeight(-scrollTop * 0.5);
	};

	return (
		<Container>
			<div
				className="top-part"
				style={{ backgroundPositionY: `${scrollHeight}px` }}>
				<div className="topbar">
					<img src={'https://res.cloudinary.com/breivaco/image/upload/v1676284851/simplefolio/logo_white_e6vxsr.png'} alt="logo_white" />

					<a
						className="sayhello"
						href="mailto:brianmunyao6@gmail.com">
						Say Hello
					</a>
				</div>
				<div className="top-part-content">
					<div className="me">
						<img src={'https://res.cloudinary.com/breivaco/image/upload/v1676284855/simplefolio/me_yp3wi2.jpg'} alt="brian" />
					</div>

					<p className="name">Brian Kalusi</p>

					<p className="role">
						Software Engineer | Full Stack | Mobile App Dev
					</p>

					<div className="links">
						<a href="https://twitter.com/briankm06">
							<IoLogoTwitter />
						</a>
						<a href="https://github.com/brianMunyao">
							<IoLogoGithub />
						</a>
						<a href="https://www.linkedin.com/in/brian-kalusi-50b956197">
							<IoLogoLinkedin />
						</a>
					</div>
				</div>
			</div>

			<Skills skills={skills} />

			<Projects projects={projects} />
		</Container>
	);
};

const Container = styled.div`
	.top-part::after {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		content: '';
		background: #2a9d90f4;
	}
	.top-part {
		position: relative;
		background-image: url('https://res.cloudinary.com/breivaco/image/upload/v1676284866/simplefolio/background_qqapd8.jpg');
		background-size: cover;
		background-attachment: fixed;
		width: 100%;
		height: 100vh;
		min-height: 600px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;

		.topbar {
			height: 100px;
			position: absolute;
			z-index: 1;
			top: 0;
			width: 100%;
			padding: 0 30px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			img {
				height: 40%;
			}
			.sayhello {
				border: 2px solid #fff;
				padding: 15px 30px;
				border-radius: 30px;
				cursor: pointer;
				transition: all 0.2s linear;

				&:hover {
					background: #fff;
					color: #2a9d90;
				}
			}
		}

		.top-part-content {
			z-index: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-top: 50px;

			.me {
				user-select: none;
				width: 190px;
				height: 190px;
				border: solid 8px #2dab9df4;
				border-radius: 100px;
				overflow: hidden;
				img {
					pointer-events: none;
					width: 100%;
				}
			}

			.name {
				font-size: 38px;
				font-weight: 600;
				margin: 18px auto;
			}

			.role {
				font-weight: 300;
				letter-spacing: 0.8px;
				font-size: 18px;
				margin: 3px 0;
			}
			.links {
				font-size: 28px;
				margin: 28px 0 0;
				* {
					margin: 0 5px;
				}
			}
		}
	}
	.title {
		font-size: 40px;
		font-weight: 600;
		letter-spacing: 0.4px;
		text-align: center;
	}
	.subtitle {
		text-align: center;
		font-size: 18px;
		font-weight: 300;
		width: 50%;
		margin: 35px auto;
		opacity: 0.7;
		letter-spacing: 0.4px;
		line-height: 30px;
	}

	@media (max-width: 470px) {
		.top-part {
			.topbar {
				img {
					height: 35%;
				}
				.sayhello {
					padding: 10px 25px;
				}
			}

			.top-part-content {
				.me {
					width: 150px;
					height: 150px;
				}

				.name {
					font-size: 33px;
				}

				.role {
					letter-spacing: 0.5px;
					font-size: 16px;
					text-align: center;
				}
			}
		}
		.title {
			font-size: 35px;
		}
		.subtitle {
			width: 80%;
		}
	}
`;

export default App;
