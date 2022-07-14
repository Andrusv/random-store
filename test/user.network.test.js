let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);
const url = "http://localhost:3000/api/v1";

describe("#Users Network.js: ", () => {
  // eslint-disable-next-line no-unused-vars
  let userId;

  it("POST /users    create user status 201", (done) => {
    chai
      .request(url)
      .post("/users/")
      .send({
        "email": "andres@gmail.com",
        "password": "12345"
      })
      .end(function (err, res) {
        expect(res).to.have.status(201);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body.id).to.exist;
        userId = res.body.body.id || null;
        done();
      });
  });

  it("POST /users    create user status 400 email and password required", (done) => {
    chai
      .request(url)
      .post("/users/")
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

  it("POST /users    create user status 409 email must be unique", (done) => {
    chai
      .request(url)
      .post("/users/")
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

  it("PATCH /users    Modify user's email status 200", (done) => {
    chai
      .request(url)
      .patch("/users/")
      .send({
        "id": userId,
        "email": "ambro@gmail.com",
      })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body[0]).to.be.equal(1);
        done();
      });
  });

  it("PATCH /users    Modify user's email status 400 id required", (done) => {
    chai
      .request(url)
      .patch("/users/")
      .send({
      })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body.error[0]).to.be.equal("\"id\" is required");
        expect(res.body.body).to.be.equal("");
        done();
      });
  });

  it("GET /users    Get users status 200", (done) => {
    chai
      .request(url)
      .get("/users")
      .send({ name: "mochuelo46", userId: "" })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body).to.be.an("array");
        done();
      });
  });

  it("GET /users    Get user by id status 200", (done) => {
    chai
      .request(url)
      .get("/users")
      .send({ id: userId, name: "" })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body.email).to.be.equal("ambro@gmail.com");
        done();
      });
  });

  it("DELETE /user    delete user status 200", (done) => {
    chai
      .request(url)
      .delete("/users")
      .send({
        id: userId,
      })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body).to.be.equal(1);
        done();
      });
  });

  it("DELETE /user    delete user status 400", (done) => {
    chai
      .request(url)
      .delete("/users")
      .send({
        userId: "",
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
