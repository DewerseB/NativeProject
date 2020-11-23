export const themes = {
    // name: {
    //     0: '#031721',
    //     1: '#0B2E3F',
    //     2: '#1F4B60',
    //     3: '#3B6A82',
    //     4: '#5D8BA3',
    //     5: '#89AFC1',
    //     6: '#B8D1DD',
    //     7: '#F2F7F9',
    // },
    red: {
        0: '#210303',
        1: '#3F0B0B',
        2: '#601F1F',
        3: '#823B3B',
        4: '#A35D5D',
        5: '#C18989',
        6: '#DDB8B8',
        7: '#F9F2F2',
    },
    green: {
        0: '#0D2103',
        1: '#1C3F0B',	
        2: '#35601F',
        3: '#53823B',
        4: '#74A35D',
        5: '#9CC189',
        6: '#C4DDB8',
        7: '#F4F9F2',
    },
    blue: {
        0: '#031721',
        1: '#0B2E3F',
        2: '#1F4B60',
        3: '#3B6A82',
        4: '#5D8BA3',
        5: '#89AFC1',
        6: '#B8D1DD',
        7: '#F2F7F9',
    },
}

export const getColor = (name, shade) => {
    let color = (themes[name] !== undefined && themes[name][shade] !== undefined) 
        ? themes[name][shade]
        : (themes.blue[shade] !== undefined)
            ? themes.blue[shade]
            : (shade > 7)
                ? themes.blue[7]
                : themes.blue[0];
    return color;
}

// 0 is the darkest, 7 the lightest