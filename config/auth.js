require('dotenv').config();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI || 'http://localhost:8888/callback';
const credentials = { clientId, clientSecret, redirectUri, passReqToCallback: true };

module.exports = credentials;
