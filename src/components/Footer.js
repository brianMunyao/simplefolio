import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Container>
			Crafted with ❤️ by{' '}
			<a href="https://github.com/brianMunyao">brianMunyao</a> ©️{' '}
			{new Date().getFullYear()}
		</Container>
	);
};
const Container = styled.footer`
	text-align: center;
	font-weight: 300;
	padding: 30px 0;

	a {
		color: #2a9d90;
	}
`;

export default Footer;
