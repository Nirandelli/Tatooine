var array= 0;

for (var i = 2; i < process.argv.length; i++) {
      array += Number(process.argv[i]);

}
  console.log(array);
