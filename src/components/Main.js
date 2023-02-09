import React, { Component } from 'react';
import Banner from './Banner';
import GamePromotion from './GamePromotion';
import AnimeList from './AnimeList';
import callApi from "../ultis/apiCaller";

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            films: []
        };
    }

    componentDidMount(){
        callApi("AnimeZ", "GET", null).then(res => {
            this.setState({
                films: res.data
            });
        });
    };

    render() {
        var {films} = this.state;
        return (
            <div>
                <Banner />
                <GamePromotion />
                <AnimeList animes={films}/>
            </div>
        )
    }
}

export default Main;
