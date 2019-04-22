import React from "react";
import {Button, Text, View} from "react-native";

class ReviewsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>ReviewsScreen!</Text>
                <Button
                    title="Albums"
                    onPress={() => this.props.navigation.navigate('Album')}
                />
                <Button
                    title="Bands"
                    onPress={() => this.props.navigation.navigate('Band')}
                />
            </View>
        );
    }
}

export default ReviewsScreen