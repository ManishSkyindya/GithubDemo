Array.prototype.contains = function(v) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === v) return true;
    }
    return false;
  };
  
  Array.prototype.unique = function() {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      if (!arr.contains(this[i])) {
        arr.push(this[i]);
      }
    }
    return arr;
  }
  
  var duplicates = [1, 3, 4, 2, 1, 2, 3, 8];
  var uniques = duplicates.unique(); // result = [1,3,4,2,8]
  
  console.log(uniques);