var fs= require('fs');
const path=require('path');
var directory;
var filtered;
var fil;
fs.readdir(process.argv[2], function(err, files){
  if (err){
    return console.error(err);
  }
  directory= files;
  filtered = path.extname('md');

   fil=directory.filter(function (extension,ex){
   return extension === process.argv[3];

    console.log(process.argv[2],directory);

  })
    console.log('filtrado',fil);
  })
    console.log();



  // var filtered = directory.filter(function (extension){
  //   return extension= directory==='md';
  //
  //   console.log(extension);
  // })
