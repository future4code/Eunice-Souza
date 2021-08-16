import React from 'react';
import axios from 'axios'

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const playList = () => {
  axios.get(url, {
    headers: {
      Authorization: "eunice-jesus-lovelace"
    }
  })
}