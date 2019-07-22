var arr = [1, 1, 1, 1, 1, -7, 1, 1, 1, 1];

function process(arr)
{
    function sortnumbers(x, y) { return x-y; }
    const sortarr = arr.sort(sortnumbers)

    //console.log(sortarr);
    var a = sortarr[0];
    var b = sortarr[1];
    var c = sortarr[sortarr.length-1];

    //console.log(a);
    //console.log(b);
    //console.log(c);


    if (a == b) {
        return c;   
    }

    return a;
}

console.log(process(arr));


function superSort(arrwords) { arrwords.sort((a, b) => a.replace(/[0-9]/g, '').localeCompare(b.replace(/[0-9]/g, ''))) }
 
arrword = ['mic09ha1el', '4b5en6', 'michelle', 'be4atr3ice'];
superSort(arrword)
console.log(arrword)

function dateComparison(date1, format1, date2, format2) {
    

    function parseDate(input, format) {
         format = format || 'dd/mm/yyyy'; // somedefault format
         var parts = input.match(/(\d+)/g),
             i = 0, fmt = {};
  // extract date-part indexes from the format
         format.replace(/(yyyy|dd|mm)/g, function(part) { fmt[part] = i++; });
         return new Date(parts[fmt['yyyy']], parts[fmt['mm']]-1,   parts[fmt['dd']]);
    }
   
   d1 = parseDate(date1, format1);
   d2 = parseDate(date2, format2);
   return d1.getTime() === d2.getTime();
   
}

d1 = "01-02-1980";
d2 = "04/04/1900";
d3 = "07.05.1960";
d4 = "07-05-1960";
d5 = "07/05/1960";
d6 = "08,05,2011";
d7 = "2017.10.20";

console.log(dateComparison(d1, "dd-mm-yyyy", d4, "dd-mm-yyyy"));


