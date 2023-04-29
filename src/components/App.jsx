import React, { Component } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

import api from '../api/api';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    //
    searchQ: '',
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const result = await api.fetchImagesWithQuery(this.state.searchQ, 1);
      const imagesArr = result.data.hits;
      console.log(imagesArr);
      this.setState({ images: imagesArr });
    } catch (error) {
      this.setState({ error });
      console.log('error', error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQ !== prevState.searchQ) {
      try {
        const result = await api.fetchImagesWithQuery(this.state.searchQ, 1);
        const imagesArr = result.data.hits;
        console.log(imagesArr);
        this.setState({ images: imagesArr });
      } catch (error) {
        this.setState({ error });
        console.log('error', error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onSubmitSearchFormHandler = searchWord => {
    console.log(searchWord);
    const { searchQ } = this.state;
    // this.setState({ searchQ: searchWord });

    this.setState(({ searchQ }) => ({
      searchQ: searchWord,
    }));
  };

  render() {
    const { images } = this.state;
    console.log(images);

    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmitSearchFormHandler} />
        <ImageGallery images={images} />
        {/* <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal /> */}
      </div>
    );
  }
}

export default App;
