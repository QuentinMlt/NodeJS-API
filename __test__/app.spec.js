const request = require("supertest");
const db = require("../Tache");
const app = require("../app");


describe("Mon API CRUD CONTROLE 2", () => {

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

  it("GET /api/taches/id retourne la tache avec l'id", async () => {
    const tacheId = 1;
    const res = await request(app)
      .get("/api/taches/" + tacheId)
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