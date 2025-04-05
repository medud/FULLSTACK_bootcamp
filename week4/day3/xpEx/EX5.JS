class Labrador extends Dog {
    constructor(name, size) {
      super(name); // ✅ Calls the parent class (Dog) constructor
      this.size = size;
    }
  };