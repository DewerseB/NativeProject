import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    // Screens styles
    screenView: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0B2E3F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenTitleContainer: {
        flex: 1,
        minHeight: 40,
        maxHeight: 40,
        minWidth: 200,
        maxWidth: 200,
        backgroundColor: '#031721',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    screenTitleText: {
        fontSize: 24,
        color: '#F2F7F9',
    },
    screenContentContainer: {
        flex: 9,
        maxWidth: 900,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Sections styles
    sectionView: {
        flex: 4,
        margin: 18,
        padding: 18,
        minHeight: 300,
        minWidth: 300,
        backgroundColor: '#1F4B60',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        justifyContent: 'center',
    },
    sectionTitleContainer: {
        flex: 2,
        minHeight: 50,
        maxHeight: 50,
        minWidth: 200,
        maxWidth: 200,
        backgroundColor: '#0B2E3F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    sectionTitleText: {
        fontSize: 20,
        color: '#F2F7F9',
    },
    sectionContentContainer: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    sectionText: {
        fontSize: 18,
        color: '#F2F7F9',
    },

    // Pressables styles
    buttonFA: {
        flex: 1,
        minHeight: 40,
        maxHeight: 40,
        minWidth: 40,
        maxWidth: 40,
        backgroundColor: '#3B6A82',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconFA: {
        color: '#F2F7F9',
    },
    button: {
        flex: 1,
        minHeight: 40,
        maxHeight: 40,
        minWidth: 80,
        maxWidth: 80,
        backgroundColor: '#3B6A82',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // margin: 9,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: '#F2F7F9',
        alignSelf: 'center',
    },

    // Others
    formField: {
        // flex: 1,
        height: 40,
        width: 200,
        fontSize: 18,
        textAlign: 'center',
        color: '#031721',
        backgroundColor: '#F2F7F9',
        borderRadius: 4,
        marginBottom: 18,
    },
});