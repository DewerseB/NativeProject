import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        // minHeight: 1000,
        width: '100%',
        backgroundColor: '#0B2E3F',
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: 300,
    },
    screenTitle: {
        // flex: 1,
        padding: 18,
        fontSize: 24,
        color: '#F2F7F9',
        alignSelf: 'center',
        // backgroundColor: 'green',
    },
    sectionView: {
        flex: 4,
        margin: 18,
        padding: 18,
        // width: '100%',
        // width: 300,
        // height: 600,
        minWidth: 300,
        maxWidth: 600,
        backgroundColor: '#1F4B60',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    sectionText: {
        padding: 18,
        fontSize: 18,
        color: '#F2F7F9',
        // alignSelf: 'center',
    }
});