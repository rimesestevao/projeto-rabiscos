import React,{useState} from 'react';
import {addDoc, collection} from "firebase/firestore";
import {db,auth} from '../service/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

    const [title,setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const refPostCollection = collection(db,"posts");
    let navigate = useNavigate();

    const createPost = async () => {
      await addDoc(refPostCollection,{
        title, 
        postText,
        author:
        {name: auth.currentUser.displayName, id: auth.currentUser.uid},
      });
      navigate("/");
    };

  return (
    <div className='CreatePostComponent'>
        <div className='cpContainer'>
            <h1>Faça um Post</h1>
            <div className='inputContainer'>
                <label>Título: </label>
                <input placeholder='inputTitle'
                onChange={(event)=>{setTitle(event.target.value);}}/>
            </div>
            <div className='inputContainer'>
                <label>Texto: </label>
                <input placeholder='inputText'
                onChange={(event)=>{setPostText(event.target.value);}}/>
            </div>
            <button onClick={createPost}>Upload Post</button>
        </div>
    </div>
  )
}

export default CreatePost