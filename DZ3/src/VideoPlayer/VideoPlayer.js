import React, {Component} from 'react';
import './VideoPlayer.css';
import video from './Video.mp4'

export default class VideoPlayer extends Component {
    static displayName = 'VideoPlayer'

    playVideo = () => {
        this.movie.play();
    }

    stopVideo = () => {
        this.movie.pause();
    }

    render() {
        return (
            <div className='video-player'>
                <video
                    className='video-player__source'
                    ref={(video) => { this.movie = video; }}>
                    <source src={video} type='video/mp4'/>
                </video>
                <div>
                    <button type='button' onClick={this.playVideo}>
                        Play
                    </button>
                    <button type='button' onClick={this.stopVideo}>
                        Stop
                    </button>   
                </div>
            </div>    
        )
    }
}