function Ship(port) {
    this.startingPort = port;
  }
  
  Ship.prototype = {
    setSail() {
      this.startingPort = null;
    },
  };
  
  module.exports = Ship;