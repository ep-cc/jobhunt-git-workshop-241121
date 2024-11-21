const express =require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Git Refresher Workshop | 24.11.21.</h1>');
});

app.get('/api/toc', (req, res) => {
  res.json([
    'Working with branches locally',
    'Merging branches',
    'Merge conflicts',
    'Remotes',
    'Pull requests on GitHub'
  ]);
});

app.get('/api/ep-info', (req, res) => {
  console.log('Peti endpoint');
  res.send('mentor');
});

app.listen(8888, () => console.log('Server is running on port 8888'));
