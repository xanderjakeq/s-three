import * as actions from '../actions';

const initialState = {
	uppedIds: [],
	downedIds: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actions.LIKING:
			return{
				...state
			}
		default:
			return state;
	}
};