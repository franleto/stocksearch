import React, { Component } from 'react';

class Search extends Component {
    searchRef = React.createRef();
    handleWord = (e) => {
        e.preventDefault();

        // Get input value
        const term = this.searchRef.current.value;

        // Send value to main component
        this.props.searchTerms(term);

        //hides footer nav
        var x = document.getElementById("footer");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

    }


    render() { 
        return (  
            <div className="search">
                <div className="legendBox">
                    <div className="legendText blue">Stunning free images & royalty-free stock</div>

                </div>

                <form onSubmit={this.handleWord}>
                    <div className="row inner-form">
                        <div className="input-field form-group col-md-12">
                            <button className="btn-search" type="submit" id="srchBtn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                </svg>
                            </button>
                            <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Search over 1.9 million+ high quality stock images..."/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Search;