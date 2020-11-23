export const languages = {
    english: {
        general: {
            name: "English",
            flag: require("../assets/flags/united-kingdom-flag-64.png"),
        },
        home: {
            title: "Home",
        },
        about: {
            title: "About",
            description: "This a React Native app. It features multiple pages with React Navigation and a Settings page allowing the user to configure the language and the colors of the app through the use of states, props and contexts.",
            more: "The app will default to english language and blue theme. As such this paragraph isn't translated and it uses a wrong theme name to showcase it.",
        },
        settings: {
            title: "Settings",
            colors: "App colors",
            languages: "Language",
        },
    },
    french: {
        general: {
            name: "Français",
            flag: require("../assets/flags/france-flag-64.png"),
        },
        home: {
            title: "Accueil",
        },
        about: {
            title: "A propos",
            description: "Ceci est une app React Native. Elle comporte plusieurs pages avec React Navigation et une page de paramètres permettant à l'utilisateur de configurer la langue et les couleurs de l'app grâce aux états, props et contextes.",
            more: undefined,
        },
        settings: {
            title: "Paramètres",
            colors: "Couleurs de l'App",
            languages: "Langue",
        },
    },
}

export const getText = (language, category, line) => {
    let text = (languages[language][category][line] !== undefined) ? languages[language][category][line] : languages["english"][category][line];
    return text;
}