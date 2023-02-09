import React from 'react';
import {Table,TableHead,TableRow,TableCell,Button,TableBody} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import callApi from "../ultis/apiCaller";
import { Link } from "react-router-dom";
export default function Dashboard() {
    const [animeList, setAnimeList] = useState([])

    async function getData() {
        await callApi("AnimeZ", "GET", null).then(res => {
            setAnimeList(res.data)
        });
        console.log(animeList);
    }

    useEffect(()=>{
        getData();
    },[])

    function deleteData(id) {
        callApi("AnimeZ/" + id, "DELETE", null).then(res => {
            console.log(res);
        });
    }

    return (
      <div>
        <Link to="/add">
          <Button variant="contained" style={{ float: "left" }}>
            <AddIcon />
            Add New Film
          </Button>
        </Link>
        <Table style={{ backgroundColor: "#999999", marginBottom: "20px" }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Episode</TableCell>
              <TableCell>Studio</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          {animeList
            .map((anime, index) => (
              <TableBody>
                <TableRow key={index}>
                  <TableCell>{anime.id}</TableCell>
                  <TableCell>
                    <img
                      style={{ width: "200px", height: "300px" }}
                      src={anime.image}
                    ></img>
                  </TableCell>
                  <TableCell>{anime.name}</TableCell>
                  <TableCell>{anime.status}</TableCell>
                  <TableCell>{anime.episode}</TableCell>
                  <TableCell>{anime.studio}</TableCell>
                  <TableCell>
                    <p style={{ textOverflow: "ellipsis" }}>
                      {anime.description}
                    </p>
                  </TableCell>
                  <TableCell>
                    <Link to={`/${anime.id}/edit`}>
                      <Button variant="contained" color="primary">
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => deleteData(anime.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
        </Table>
      </div>
    );
}