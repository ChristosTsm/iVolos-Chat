import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    avatar : {
        width: 50,
        height: 50,
        borderRadius: 50
    },

    container : {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#fff',
        width: '100%',
        padding: 10
    },

    leftContainer : {
        flexDirection: 'row'
    },

    midContainer : {
        marginLeft: 10,
    },

    rightContainer : {
        alignSelf: 'flex-start',
        marginLeft: 'auto'
    },

    username : {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 5
    },
    lastMessage : {
        fontWeight: '100',
        fontSize: 12,
        opacity: 0.6,
        maxWidth: 165
    },
    date: {
        // opacity: 0.6
    }

});

export default styles;