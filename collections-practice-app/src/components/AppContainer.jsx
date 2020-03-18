import React, { Component, Fragment } from 'react';
import PostComponent from './PostComponent';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // "postId": 1,
    // "id": 1,
    // "name": "id labore ex et quam",
    // "email": "Eliseo@gardner.biz",
    // "body": "laudantium"

    render() {
        //Pulling in the test data from another component/like import but using require bc we want to be able to read the array and return a different array/ for scope purposes put it inside of render
        //used .. to go up a file parent to get a reference to rawData
        const rawData = require('../rawData')
        //sanity to make sure the above import(require) worked
        console.log(`rawData component running ${rawData[0].email}`)

        return (
            //If you use fragment always import inside curly braces with component
            <Fragment>
                <h1>AppContainer</h1>
                {/* loop through our array and make components */}
                {
                    rawData.map((post,index) =>{
                        return(
                        <PostComponent key={index} postData={post}/>)
                    }
                    )
                }
                
            </Fragment>
        );
    }
}

export default AppContainer;