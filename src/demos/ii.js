export default {
    name: "II",

    equations: [
        {
            str: "6 + sin(t * pi/2)",

            start: "0",

            end: "32",

            step: "1",

            duration: 8,

            startBeat: 0,

            whiteonly: true,
        },

        {
            str: "2",

            start: "0",

            end: "32",

            step: "1",

            duration: 8,

            startBeat: 0,

            whiteonly: true,
        },

        {
            str: "-3 + sin(t * pi/2)",

            start: "0",

            end: "32",

            step: "1",

            duration: 8,

            startBeat: 0,

            whiteonly: true,
        },

        {
            str: "(t^2 + t)%8",

            start: "0",

            end: "32",

            step: "1",

            duration: 1,

            startBeat: 32,

            whiteonly: true,
        },

        {
            str: "(t^3 + 2*t) % 16",

            start: "0",

            end: "32",

            step: "1",

            duration: 1,

            startBeat: 64,

            whiteonly: true,
        },

        {
            str: "(t^2) % 8",

            start: "0",

            end: "32",

            step: "1",

            duration: 1,

            startBeat: 96,

            whiteonly: true,
        },

        {
            str: "(t^5 + 4*t^3) % 10",

            start: "0",

            end: "32",

            step: "1",

            duration: 1,

            startBeat: 128,

            whiteonly: true,
        },

        {
            str: "(4*sin(t * pi/2) + t^2) % 11",

            start: "0",

            end: "32",

            step: "1",

            duration: 1,

            startBeat: 160,

            whiteonly: true,
        },

        {
            str: "(7*t^2) % 13",

            start: "0",

            end: "32",

            step: "1",

            duration: 1,

            startBeat: 192,

            whiteonly: true,
        },

        {
            str: "(3*t^3) % 14",

            start: "0",

            end: "32",

            step: "1",

            duration: 1,

            startBeat: 224,

            whiteonly: true,
        },
    ],
};
