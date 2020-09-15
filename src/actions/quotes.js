// TODO: Create action creators as defined in tests
const addQuote=(quote)=>{
    return {
        type: "ADD_QUOTE",
        quote
    }
}

const removeQuote=(id)=>{
    return {
        type: "REMOVE_QUOTE",
        quoteId: id
    }
}
const upvoteQuote=(id)=>{
    return {
        type: "UPVOTE_QUOTE",
        quoteId: id
    }
}
const downvoteQuote=(id)=>{
    return {
        type: "DOWNVOTE_QUOTE",
        quoteId: id
    }
}

//   removeQuote,
//   upvoteQuote,
//   downvoteQuote

export {addQuote, removeQuote, upvoteQuote, downvoteQuote}