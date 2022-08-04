import React from 'react'
import Post from '../shared/Post'
import PostForm from '../shared/PostForm'


const Create = () => {
    const samplepost = {
        title: "Hey FHJEHWFKWJH FKWJEFHW",
        image: "https://picsum.photos/200/300",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 0,
        owner: {
            email: "t@t.t"
        },
        comments: [{owner: {
                      email: "t@t.t"
                    }, 
                    note:"comment 1 note" },
                    {owner: {
                      email: "t@t.t"
                    },
                    note:"Clickerooskie" }]
  
  
    }
 const initialV = {
 }

 const onSubmit = (values) => {
     console.log("got here")
     console.log(values)
 }

  return (
    <div>
      <PostForm 
      initalV={initialV}
      onSubmit={onSubmit}
      heading={"Create Post"}
      />

    </div>
  )
}

export default Create
