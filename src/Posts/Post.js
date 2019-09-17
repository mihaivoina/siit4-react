import React from 'react';
import './Post.css';

function Post(props) {
  // console.log('Comment-urile postarilor: ', props.postare.body); 
  return (
    <div className="postare">
      <h3>{ props.postare.title }</h3>
      <p>{ props.postare.body }</p>
    </div>
    );
}

export default Post;