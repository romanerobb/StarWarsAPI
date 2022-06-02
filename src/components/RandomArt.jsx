import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RandomArt() {

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        const response = await fetch("https://swapi.dev/api/people/3/");
        const dataFlow = await response.json();
        setPost(dataFlow);
    };
    
  return (
    <>
        <h1 class="text-capitalize p-2 mb-2 bg-warning bg-gradient-warning text-dark font-weight-bold">The World Of Star Wars Stats</h1>
        <h2 class="text-capitalize p-1 mb-2 bg-gradient-warning text-dark font-weight-bold">Name: {post.name}</h2>
        <h2 class="text-capitalize p-1 mb-2 bg-gradient-warning text-dark">Height: {post.height}</h2>
        <h2 class="text-capitalize p-1 mb-2 bg-gradient-warning text-dark">Weight: {post.mass}</h2>
        <h2 class="text-capitalize p-1 mb-2 bg-gradient-warning text-dark">Birth Year: {post.birth_year}</h2>
        <h2 class="text-capitalize p-1 mb-2 bg-gradient-warning text-dark">Gender: {post.gender}</h2>
        <button onClick={fetchPost}>Display Stats</button>
        
    </>
  );

  }