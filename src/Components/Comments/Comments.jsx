import React, { useEffect, useState } from 'react';
import './Comments.scss'

const Comments = props => {
  const [ currentComment, setCurrentComment ] = useState('');
  
   const allComments = () =>{
     return(
       <div className='comment-box'>
         my comment
       </div>
     )
   }

   const submitComment = () => {
    console.log(currentComment);
   }

   const handleCommentInput = (e) => {
     setCurrentComment(e.target.value);
   }
   
    return (
        <div className='comments-container'>
          <textarea 
                placeholder="Remember, be nice!" 
                cols="50" 
                rows="3" 
                value={currentComment}
                onChange={handleCommentInput}
                className="comments-textarea"></textarea>
          <button onClick={submitComment}>Submit</button>
          <button>Cancel</button>
          {allComments()}
        </div>
    );
};

export default Comments;
