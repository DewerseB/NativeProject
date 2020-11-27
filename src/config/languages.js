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
            description: "This a React Native app. It features multiple screens with React Navigation and a settings screen allowing the user to configure the language and the colors of the app through the use of states, props and contexts.",
            more: "The app will default to english language and blue theme. As such this paragraph isn't translated and it uses a wrong theme name to showcase it.",
        },
        profile: {
            title: "Profile",
            login: "Login",
            register: "Register",
        },
        settings: {
            title: "Settings",
            languages: "Language",
            colors: "App colors",
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
            description: "Ceci est une app React Native. Elle comporte plusieurs écrans avec React Navigation et un écran d'options permettant à l'utilisateur de configurer la langue et les couleurs de l'app grâce aux états, props et contextes.",
            more: undefined,
        },
        profile: {
            title: "Profil",
            login: "Se connecter",
            register: "S'enregistrer",
        },
        settings: {
            title: "Options",
            languages: "Langue",
            colors: "Couleurs de l'App",
        },
    },
}

export const getText = (language, category, line) => {
    let text = (languages[language][category][line] !== undefined) ? languages[language][category][line] : languages["english"][category][line];
    return text;
}