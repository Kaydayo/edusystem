import React from 'react'
import { commentData } from '../constants/data'
import commentStyles from '../styles/Home/CustomComment.module.css'
import Button from './Button'
import { Mention, MentionsInput } from "react-mentions";

const CustomComment = () => {
  return (
    <div className={commentStyles.main}>
      {commentData.map((comment: any, index) => {
        return (
          <div key={index} className={commentStyles.seperator}>
            <div className={commentStyles.overflowComment}>
            <div className={commentStyles.defaultBox}>
              <div className={commentStyles.messageBox}>
                <img src={comment.profilePicture} alt="" />
                <p>{comment.fullName}</p>
                <p>{comment.time}</p>
              </div>

              <div>
                <p>{comment.text}</p>
              </div>
            </div>

            {comment.replies.length &&
              comment.replies.map((reply: any, idx: any) => {
                return (
                  <div key={idx} className={commentStyles.reply}>
                    <div className={commentStyles.breakLine}>

                    </div>




                    <div className={commentStyles.defaultBoxreply}>
                      <div className={commentStyles.messageBox}>
                        <img src={reply.profilePicture} alt="" />
                        <p>{reply.fullName}</p>
                        <p>{reply.time}</p>
                      </div>

                      <div>
                        <p>{reply.text}</p>
                      </div>
                    </div>
                  </div>


                )
              })
            }
            </div>
            <div className={commentStyles.commentInput}>
              <div>
                <img src={comment.profilePicture} alt="" />
              </div>

              <div>
                <textarea name="comment" id="comment" placeholder='add a comment...'></textarea>
              </div>

              <div>
                <Button className={commentStyles.commentBtn}>
                  Send
                </Button>
              </div>
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default CustomComment