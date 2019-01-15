module.exports = {
    presets: [
        '@vue/app'
    ],
    plugins:[//按需引入mint-ui
        [
            "component",
            {
                "libraryName": "mint-ui",
                "style": true
            }
        ]
    ]
}
