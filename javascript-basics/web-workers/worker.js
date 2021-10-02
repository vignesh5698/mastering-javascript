this.message = function(e) {
  if(e.data.addThis !== undefined) {
    this.postMessage({ result: e.data.addThis.num1 + e.data.addThis.num2 })
  }
}