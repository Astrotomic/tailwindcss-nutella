module.exports = require("tailwindcss/plugin")(function () {
}, {
    theme: {
        extend: {
            colors: {
                nutella: {
                    black: '#000000',
                    white: '#FFFFFF',
                    red: '#e20019',
                    brown: '#65381B',
                },
            },
            outline: {
                'nutella-white': ['2px solid #FFFFFF', 0],
            }
        },
    },
});