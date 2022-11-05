import { React } from 'react';
import './App.scss';
import SimpleButton from './components/simpleButton';

const App = (context) => {
	const { state: { count, refreshID, counterBgColor }} = context;

	return <div className="App" role="application">
		<div>Count Value</div>
		<div className="counter-position">
			<h1 style={ { backgroundColor: counterBgColor } }>
				{count} </h1>
		</div>
		<SimpleButton { ...context }/>
		<div>Refresh ID: {refreshID}</div>
	</div>;
}
	;

export default App;
