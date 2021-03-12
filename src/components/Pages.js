import React from 'react';

const Pages = props => {

    return(
        <div className="py-3 navBtns">
            <a onClick={props.previousPage} type="button" className="mr-1 blue btn1">&lt; Previous</a>
            <a onClick={props.followingPage}type="button" className="btn2 blue">Next &gt;</a>
        </div>
    )
}

export default Pages;