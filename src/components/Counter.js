import React from 'react';

const Counter = ({ state: { count, counterBgColor }}) => <div>
	<div>Count Value</div>
	<div className="counter-position">
		<h1 style={ { backgroundColor: counterBgColor } }>
			{count} </h1>
	</div>
</div>;

export default Counter;
