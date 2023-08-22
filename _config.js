var config = {}
const connectionString = 'mongodb+srv://jobmwanikinjuguna:Jj7cHXm2frsdZ7k6@gallery.n5mpm34.mongodb.net/darkroom?retryWrites=true&w=majority'
// Update to have your correct username and password
config.mongoURI = {
    production: connectionString,
    development: connectionString,
    test: connectionString,
}
module.exports = config;