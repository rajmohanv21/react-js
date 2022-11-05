
const increaseCount = ({
	state,
	data,
	config: { color: { incrementBgColor }},
}) => ({
	count: state.count + data,
	counterBgColor: incrementBgColor,
});

const decreaseCount = ({
	state,
	data,
	config: { color: { decrementBgColor }},
}) => ({
	count: state.count - data,
	counterBgColor: decrementBgColor,
});

const actions = {
	increaseCount,
	decreaseCount,
};

export default actions;
