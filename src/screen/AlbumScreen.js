import React from "react";
import {ScrollView, RefreshControl} from "react-native";
import CommonPageContainer from "../components/CommonPageContainer";
import AlbumPanel from "../components/AlbumInfo/AlbumPanel";
import SongsList from "../components/AlbumInfo/SongsList";
import {connect} from "react-redux";
import {callApiAlbumRequest, callApiAlbumSongsRequest} from "../actions/ApiRequestActions";

class AlbumScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
    }

    _onRefresh = () => {
        let albumId = this.props.navigation.getParam('albumName', 1);
        this.props.callApiAlbumRequest(albumId);
        this.props.callApiAlbumSongsRequest(albumId);
        this.setState({refreshing: false})
    };

    render() {
        let {navigation} = this.props;
        let albumName = navigation.getParam('albumName', 'albumsNameDefault');

        return (
            <CommonPageContainer
                headerTitle={"Album: " + albumName}
            >
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
                >
                    <AlbumPanel/>
                    <SongsList/>
                </ScrollView>
            </CommonPageContainer>
        );
    }
}

export default connect(null, {callApiAlbumRequest, callApiAlbumSongsRequest})(AlbumScreen);