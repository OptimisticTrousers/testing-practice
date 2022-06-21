const calculator = {
    checkIfValid(x, y){
    if(typeof x !== "string" || typeof x !== "number" || typeof !== "number" || typeof y !== "string"){
        return false
    }
    return true;
    }
  add(x, y) {
    if(this.checkIfValid(x,y)){

        return Number(x) + Number(y);
    }
    return 'ERROR'
  },
  subtract(x, y) {
    if(this.checkIfValid(x,y)){

        return Number(x) + Number(y);
    }
    return 'ERROR'
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
};

module.exports = calculator;
