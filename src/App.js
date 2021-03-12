import React, { Component } from 'react';
import Search from "./components/Search";
import Result from "./components/Result";


class App extends Component {

  state = {
    term : '',
    images : [],
    page : ''
  }

  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start')
  }

  previousPage = () => {
    // read current page state
    let page = this.state.page;

    // check if we're standing on page 1
    if(page === 1) return null;

    // subtract 1 to current page state
    page -= 1;

    //set page state change
    this.setState({
      page
    }, () => {
      this.getApi();
      this.scroll();
    });

  }

  followingPage = () => {
    // read current page state
    let page = this.state.page;

    // add 1 to current page state
    page += 1;

    //set page state change
    this.setState({
      page
    }, () => {
      this.getApi();
      this.scroll();
    });

  }

  getApi = () => {
    const term = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=[YOUR_API_KEY]&q=${term}&per_page=30&page=${page}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({images : result.hits}))
  }

  searchTerms = (term) => {
    this.setState({
      term : term,
      page : 1
    }, () => {
      this.getApi();
    })
  }

  render(){
    return (
      <div className="container app">
        <div className="jumbotron">
          <Search searchTerms={this.searchTerms}/>
        </div>
        <div className="row justify-content-center">
          <Result 
            images={this.state.images}
            previousPage={this.previousPage}
            followingPage={this.followingPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
