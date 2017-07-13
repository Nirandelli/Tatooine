var fs= require('fs');
var directory;
var filtered;
fs.readdir(process.argv[2], function(err, files){
  if (err){
    return console.error(err);
  }
  directory= files;
  filtered= directory.filter(function filtro(fil){
    return fil = '.md';
  })
      console.log(fil);
      //console.log(directory);
})
    console.log(filtered);

// var numbers= [1,2,4,5,6,7,8,9,10];
// var filtered= numbers.filter(
//   function evenNumbers(number){
//   return number % 2 === 0;
//   console.log(number);
// });
//   console.log(filtered);
