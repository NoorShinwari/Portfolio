class Triple {
  static triple(n = 1) {
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple());
console.log(Triple.triple(6));

var tp = new Triple();
console.log(BiggerTriple.triple(3));

console.log(tp.triple());
