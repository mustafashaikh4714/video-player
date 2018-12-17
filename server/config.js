var env = process.env.NODE_ENV || "development";

if(env === "development") {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = "mongodb://usermustafa:mustafa123@ds135724.mlab.com:35724/videoplayer"
}