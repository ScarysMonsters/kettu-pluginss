import { OptionType } from "@utils/types";
import { definePluginSettings } from "@api/Settings";
import definePlugin from "@utils/types";

const infos = {
    other: { os: "Other", browser: "Discord Web" },
    linux: { os: "Linux", browser: "Discord Client" },
    mobile: { os: "iOS", browser: "Discord iOS" },
    darwin: { os: "Darwin", browser: "Discord Client" },
    android: { os: "Android", browser: "Discord Android" },
    windows: { os: "Windows", browser: "Discord Client" },
    console: { os: "Windows", browser: "Discord Embedded" },
};

const settings = definePluginSettings({
    plateforme: {
        type: OptionType.SELECT,
        description: "La plateforme qui sera spoof",
        restartNeeded: true,
        default: "windows",
        options: [
            { label: "Windows", value: "windows", default: true },
            { label: "Linux", value: "linux" },
            { label: "Darwin", value: "darwin" },
            { label: "Android", value: "android" },
            { label: "iOS", value: "mobile" },
            { label: "Web", value: "other" },
            { label: "Console", value: "console" }
        ],
    },
});

export default definePlugin({
    name: "PlatformEmulator",
    description: "PlatformEmulator allows you to spoof your Discord platform (Windows, Linux, Android, iOS, ect.)",
    authors: [{ name: "Sami", id: 1403404140461297816n }],
    patches: [
        {
            find: "os:\"Windows\"",
            replacement: {
                match: /os:"Windows"/,
                replace: 'os:$self.getData().os'
            }
        },
        {
            find: "browser:\"Discord Client\"",
            replacement: {
                match: /browser:"Discord Client"/,
                replace: 'browser:$self.getData().browser'
            }
        }
    ],
    settings,
    getData() {
        return {
            os: infos[settings.store.plateforme].os,
            browser: infos[settings.store.plateforme].browser
        };
    }
});