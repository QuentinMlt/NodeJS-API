const request = require("supertest");
const db = require("../Tache");
const app = require("../app");
const mapToObj = (m) => {
  return Array.from(m).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
};

describe("Mon API CRUD", () => {

  beforeEach(()=>{
    db['memoryDb'] = new Map();
    db['id'] = 0;
    db['memoryDb'].set(db['id']++, { description: "Insertion1", faite: true }) 
    db['memoryDb'].set(db['id']++, { description: "Insertion2", faite: false })
    
  })

  it("GET /api/taches retourne JSON de la database", async () => {
    const res = await request(app)
      .get("/api/taches")
      .expect(200)
      .expect("content-type", /json/);
  });


 
  test.each([
    {description: "Description 1", faite: true},
    {description: "Description 2", faite: false},
    {description: "Description 3", faite: true}
  ])('envoie des tests dajout', async (objectTest) => {
    const result = await request(app)
    .post('/api/taches/add')
    .send(objectTest)
    .expect(201);
  });
});