import React, { Component } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import SearchResult from './components/SearchResult';
import NothingFound from './components/NothingFound';
import Footer from './components/Footer';
import { sites, categories } from './sampleData';
import './App.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.searchText = this.searchText.bind(this);

    this.state = {
      sites,
      categories,
      // Create array of keyword strings for each site to search against by
      // combining the site name and all categories
      keyWords: sites.map(
        site => site.siteName + ' ' + site.categoryIds.map(
          id => categories.filter(category => category.id === id)
            .map(category => category.description))
            .join(' '),
        ),
      searchTerms: [],
      matchedSites: [],
    };
  }

  searchText(searchString) {
    const matchedSites = [];
    // Convert searchString into array of search terms
    // with whitespace trimmed and empty strings ignored
    const searchTerms = searchString.split(',')
      .filter(value => value.trim() !== '', [])
      .map(value => value.trim());
    // Search keywords array for each search term
    for (let i = 0; i < this.state.keyWords.length; i++) {
      let allKeyWordsMatched = true;
      searchTerms.map((searchTerm) => {
        if (!this.state.keyWords[i].toLowerCase().match(searchTerm.toLowerCase())) {
          allKeyWordsMatched = false;
        }
        return false;
      });
      if (allKeyWordsMatched) matchedSites.push(i);
    }
    this.setState({
      matchedSites,
      searchTerms,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox searchText={this.searchText} />
        {this.state.searchTerms.length === 0
          ? null
          : this.state.matchedSites.length === 0
            ? (<NothingFound />)
            : this.state.matchedSites.map(index => (
              <SearchResult
                siteUrl={this.state.sites[index].siteUrl}
                description={this.state.sites[index].description}
                key={index}
              />
            ))
        }
        <Footer />
      </div>
    );
  }
}

export default App;
