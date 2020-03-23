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
                <p>ID: {this.props.postData.id}</p>
                <p>Name: {this.props.postData.name}</p>
                <p>Email: {this.props.postData.email}</p>
                <p>Body: {this.props.postData.body}</p>
                <hr/>
            </div>
         );
    }
}
 
export default PostComponent;