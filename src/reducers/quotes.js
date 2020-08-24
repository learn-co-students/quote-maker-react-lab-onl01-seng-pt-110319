import { upvoteQuote } from "../actions/quotes";

export default (state = [], action) => {
  let index; 
  let quote; 
  switch(action.type) {
    
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return [
        // ...state, 
         ...state.filter((item) => item.id !== action.quoteId) //info.id !== quoteID
      ]
      case 'UPVOTE_QUOTE':
       // we've defined quote and index
       // set index = and findIndex of quote id and make sure its equal to action.quote id
       // set quote to state[index] figure out why 
       // return, bring up copy of state use the slice on the first element, and index var
       // use Object.assign( {}, assign the quote object grab the votes key and make sure it goes up by 1)
       // grab the copy of the state key word copy, use slice and add 1 to the index
      index = state.findIndex(ind => ind.id === action.quoteId)
      quote = state[index]

      return [
        ...state.slice(0, index), 
        Object.assign( {}, quote, {votes: quote.votes + 1}), 
        ...state.slice(index + 1)
      ]
      //    9) should handle DOWNVOTE_QUOTE and decrement vote
      //  count down 1 if vote count is positive
      case 'DOWNVOTE_QUOTE':

      // let obj = state.filter((item) => item.votes > 0)
      // let noVotes = state.filter((item) => item.votes === 0)
     // overkill ^^
        index = state.findIndex(ind => ind.id === action.quoteId)
        quote = state[index]

      if (quote.votes > 0) {
        return [
          ...state.slice(0, index), 
          Object.assign( {}, quote, {votes: quote.votes - 1}), 
          ...state.slice(index + 1)
        ]
      } 
      
    default:
    return state;
  }

}



// THIS IS JUST STATE 
// [
//   {
//     id: '88949bf6-7caa-4997-962e-d3bf7b7c7ee8',
//     content: 'Moral indignation is jealousy with a halo.',
//     author: 'H.G. Wells',
//     votes: 0
//   }
// ]

//THIS IS ...STATE 
// {
//   id: '8c75d03d-a5e6-48f5-9a58-da47a1d4e70f',
//   content: 'Moral indignation is jealousy with a halo.',
//   author: 'H.G. Wells',
//   votes: 0
// }