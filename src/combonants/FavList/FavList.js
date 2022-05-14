import React, { useEffect, useRef, useState } from "react"
import {BsFillPlayCircleFill} from "react-icons/bs"
import styled from "styled-components"


const FavList=()=>{
    const commenthave=useRef()
    const [state,setstate]=useState()
    useEffect(()=>{
        async function get(){
            const x=await fetch("https://lith-500.herokuapp.com/favoritemovei")
            const y=await x.json()
            setstate(y.rows)
        }get()
    },[])

    ///////////////////////////////////////updating the text//////////////////////////////////
    const updating=(e)=>{
        e.preventDefault()
        async function update(){
            const x=await fetch("https://lith-500.herokuapp.com/addMovie",{
                method:"put",
                headers:{
                    'Content-Type':'application/json;vharset=utf-8'
                },
                body:JSON.stringify({comment:(commenthave.current.value),
                id:e.target.getAttribute("datatype")
                })
            })
        }update()

        

    }
    /////////////////////////////////////remove from list//////////////////////////////////
    const remove=(e)=>{
        let idForElementWillDelete=(e.target.getAttribute("datatype"))
        async function deleted(){
            const x=await fetch("https://lith-500.herokuapp.com/addMovie",{
                method:"delete",
                headers:{
                    'Content-Type':'application/json;vharset=utf-8'
                },
                body:JSON.stringify({id:idForElementWillDelete})
            })
        }deleted()
    }
    ////////////////////////////////////////////////////////////////////////////////////////

    return(
    <Style>
    <div className="containerlist">
        {state!==undefined?state.map(({comment,id,overview,poster_path,release_date,title},i)=>(
        <div className="iconlist" key={i} datatype={id}>
            <div className="image-holder">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}alt=""/>
                <div className="addto">
                    <p className="play"><BsFillPlayCircleFill/></p>
                    <p className="addtolist" onClick={remove} datatype={id}>remove from my list </p>
                </div>
            </div>
            <div className="textass">
                <p className="title">{title}</p>
                <p className="date">{release_date}</p>
                <p className="coco">comment:{comment}</p>
            </div>
            <form>
            <textarea name="" id="" class="comment"  ref={commenthave}></textarea>
            <button class="update" onClick={updating} datatype={id} >update </button>
            </form>
        </div>
        )):<p></p>}
    </div>
    </Style>
    )
}


export default FavList



const Style=styled.div`
*{margin: 0;padding: 0;list-style: none;box-sizing: border-box;text-decoration: none;}
.containerlist {
    display: grid;grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    gap: 15px;padding: 50px 150px;text-transform: capitalize;background-color: rgba(5, 5, 5, 0.938);
    color: silver;    z-index: 1;

}
.coco {
    margin-bottom: 15px;
    margin-top:5px;
    color: rgb(59, 59, 192);
}
.containerlist .iconlist img {
   width: 100%;height: 300px;
}
.containerlist .iconlist {
    z-index: 1;
}
.textass {
    height: 100px;
}
.containerlist .iconlist:hover {
    transition: all .5s;transform: scale(1.2);
    z-index: 10;
}
.containerlist .image-holder {
    position: relative;
}
.containerlist .image-holder .addto .play{
    position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);
    color: white;font-weight: bold;font-size: 1.5em;transition: all .5s;
    font-size: 3.5em;

}
.containerlist .image-holder .addto .addtolist{
    position: absolute;bottom: 0;left: 0;padding: 10px 30px;
    width: 100%;text-align:center;background-color:red;
    font-weight: bold;text-transform: capitalize;margin-bottom: 10px;
    color: white;
    color: white;transition: all .5s;
}
.containerlist .image-holder .addto .addtolist:hover {
    color: black;
}
.containerlist .image-holder .addto {
    display: none;cursor: pointer;transition: all .5s;
    transition: all .5s;
}
.containerlist .image-holder .addto .play:hover {
    color: red;
}
.containerlist .image-holder:hover .addto {
    display: block;cursor: pointer;transition: all .5s;
}
.containerlist .textass .title {
    text-transform: capitalize;font-weight: bold;
    height: 30px;    overflow-y: hidden;
}
.containerlist .textass .date {
  text-transform: capitalize;
}
.comment {
    width: 100%;height: 50px;overflow-y: scroll;
    background-color: rgba(8, 8, 8, 0.466);
    color: white;font-weight: bold;cursor: pointer;
}
.update {
    padding: 10px 30px;text-transform: capitalize;
    font-weight: bold;background-color: rgb(69, 69, 214);
    color: white;cursor: pointer;width:100%;
}
`