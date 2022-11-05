
const increaseCount = ({
	state,
	data,
	config: { color },
}) => ({
	count: state.count + data,
	counterBgColor: color[state.count + data],
});

const decreaseCount = ({
	state,
	data,
	config: { color },
}) => ({
	count: state.count - data,
	counterBgColor: color[state.count - data],
});

const actions = {
	increaseCount,
	decreaseCount,
};

export default actions;
