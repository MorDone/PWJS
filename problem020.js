function Square(a){
    this.aa = a;
}

Square.prototype.getArea = function(){
    return this.aa * this.aa;
}

Square.prototype.getPerimeter = function(){
    return 4 * this.aa;
}