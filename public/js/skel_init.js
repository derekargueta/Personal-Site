/** This file must be included in header rather than body
    because it links in the CSS. Linking at bottom of body
    causes laggy rendering

    MINIFICATION NOTE: in minified code change to minified css
**/
skel.init({
    reset:'full',
    breakpoints: {
    // Global.
        global: {
            href: '../css/style.css',
            containers: 1400,
            grid: {
                gutters: ['2em', 0]
            }
        },

    // XLarge.
        xlarge: {
            media: '(max-width: 1680px) and (min-width: 1281px)',
            href: '../css/breakpoints/xlarge.css',
            containers: 1200
        },

    // Large.
        large: {
            media: '(max-width: 1280px) and (min-width: 981px)',
            href: '../css/breakpoints/large.css',
            containers: 960,
            grid: {
                gutters: ['1.5em', 0]
            },
            viewport: {
                scalable: false
            }
        },

    // Medium.
        medium: {
            media: '(max-width: 980px) and (min-width: 737px)',
            href: '../css/breakpoints/medium.css',
            containers: '90%',
            grid: {
                zoom: 2
            }
        },

    // Small.
        small: {
            media: '(max-width: 736px) and (min-width: 481px)',
            href: '../css/breakpoints/small.css',
            containers: '90%',
            grid: {
                zoom: 3,
                gutters: ['1.25em', 0],
                collapse: false
            }
        },

    // XSmall.
        xsmall: {
            media: '(max-width: 480px)',
            href: '../css/breakpoints/xsmall.css',
            grid: {
                zoom: 4,
                collapse: true
            }
        }
    }
});