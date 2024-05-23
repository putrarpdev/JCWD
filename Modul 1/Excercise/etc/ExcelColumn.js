//A  -> 1
//B  -> 2
//C  -> 3
//Z  -> 26
// rumus untuk mencari nilai dari char pertama dari belakang adalah posisi char tersebut dalam alphabet
//AA -> 27 = x + 1
//      -x = -27 + 1
//      -x = -26
//       x = 26
//AB -> 28 = 26 + 2
//AZ -> 52 = 26 + 26
//BA -> 53 = x + 1
//      -x = -53 + 1
//      -x = -52
//       x = 52
//      53 = 26**1 * 2 + 26**0 * 1
var excelColumn = function(columnTitle) {
    let res = 0;

    for(i=0 ; i < columnTitle.length; i++){
        res += (26**(columnTitle.length - (i+1))) * (columnTitle.charCodeAt(i) - 64);
    }

    return res;
};

console.log(excelColumn("ABC"));

