import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';
import Artist from './components/Artist';
import Songs from './components/Songs';
import NewPlaylistContainer from './containers/NewPlaylistContainer';
import Playlist from './components/Playlist';
import LyricsContainer from './containers/LyricsContainer';

// import store from './store';
// import {setLyrics} from './action-creators/lyrics';


// console.log('-------------------------');
// console.log('State after second SET_LYRICS action: ', store.getState());
// const unsubscribe = store.subscribe(function () {
//     console.log('----------------');
//     console.log('State changed!!', store.getState());
// });
//
// store.dispatch(setLyrics('I can feel it coming in the air tonight ... hold on ...'));
// store.dispatch(setLyrics('Never gonna give you up, never gonna let you down'));
//
// unsubscribe();
//
// store.dispatch(setLyrics('Hello, darkness, my old friend.'));


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={AppContainer} foo={'foo'}>
            <Route path="/albums" component={Albums}/>
            <Route path="/albums/:albumId" component={Album}/>
            <Route path="/artists" component={FilterableArtistsContainer}/>
            <Route path="/artists/:artistId" component={Artist}>
                <Route path="albums" component={Albums}/>
                <Route path="songs" component={Songs}/>
            </Route>
            <Route path="/new-playlist" component={NewPlaylistContainer}/>
            <Route path="playlists/:playlistId" component={Playlist}/>
            <Route path="/lyrics" component={LyricsContainer} />
            <IndexRedirect to='/albums'/>
        </Route>
    </Router>,
    document.getElementById('app')
);
