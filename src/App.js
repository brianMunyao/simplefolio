import styled from 'styled-components';

function App() {
	return (
		<Container>
			<div className="top-part">
				<h1>Hello , I'm Brian</h1>
			</div>
		</Container>
	);
}

const Container = styled.div`
	.top-part {
		background: #2a9d8f;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export default App;
