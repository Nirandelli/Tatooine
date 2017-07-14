var fs= require('fs');
const path=require('path');
var directory;
var filtered;
var filtracion;
fs.readdir(process.argv[2], function(err, files){
  if (err){
    return console.error(err);
  }
  directory= files;
  filtered = path.extname('LICENCE.md');

 filtracion = directory.filter(function (extension){
   return extension=== directory;

     console.log(filtracion);
  })
  console.log(directory);
  })



  // var filtered = directory.filter(function (extension){
  //   return extension= directory==='md';
  //
  //   console.log(extension);
  // })
