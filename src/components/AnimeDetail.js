import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Config from "../ultis/config";
import axios from "axios";
export default function AnimeDetail() {
    const userName = useParams();
    const [animeList, setAnimeList] = useState([])
    console.log(userName);

    function getData() {
        axios.get(`${Config.API_URL}/AnimeZ/` + userName.id)
            .then(response => response.data)
            .then((data) => {
                setAnimeList(data)
            });
        console.log(animeList);
    }

    useEffect(()=>{
        getData();
    },[])

    return (
      <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.6)), url('+animeList.background+') ', backgroundSize: 'cover'}}>
                        <div className="card-body">
                            <div className="row">
                                <div>
                                    <img style={{float: 'left'}} src={animeList.image} alt={animeList.name} className="img-fluid"/>
                                </div>
                                <div>
                                    <h1 style={{color: 'white'}}>{animeList.name}</h1>
                                    <p style={{color: 'white'}}>Status: {animeList.status}</p>
                                    <p style={{color: 'white'}}>Total Episode: {animeList.episode}</p>
                                    <p style={{color: 'white'}}>Studio: {animeList.studio}</p>
                                    <h4 style={{color: 'cyan'}}>Description</h4>
                                    <div style={{left: '0'}} className="bottom-line2"></div>
                                    <p style={{color: 'white'}}>{animeList.description}</p>
                                    <div style={{right: '0'}} className="bottom-line2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}
