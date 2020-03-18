import React,{Component} from 'react';

//Represents a single 
class PostComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p>Post ID: {this.props.postData.postId}</p>
            </div>
         );
    }
}
 
export default PostComponent;