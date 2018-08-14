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
  ]
}