import React, { useRef, useState } from "react";
import "../ModalMovie/ModalMovie.css"
import { AiFillCloseCircle } from 'react-icons/ai';

const ModalMovie=({modal,state,closez})=>{
    const commentadded=useRef()
    const lowerclose=()=>{
        closez(false)
    }
    const upperclose=()=>{
        closez(false)
    }
    const addtofavo=()=>{
        let datawilladdtofavorite=[]
        datawilladdtofavorite.push(({id:modal.id,overview:modal.overview,poster_path:modal.poster_path,release_date:modal.release_date,title:modal.title,comment:(commentadded.current.value )}))
        async function send(){
            const x=await fetch("https://lith-500.herokuapp.com/addMovie",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json;vharset=utf-8'
                },
                body:JSON.stringify(datawilladdtofavorite)

            })


        }send()
        closez(false)
    }

    
    return(
    <>
    {state===true?
    <div className="containermodal"  >
        <div className="closemain" onClick={upperclose}><AiFillCloseCircle/></div>
        <img src={`https://image.tmdb.org/t/p/w500${modal.poster_path}`} alt=""/>
        <div className="title">{modal.title}</div>
        <p className="textcomment">add your comment</p>
        <input type="text" name="" id="" className="text" ref={commentadded}/>
        <div className="icon-holder">
            <div className="close" onClick={lowerclose}>close</div>
            <div className="addto" onClick={addtofavo}>add to favorite</div>
        </div>
    </div>:<p></p>}
    </>
    )
}


export default ModalMovie

