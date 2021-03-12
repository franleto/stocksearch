import React, { Component } from 'react';
import Image from "./Image"
import Pages from "./Pages";

class Result extends Component {

    showImages = () => {
        const images = this.props.images;

        if(images.length === 0) return null;

        console.log(images);

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {images.map(image =>(
                        <Image 
                            key={image.id}
                            image={image}
                        />
                    ))}
                </div>
                <Pages
                    previousPage={this.props.previousPage}
                    followingPage={this.props.followingPage}
                />
            </React.Fragment>
        )
    }

    render() { 
        return ( 
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
         );
    }
}
 
export default Result;