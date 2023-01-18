class API {
  #secure;
  constructor(url) {
    this.url = url;
    this.method = "GET";
    this.#secure = url.includes("https") ? true : false;
  }
  isSecure() {
    return this.#secure;
  }
  updateURL(newurl) {
    this.url = newurl;
    this.#secure = newurl.includes("https") ? true : false;
  }
}
// const s = new API("http://api. com/api/hello");
// console.log(s.isSecure()); // false

// s.updateURL("https://api. com/api/hello");
// console.log(s.isSecure()); // true

// console.log(s.url); // https://api. com/api/hello

// console.log(s.method); // GET

// console.log(s.secure); // undefined (because private field)
module.exports = { API };
