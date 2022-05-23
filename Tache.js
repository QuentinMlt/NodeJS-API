class Collection{
    constructor(collectionName) {
      this.collectionName = collectionName;
      this.memoryDb = new Map();
      this.id = 0;
    }
    insertOne(obj) {
        this.memoryDb.set(this.id, obj);
        return { id: this.id++, inserted: obj };
      }
    getAll() {
        return Object.fromEntries(this.memoryDb);
    }
}

module.exports = Collection;