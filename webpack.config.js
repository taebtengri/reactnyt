module.exports = {
    //This is the entry point or start of our react application
    entry: "./app/app.js",

    // The plain compiled JavaScript will be output into this file.
    output:{
        filename: "public/bundle.js"
    },

    // This section describes the transformations we will perform
    module:{
        loaders: [
            {

                // Only working with files that end in a .js or .jsx extension
                test:/\.jsx?$/,

                // Webpack will only process files in our app folder. This avoids processing
                // node modules and server files unnecessarily
                include: /app/,
                loader:"babel-loader",

                query:{
                    // These are the specific transformations we'll be using.
                    presets: ["react", "es2015"]
                }
            }

        ]
    },

    // This lets us debugs our react code in chrome dev tools. Errors will have lines and file name
    // Without this the console says all errors are coming from bundle.js
    devtool: "eval-source-map"
};