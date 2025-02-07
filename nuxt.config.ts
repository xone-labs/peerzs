import { isDevelopment } from "std-env";

export default defineNuxtConfig({
    devtools: { enabled: true },
    compatibilityDate: "2024-07-15",
    app: {
        rootId: "__app",
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/svg",
                    href: "/favicon.svg",
                },
            ],
        },
    },
    site: {
        name: "Nuxt Starter Template",
        description: "Nuxt 3 minimal starter template wih Vue 3, TypeScript, Unocss, SEO and more. Made by Denish Sharma",
    },
    typescript: {
        typeCheck: "build",
        tsConfig: {
            compilerOptions: {
                noErrorTruncation: true,
            },
        },
    },
    css: ["~/assets/styles/global.scss"],
    modules: [
        "@nuxt/eslint",
        "@unocss/nuxt",
        "@nuxt/fonts",
        "@nuxtjs/seo",
        "@nuxtjs/color-mode",
        "nuxt-icon",
        "nuxt-svgo",
        "@vueuse/nuxt",
        "@nuxt/scripts",
        "nuxt-typed-router",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        "nuxt-api-party",
    ],
    apiParty: {
        server: {
            basePath: "_proxy_",
        },
        endpoints: {
            jsonPlaceholder: {
                url: "https://jsonplaceholder.typicode.com",
            },
        },
    },
    seo: {
        debug: isDevelopment,
    },
    colorMode: {
        classSuffix: "",
        globalName: "__PEERZS_COLOR_MODE__",
        storageKey: "peerzs-color-mode",
        hid: "peerzs-color-mode-script",
        disableTransition: true,
    },
    svgo: {
        autoImportPath: "~/assets",
    },
    piniaPersistedstate: {
        debug: isDevelopment,
        cookieOptions: {
            secure: !isDevelopment,
        },
    },
    eslint: {
        config: {
            standalone: false,
        },
    },

});
