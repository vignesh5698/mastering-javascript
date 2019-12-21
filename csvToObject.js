const csvToObject = (data) => {
  const objectName = data.split('\n').splice(0, 1)[0].split(',');
  const objectOfCsv = data
    .split('\n')
    .splice(1);
    
    let objects = objectOfCsv.map((columnValues) => {
      return columnValues.split(',').map((value, index) => {
        return { [objectName[index]]: value}
      });
    })
    console.log(objects)
}
csvToObject('row1,row2\na,b\nc,d\nd,e')
// I/p : 'row1,row2\na,b\nc,d' O/p: [{row1: "a", row2:"b"}, {row1: "c", row2:"d"}]