import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    if (!props.selectedSong) {
        return (
            <div>Select a song</div>
        )
    }
    else {
        return (
            <div>
                <div>{props.selectedSong && props.selectedSong.title}</div>
                <div>{props.selectedSong && props.selectedSong.duration}</div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);