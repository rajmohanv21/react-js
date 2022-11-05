import { React } from 'react';
import './App.scss';
import Counter from './components/Counter';
import SimpleButton from './components/simpleButton';
import RefreshID from './components/RefreshID';

const App = (context) =>

	<div className="App" role="application">
		<Counter { ...context }/>
		<SimpleButton { ...context }/>
		<RefreshID { ...context }/>
	</div>;

export default App;
