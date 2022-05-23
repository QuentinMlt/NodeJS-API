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
    getOne(id) {
      if (this.exists(id)) {
        return this.memoryDb.get(id);
      } else {
        throw new Error(`Key : ${id} doesn't exists`);
      }
    }
    exists(id) {
      return this.memoryDb.has(id);
    }
}

module.exports = Collection;