import { React } from 'react';

const SimpleButton = ({
	actions: { increaseCount, decreaseCount },
	config: { increment, decrement, color },
	state: { count },
}) => <div>
	<button
		onClick={ () => increaseCount(increment) }
		disabled={ (count === (color.length - 1)) }
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

export default SimpleButton;
