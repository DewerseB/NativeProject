const languages = {
    english: {
        // general: {

        // },
        home: {
            title: 'Home',
        },
        about: {
            title: 'About',
        },
        settings: {
            title: 'Settings',
            colors: "App colors",
            languages: "Language",
        },
    },
    french: {
        home: {
            title: 'Accueil',
        },
        about: {
            title: 'A propos',
        },
        settings: {
            title: 'Paramètres',
            colors: "Couleurs de l'App",
            languages: "Langue",
        },
    },
}

export const getText = (language, category, line) => {
    let text = (languages[language][category][line] !== undefined) ? languages[language][category][line] : languages['english'][category][line];
    return text;
}