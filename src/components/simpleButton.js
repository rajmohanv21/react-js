import { React } from 'react';

const SimpleButton = ({
	actions: { increaseCount, decreaseCount },
	config: { increment, decrement },
}) =>
	<div>
		<button
			onClick={ () => increaseCount(increment) }
		>
			Increment!
		</button>
		<button
			onClick={ () => decreaseCount(decrement) }
		>
			Decrement!
		</button>
	</div>
	;

export default SimpleButton;
