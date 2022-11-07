import React from 'react';
import validateIncrementButton from '../services/buttonValidation';

const SimpleButtons = ({
	actions: { increaseCount, decreaseCount },
	config: { increment, decrement, color },
	state: { count },
}) => <div>
	<button
		onClick={ () => increaseCount(increment) }
		disabled={ validateIncrementButton(count, color) }
	>
		Increment!
	</button>
	<button
		onClick={ () => decreaseCount(decrement) }
		disabled={ !count }
	>
		Decrement!
	</button>
</div>;

export default SimpleButtons;
