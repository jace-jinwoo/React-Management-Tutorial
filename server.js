const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: 'https://placeimg.com/64/64/any',
      name: '박진우',
      birthday: '911226',
      gender: '남자',
      job: '프론트엔드'
    },
    {
      id: 2,
      image: 'https://placeimg.com/64/64/any?t=1595578610444',
      name: '김남영',
      birthday: '970213',
      gender: '여자',
      job: '디자이너'
    },
    {
      id: 3,
      image: 'https://placeimg.com/64/64/any?t=1595578633614',
      name: 'Who',
      birthday: '911226',
      gender: '남자',
      job: '축구선수'
    }
  ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));