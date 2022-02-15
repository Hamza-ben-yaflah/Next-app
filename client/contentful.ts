export const client = require("contentful").createClient({
  space: process.env.CONTENTFULLY_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
