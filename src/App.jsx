import './App.css';

function App() {
	return (
		<div className="app">
			<section className='side-bar'>
				<button className='newChat'>+ New chat</button>
				<ul className='history'></ul>
				<nav>
					<p>Made by Ania</p>
				</nav>
			</section>
			<section className='main'>
				<h1>AniaGPT</h1>
				<ul className='feed'>

				</ul>
				<div className='bottom-section'>
					<div className='input-container'>
						<input />
						<div className='submit'>→</div>
					</div>
					<p className='info'>
						This is a clone of OpenAIs chatGPT (<a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">online here</a>).<br />
						The code is also taken from Code with Ania Kubów (<a href="https://www.youtube.com/watch?app=desktop&v=JJ9fkYX7q4A" target="_blank" rel="noopener noreferrer">online here</a>).<br />
						It has been developed to help me understand the OpenAI API.
					</p>
				</div>
			</section>
		</div>
	);
}

export default App;
