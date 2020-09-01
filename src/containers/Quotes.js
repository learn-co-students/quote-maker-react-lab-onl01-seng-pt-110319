import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  handleUpvote = (event, quoteId) => {
    event.preventDefault()
    this.props.dispatch(upvoteQuote(quoteId));
  }

  handleDownvote = (event, quoteId) => {
    event.preventDefault()
    this.props.dispatch(downvoteQuote(quoteId));
  }

  handleRemoveQuote = (event, quoteId) => {
    event.preventDefault()
    this.props.dispatch(removeQuote(quoteId));
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            {this.props.quotes.map(quote => 
                <QuoteCard
                  key={quote.id}
                  quote={quote}
                  upvoteQuote={event => this.handleUpvote(event, quote.id)}
                  downvoteQuote={event => this.handleDownvote(event, quote.id)}
                  removeQuote={event => this.handleRemoveQuote(event, quote.id)}
                />
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    quotes: state.quotes
  }
}

export default connect(mapStateToProps)(Quotes);