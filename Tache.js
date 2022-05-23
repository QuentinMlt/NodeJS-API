class Collection{
    constructor(collectionName) {
      this.collectionName = collectionName;
      this.memoryDb = new Map();
      this.id = 0;
    }
}