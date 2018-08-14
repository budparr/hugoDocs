module.exports = {    
  plugins: [        
    require('postcss-import')({
      path: ["assets/css"],
    }),     
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }),
    require('@fullhuman/postcss-purgecss')({
      content: ['layouts/**/*.html', 'themes/**/**/*.html' ],      
      fontFace: true,
      whitelist: [        
      "ais-hits",
      "ais-hits--item",
      "results-hidden",
     ]
    }),              
  ]
}