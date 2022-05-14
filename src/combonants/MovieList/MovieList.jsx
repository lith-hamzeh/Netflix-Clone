import React, { useEffect, useState } from "react";
import styled from "styled-components"
import ModalMovie from "../ModalMovie/ModalMovie";
import {BsFillPlayCircleFill} from "react-icons/bs"


const MovieList=()=>{
    
    let z
    const [newTitle,setnewtitle]=useState()
    const [stete,setstate]=useState()
    const [tuggle,settuggle]=useState(false)
    useEffect(()=>{
        async function get(){
            const x=await fetch("https://lith-500.herokuapp.com/trending")
            const y=await x.json()
            setstate(y)
        }get()
    },[])
    const addfiletofavorate=(e)=>{
        setnewtitle(stete.find((a)=>(a.id==(e.target.getAttribute("datatype")))))
        settuggle(true)
    }
    const closesss=(props)=>{
        settuggle(props)
    }

    if(stete!==undefined){
        z=stete.map(({id,overview,poster_path,release_date,title},i)=>(
        <div className="iconlist" key={i} datatype={id}>
            <div className="image-holder">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}alt=""/>
                <div className="addto">
                    <p className="play"><BsFillPlayCircleFill/></p>
                    <p className="addtolist" onClick={addfiletofavorate} datatype={id}>add list </p>
                </div>
            </div>
            <div className="text">
                <p className="title">{title}</p>
                <p className="date">{release_date}</p>
            </div>
        </div>
        
        ))

    }







    return(
    <Style>
    <div className="containerlist">
        {stete!==undefined?z:<p></p>}
        <ModalMovie modal={newTitle} state={tuggle} closez={closesss}/>
    </div>
    </Style>

    )
}


export default MovieList





const Style=styled.div`
*{margin: 0;padding: 0;list-style: none;box-sizing: border-box;text-decoration: none;}
.containerlist {
    display: grid;grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    gap: 15px;padding: 50px 150px;text-transform: capitalize;background-color: rgba(5, 5, 5, 0.938);
    color: silver;    z-index: 1;

}
.containerlist .iconlist img {
   width: 100%;height: 300px;
}
.containerlist .iconlist {
    z-index: 1;
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
    width: 100%;text-align:center;background-color: rgba(192, 192, 192, 0.329);
    font-weight: bold;text-transform: capitalize;margin-bottom: 10px;
    color: white;transition: all .5s;
}
.containerlist .image-holder .addto .addtolist:hover {
    color: red;
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
.containerlist .text .title {
    padding: 10px ;text-transform: capitalize;font-weight: bold;
}
.containerlist .text .date {
    padding: 10px;text-transform: capitalize;
}
`