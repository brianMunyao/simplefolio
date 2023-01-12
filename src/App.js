import styled from 'styled-components';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';

import background from './assets/background.jpg';
import me from './assets/me.jpg';

function App() {
	return (
		<Container>
			<div className="top-part">
				<div className="top-part-content">
					<div className="me">
						<img src={me} alt="brian" />
					</div>

					<h1>Brian Kalusi</h1>

					<p className="role">Software Engineer</p>

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
		</Container>
	);
}

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
		background-image: url(${background});
		background-size: cover;
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;

		.top-part-content {
			z-index: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

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

			h1 {
				margin: 20px 0;
			}
			.role {
				font-weight: 300;
				letter-spacing: 0.8px;
			}
			.links {
				font-size: 27px;
				* {
					margin: 25px 3px 0;
				}
			}
		}
	}
`;

export default App;
