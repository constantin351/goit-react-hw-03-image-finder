import React, { Component } from "react";

class Searchbar extends Component { 
    state = {
        searchQuery: '',
    }

    handleInputChange = (event) => { 
        const searchValue = event.currentTarget.value;
        this.setState({ searchQuery: searchValue });
    }

    handleFormSubmit = (event) => { 
        event.preventDefault();
        this.props.onSubmit(this.state.searchQuery);
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
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        onChange={this.handleInputChange}
                        className="SearchForm-input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

// function Searchbar() { 
    // return (
    //     <header className="Searchbar">
    //         <form className="SearchForm">
    //             <button type="submit" className="SearchForm-button">
    //                 <span className="SearchForm-button-label">Search</span>
    //             </button>

    //             <input
    //                 className="SearchForm-input"
    //                 type="text"
    //                 autocomplete="off"
    //                 autofocus
    //                 placeholder="Search images and photos"
    //             />
    //         </form>
    //     </header>
    // )
// }

export default Searchbar;