

const { PythonShell } = require('python-shell');
const express = require('express');
const cors = require("cors");
const app = express()
const port = 3000;


app.use(cors());


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', (req, res) => res.send('Hello Jose!'))



let options = {

  pythonOptions: ['-u'], // get print results in real-time

};


app.post('/compiler', (req, res) => {

  

  console.log(req.body) 
  let data = req.body.sourcecode;
  // data = data.replace(/"/g, '');
  console.log(data); 
  const sourcecode = data;
  
  



  //write to a new file named 2pac.txt

  var fs = require('fs');

  // console.log(sourcecode); 
  fs.writeFile('How.py', data, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('File Saved');
  });



PythonShell.run('How.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  const result = results; 
  console.log(result); 
  console.log('results: %j', result);
  res.send(result); 
});


 
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

