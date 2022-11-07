import { React } from 'react';
import './App.scss';
import Counter from './components/Counter';
import SimpleButtons from './components/SimpleButtons';
import RefreshID from './components/RefreshID';

const App = (context) =>

	<div className="App" role="application">
		<Counter { ...context }/>
		<SimpleButtons { ...context }/>
		<RefreshID { ...context }/>
	</div>;

export default App;
