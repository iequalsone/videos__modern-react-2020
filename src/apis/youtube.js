import axios from 'axios';

const KEY = 'AIzaSyCyZ7fc06pBCX-UMlfbrmSx0y7I9vPk4MI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
