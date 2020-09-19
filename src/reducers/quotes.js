
export default function quotes(state = [], action) {
  let idx
  let quote

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
      // return state.concat(action.quote)
    
    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return[...state.slice(0, idx), ...state.slice(idx + 1)]
      // return state.filter(quote => quoteId !== action.quoteId)

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx];

      return [
        ...state.slice(0, idx),
        Object.assign({}, quote, {votes: quote.votes += 1}),
        ...state.slice(idx + 1)
      ]

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx]

      if (quote.votes > 0) {
        return [
          ...state.slice(0, idx),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(idx + 1)
        ]
      }
      return state
      
    default: 
      return state
  }
}

// function authorReducer(state = [], action){
//   let idx
  
//   switch (action.type) {
//     case 'ADD-AUTHOR':
//       return [...state, action.author]

//     case 'REMOVE_AUTHOR':
//       idx = state.findIndex(author => author.id === action.id)
//       return [...state.slice(0, idx), ...state.slice(idx + 1)]

//     case 'ADD_QUOTE':
//       let existingAuthor = state.filter(
//         author => author.authorName === action.quote.authorName
//       )
//       if (existingAuthor.length > 0) {
//         return state
//       } 
//       else {
//         return [...state, { authorName: action.quote.authorName, id: uuid() }]
//       }
    

//     default:
//       return state
//   }
// }

      
