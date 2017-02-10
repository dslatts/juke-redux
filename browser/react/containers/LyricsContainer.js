import React, {Component} from 'react';
import Lyrics from '../components/Lyrics';
import store from '../store';
import axios from 'axios';
import {setLyrics} from '../action-creators/lyrics';

export default class LyricsContainer extends Component {
    constructor() {
        super();
        this.state = Object.assign({
            artistQuery: '',
            songQuery: ''
        }, store.getState());
        this.setSong = this.setSong.bind(this);
        this.setArtist = this.setArtist.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    setArtist(text) {
        this.setState({artistQuery: text})
    }

    setSong(text) {
        this.setState({songQuery: text})
    }

    handleSubmit() {
        if (this.state.artistQuery && this.state.songQuery) {

            axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
                .then((lyrics) => {
                    return lyrics.data;
                })
                .then((data) => {
                    store.dispatch(setLyrics(data.lyric));
                })
                .catch((err) => {
                    console.error.bind(console);
                })
        }

    }

    render() {
        return (
            <div>
                <Lyrics handleSubmit={this.handleSubmit} setArtist={this.setArtist} setSong={this.setSong}songQuery={this.state.songQuery} artistQuery={this.state.artistQuery} text={this.state.text}/>
            </div>
        )
    }
}