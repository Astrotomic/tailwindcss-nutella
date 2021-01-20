module.exports = require("tailwindcss/plugin")(
    function ({addUtilities, variants}) {
        addUtilities({
            '.text-shadow-nutella-white': {
                'text-shadow': "" +
                    "0px 2px 0px #FFFFFF, " +
                    "2px 2px 0px #FFFFFF, " +
                    "2px 0px 0px #FFFFFF, " +

                    "-2px 2px 0px #FFFFFF, " +
                    "2px -2px 0px #FFFFFF, " +

                    "0px -2px 0px #FFFFFF, " +
                    "-2px -2px 0px #FFFFFF, " +
                    "-2px 0px 0px #FFFFFF",
            }
        }, variants('textShadow', []));
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
            }
        }
    }
);