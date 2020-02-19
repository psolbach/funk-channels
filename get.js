const fs = require('fs');
const fetch = require('node-fetch');
const channelsUrl = 'https://www.funk.net/data/static/channels';
const filePath = 'channels.json';

const saveChannels = json => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(json))
  } catch (err) {
    console.error(err)
  }
}

fetch(channelsUrl)
  .then(res => res.json())
  .then(json => saveChannels(json));