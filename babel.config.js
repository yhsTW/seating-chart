const config = {
    presets : [
        [
            '@babel/preset-env',
            { 'targets': { 'chrome' : '55' } }
        ],
        '@babel/preset-react'
    ]
};

module.exports = config;