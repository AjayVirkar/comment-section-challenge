import React, { useState, useEffect } from 'react';
import logo1 from "../images/avatars/image-amyrobson.png"
import { FiEdit2 } from "react-icons/fi";
import { IoArrowUndoSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md"

function CommentsSection() {
  const [count, setCount] = useState(5);
  const [comments, setComments] = useState([
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "score": 12,
      "user": {
        "image": {
          "png": "./images/avatars/image-amyrobson.png",
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2 weeks ago",
      "score": 5,
      "user": {
        "image": {
          "png": "./images/avatars/image-maxblagun.png",
          "webp": "./images/avatars/image-maxblagun.webp"
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": {
              "png": "./images/avatars/image-ramsesmiron.png",
              "webp": "./images/avatars/image-ramsesmiron.webp"
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2 days ago",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": {
              "png": "./images/avatars/image-juliusomo.png",
              "webp": "./images/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]);

  const increament = () => {
    setCount(count + 1);
  }
  const decreament = () => {
    setCount(count - 1);
  }

  const [newComment, setNewComment] = useState({ username: " ", content: '', createdAt: '' });

  const handleChange = (e) => {
    setNewComment({ ...newComment, content: e.target.value, username: "AjayVirkar", createdAt: "now" });
  };
  // console.log("slzjdvnjldz", newComment)

  const handleAddComment = () => {
    const newId = comments.length + 1;
    setComments([...comments, { ...newComment, id: newId }]);
    setNewComment({ content: "" });
  };

  const handleEditComment = (id) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, editing: true };
      } else {
        return comment;
      }
    });
    setComments(updatedComments);
  };

  const handleSaveComment = (id, updatedComment) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, ...updatedComment, editing: false };
      } else {
        return comment;
      }
    });
    setComments(updatedComments);
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div className='relative w-full h-screen mx-auto bg-gray-200 text-center'>
      <p>Comments: </p>
      <div className='h-[36rem] overflow-y-scroll'>
        {comments.map((comment) => {
          return (
            <div key={comment.id} className='flex gap-4 w-1/2 mb-8 py-4 bg-white rounded-md mx-auto'>
              <div className='flex flex-col px-3 m-5 justify-center bg-gray-200 rounded-md'>
                <div onClick={increament} className='cursor-pointer'>+</div>
                <div className='font-bold'>{count}</div>
                <div onClick={decreament} className='cursor-pointer'>-</div>
              </div>
              <div className='p-2'>
                <div className='flex justify-end'>
                  <button onClick={() => handleEditComment(comment.id)}><FiEdit2 /></button>
                  <button onClick={() => handleDeleteComment(comment.id)}><MdDelete /></button>
                </div>
                <div className='flex justify-between'>
                  <div className='flex justify-center items-center'>
                    <img className='w-10 h-10' src={logo1} alt="logo" />
                    <p className='mx-2 text-lg font-bold'>{comment.username}</p>
                    <p className='text-gray-500'>{comment.createdAt}</p>
                  </div>
                  <div className='flex flex-row gap-2 items-center'>
                    <div className='text-xl font-bold text-blue-400 cursor-pointer'><IoArrowUndoSharp /></div>
                    <div className='text-xl font-bold text-blue-400 cursor-pointer'>Reply</div>
                  </div>
                </div>
                <div className='text-start text-gray-500'>{comment.content}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='absolute bottom-0 w-full flex mt-12 flex-row justify-center gap-8 mx-auto ' >
        <div><img className='w-10 h-10' src={logo1} alt="image-logo" /></div>
        <textarea className='w-1/3 h-20 rounded-md' type="text" name="text" value={newComment.content} onChange={handleChange} />
        <button className='w-20 h-10 rounded-md bg-blue-500 text-xl text-white' onClick={handleAddComment}>Reply</button>
      </div>
    </div>
  );
}

export default CommentsSection;
