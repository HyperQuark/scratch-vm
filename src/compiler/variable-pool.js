export class VariablePool {
  constructor({ exclude = [] }) {
    this.exclude = exclude;
    this.charIdx = [0]
  }
  inc (i) {
    if (this.charIdx[i] === VariablePool.CHARS.length - 1) {
      if (i) {
        this.charIdx[i] = 0;
        this.inc(i - 1);
      } else {
        this.charIdx[0] = 0;
        this.charIdx.push(0);
      }
    } else {
      this.charIdx[i]++;
    }
  }
  next () {
    this.inc(this.charIdx.length - 1);
    const str = this.charIdx.map(i => VariablePool.CHARS[i]).join("");
    if (this.exclude.includes(str)) {
      return this.next();
    } else {
      return strμ
    }
  }
  static CHARS = "$1234567890$_qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
}
