let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);
const url = "http://localhost:3000/api/v1";

describe("#Customers Network.js: ", () => {
  // eslint-disable-next-line no-unused-vars
  let customerId;

  it("POST /customers    create customer status 201", (done) => {
    chai
      .request(url)
      .post("/customers/")
      .send({
        "name": "andres",
        "password": "12345"
      })
      .end(function (err, res) {
        expect(res).to.have.status(201);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body.id).to.exist;
        customerId = res.body.body.id || null;
        done();
      });
  });

  it("POST /customers    create customer status 400 email and password required", (done) => {
    chai
      .request(url)
      .post("/customers/")
      .send({
        name: ""
      })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body.error[0]).to.be.equal("\"email\" is required");
        expect(res.body.error[1]).to.be.equal("\"password\" is required")
        expect(res.body.body).to.be.equal("");
        done();
      });
  });

  it("POST /customers    create customer status 409 email must be unique", (done) => {
    chai
      .request(url)
      .post("/customers/")
      .send({
        "email": "andres@gmail.com",
        "password": "12345"
      })
      .end(function (err, res) {
        expect(res).to.have.status(409);
        expect(res.body.error).to.be.equal("email must be unique");
        expect(res.body.body).to.be.equal("");
        done();
      });
  });

  it("PATCH /customers    Modify customer's email status 200", (done) => {
    chai
      .request(url)
      .patch("/customers/")
      .send({
        "id": customerId,
        "email": "ambro@gmail.com",
      })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body[0]).to.be.equal(1);
        done();
      });
  });

  it("PATCH /customers    Modify customer's email status 400 id required", (done) => {
    chai
      .request(url)
      .patch("/customers/")
      .send({
      })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body.error[0]).to.be.equal("\"id\" is required");
        expect(res.body.body).to.be.equal("");
        done();
      });
  });

  it("GET /customers    Get customers status 200", (done) => {
    chai
      .request(url)
      .get("/customers")
      .send({ name: "mochuelo46", customerId: "" })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body).to.be.an("array");
        done();
      });
  });

  it("GET /customers    Get customer by id status 200", (done) => {
    chai
      .request(url)
      .get("/customers")
      .send({ id: customerId, name: "" })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body.email).to.be.equal("ambro@gmail.com");
        done();
      });
  });

  it("DELETE /customer    delete customer status 200", (done) => {
    chai
      .request(url)
      .delete("/customers")
      .send({
        id: customerId,
      })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body).to.be.equal(1);
        done();
      });
  });

  it("DELETE /customer    delete customer status 400", (done) => {
    chai
      .request(url)
      .delete("/customers")
      .send({
        customerId: "",
      })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body.error[0]).to.be.equal(
          "\"id\" is required"
        );
        expect(res.body.body).to.be.equal("");
        done();
      });
  });
});
