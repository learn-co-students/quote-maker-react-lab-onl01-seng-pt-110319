
export default (state = [], action) => {

	switch (action.type) {
		case 'ADD_QUOTE':
		return [
			...state, action.quote
		]

		case 'REMOVE_QUOTE':
		const index = state.findIndex(quote => quote.id === action.quoteId)
		return [
			...state.slice(0, index), ...state.slice(index + 1)
		]

		case 'UPVOTE_QUOTE':
		const idx = state.findIndex(quote => quote.id === action.quoteId)
		state[idx].votes = state[idx].votes + 1
		return [
			...state
		]

		case 'DOWNVOTE_QUOTE':
		const ix = state.findIndex(quote => quote.id === action.quoteId)
		if (state[ix].votes > 0) {	
			state[ix].votes = state[ix].votes - 1
		}
		else {
			state[ix]
		}
		return [
			...state
		]
		
		default:
   		return state;
   	}
}


