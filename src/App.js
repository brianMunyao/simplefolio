import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';

import Skills from './sections/Skills';
import Projects from './sections/Projects';
import { skills } from './config/skills_data';
import Footer from './components/Footer';

const projects = [
	{
		name: 'Parky - Parking Management System',
		color: '#FFD036',
		tags: ['#reactnative', '#react', '#flask', '#jupyter', '#postgresql'],
		description:
			'Smart parking management system using deep learning for real-time parking availability, integrated with mpesa for payments, accessible via web and mobile platforms.',
		img: 'https://res.cloudinary.com/breivaco/image/upload/v1676284888/simplefolio/freedom_l4lfk0.png',
		to: '/simplefolio/projects/parky',
		features: [
			'Real-time updates to parking availability',
			'Mpesa integration for secure and fast mobile payments',
			'Automatic billing based on parking duration',
			'Mobile app and web platform for easy access to parking information',
			'Analytics and reporting for parking usage and revenue',
		],
		mobileImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1678350170/simplefolio/parky_rrm5so.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350166/simplefolio/parky_welcome_zmp718.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350168/simplefolio/User_View_dlhpow.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350165/simplefolio/Picture4_rvrzfe.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350164/simplefolio/parky_login_bbq0tj.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350165/simplefolio/parky_signup_tkchri.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350164/simplefolio/parky_home_tebxty.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350169/simplefolio/parky_addmoney_bk7dej.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350165/simplefolio/Picture31_vjz6bc.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350168/simplefolio/parky_parking1_fgu7d7.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350166/simplefolio/parkky_profile_ldtfgw.jpg',
		],
		webImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1678351874/simplefolio/parky_d_login_vvbswy.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678352779/simplefolio/new_3_d4uhwc.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678351874/simplefolio/parky_d_locations_iduuj3.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678352777/simplefolio/new_1_xftmjc.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678352782/simplefolio/new_2_evp82t.png',
		],
	},
	{
		name: 'Stadium Ticket Booking',
		color: '#ffd700',
		tags: ['#react', '#flask', '#sqlite'],
		description:
			'A web-based application allows users to easily browse upcoming events and securely purchase tickets online, ensuring a seamless and stress-free experience.',
		img: 'https://res.cloudinary.com/breivaco/image/upload/v1676284921/simplefolio/booking_wchfdk.png',
		to: '/simplefolio/projects/booking',
		webImages:[
			"https://res.cloudinary.com/breivaco/image/upload/v1679864215/simplefolio/booking_-_Asset_8_wkpzso.png",
			"https://res.cloudinary.com/breivaco/image/upload/v1679864192/simplefolio/booking_-_Asset_10_vhc6j0.png",
			"https://res.cloudinary.com/breivaco/image/upload/v1679864164/simplefolio/booking_-_Asset_9_wcbjco.png"
		]
	},
	{
		name: 'Freedom - Personal Finance Tracker',
		color: '#3F9569',
		tags: ['#reactnative', '#realm-db'],
		description:
			"A personal finance mobile app that offers expense tracking, budgeting, and financial decision-making tools to enhance users' financial health and well-being.",
		img: 'https://res.cloudinary.com/breivaco/image/upload/v1676284888/simplefolio/freedom_l4lfk0.png',

		link: 'https://com-bmksoftware-freedom.en.uptodown.com/',
		to: '/simplefolio/projects/freedom',
		features: [
			'Expense tracking to gain insights into spending habits',
			'Budgeting to set financial goals',
			'User-friendly interface',
			'Detailed expense reports',
		],
		mobileImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1678184517/simplefolio/group12_c0wlfu.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678184513/simplefolio/group7_giiypi.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678184513/simplefolio/group8_qcqpin.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678184511/simplefolio/group11_a7a0kd.png',
		],
	},
	{
		name: 'Project Manager',
		color: '#5c4bff',
		tags: ['#react', '#mongodb', '#expressjs'],
		description:
			'A project management platform like monday.com that streamlines workflows, improves collaboration, and provides customizable tools for tracking progress',
		img: 'https://res.cloudinary.com/breivaco/image/upload/v1676284901/simplefolio/pm_j0eiuz.png',
		to: '/simplefolio/projects/pm',
		webImages:{
			"https://res.cloudinary.com/breivaco/image/upload/v1679864145/simplefolio/pm_-_Asset_6_obyzcp.png",
			"https://res.cloudinary.com/breivaco/image/upload/v1679864142/simplefolio/pm_-_Asset_5_qpej4z.png",
			"https://res.cloudinary.com/breivaco/image/upload/v1679864140/simplefolio/pm_-_Asset_4_rkp8yj.png",
			"https://res.cloudinary.com/breivaco/image/upload/v1679864180/simplefolio/pm_-_Asset_7_qkwvzv.png"
		}
	},
	// {
	// 	name: 'Notera - Notes and ToDoList',
	// 	color: '#4834d4',
	// 	tags: ['#reactnative', '#realm-db'],
	// 	description:
	// 		'Notera is an intuitive and user-friendly productivity app that lets you take notes, create to-do lists, and effortlessly organize tasks all in one place.',
	// 	img: 'https://res.cloudinary.com/breivaco/image/upload/v1676284853/simplefolio/notera_bbndri.png',
	// },
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
				style={{ backgroundPositionY: `${scrollHeight}px` }}
			>
				<div className="topbar">
					<img
						src={
							'https://res.cloudinary.com/breivaco/image/upload/v1676284851/simplefolio/logo_white_e6vxsr.png'
						}
						alt="logo_white"
					/>

					<a
						className="sayhello"
						href="mailto:brianmunyao6@gmail.com"
					>
						Say Hello
					</a>
				</div>
				<div className="top-part-content">
					<div className="me">
						<img
							src={
								'https://res.cloudinary.com/breivaco/image/upload/v1676284855/simplefolio/me_yp3wi2.jpg'
							}
							alt="brian"
						/>
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

			<Footer />
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
				svg {
					transition: all 0.1s linear;
					margin: 0 10px;
					&:hover {
						transform: scale(1.2) rotate(-10deg);
					}
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
		width: 50%;
		margin: 35px auto;
		font-weight: 300;
		opacity: 0.7;
		letter-spacing: 0.4px;
		line-height: 30px;
	}

	@media (max-width: 600px) {
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
