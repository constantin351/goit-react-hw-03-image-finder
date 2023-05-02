import React, { Component } from "react";
import PropTypes from "prop-types";

import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";

class Searchbar extends Component { 
    static propTypes = {
        onFormSubmit: PropTypes.func.isRequired,
    };

    state = {
        searchQuery: '',
    }

    handleInputChange = (event) => { 
        const searchValue = event.currentTarget.value.toLowerCase();
        this.setState({ searchQuery: searchValue });
    }

    handleFormSubmit = (event) => { 
        event.preventDefault();

        const { searchQuery } = this.state;
        const { onFormSubmit } = this.props;

        if (searchQuery.trim() === "") { 
            toast.warn("Enter your search query!");
            return;
        }

        onFormSubmit(searchQuery);
        this.reset();
    }

    reset = () => { 
        this.setState({searchQuery: ''})
    }

    render() {
        return (
            <header className="Searchbar">
                <form onSubmit={this.handleFormSubmit} className="SearchForm">
                <button type="submit" className="SearchForm-button">
                    {/* <span className="SearchForm-button-label">Search</span> */}
                    <FiSearch size={26} />
                </button>

                <input
                    onChange={this.handleInputChange}
                    value={this.state.searchQuery}
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                </form>
            </header>
        )
    }
}

export default Searchbar;