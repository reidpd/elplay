require('dotenv').config();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUriDev = process.env.SPOTIFY_REDIRECT_URI_DEV;
const redirectUriProd = process.env.SPOTIFY_REDIRECT_URI_PROD;

const credentialsDev = { clientId, clientSecret, redirectUri: redirectUriDev, passReqToCallback: true };
const credentialsProd = { clientId, clientSecret, redirectUri: redirectUriProd, passReqToCallback: true };

module.exports = { credentialsDev, credentialsProd };
