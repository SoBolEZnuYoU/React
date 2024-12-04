import logo from './logo.svg'
import './App.css'

/* Как по мне, весь этот код является императивным, так как в любом случае идет описание того, что должна возвращать функция.
Такой-то блок с определенным классом, внутри блока такие-то элементы, с указанием класса у каждого, и местами такой-то текст.
В таком случае под декларативный подход подойдёт разве что метод getFullYear(). Но опять же, если сравнивать с созданием такой же конструкции
на чистом JavaScript, тогда весь этот код можно назвать декларативным*/

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>
					{(new Date().getFullYear())}
				</p>
			</header>
		</div>
	)
}

export default App
