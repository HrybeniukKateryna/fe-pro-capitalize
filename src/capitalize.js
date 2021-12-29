function capitalize(string) {
    let result = string.split(' ');
    let newArray = result.map(function (item) {
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
  
    return newArray.join(' ');


    // Еще нашла вот такой вариант реализации, мне кажется, что он намного оптимальнее.
    //  let a = string.split(' ');
    
    //    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});

}

module.exports = capitalize;
