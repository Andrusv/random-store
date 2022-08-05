let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;

const { User } = require("./user.network.test")

chai.use(chaiHttp);
const url = "http://localhost:3000/api/v1";

class Customer {
  constructor(name, lastName, phone) {
    this.name = name;
    this.lastName = lastName;
    this.phone = phone;
    this.customerId = "";
  }

  createCustomer(userId) {
    return chai
    .request(url)
    .post("/customers/")
    .send({
      "name": "Andres",
      "lastName": "Barroso",
      "phone": "1203948234",
      "userId": userId
    })
  }

  deleteCustomer(customerId) {
    return chai
    .request(url)
    .delete("/customers/")
    .send({
      id: customerId,
    })
  }

}

describe("#Customers Network.js: ", () => {

  const user = new User("andres@gmail.com" , "12345");
  const customer = new Customer("Andres", "Barroso", "1203948234")

  it("POST /customers    create customer status 201", (done) => {

    user.createUser().then(res => user.userId = res.body.body.id || null).then(() => {
      customer.createCustomer(user.userId)
      .end(function (err, res) {
        expect(res).to.have.status(201);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body.id).to.exist;
        customer.customerId = res.body.body.id || null;
        done();
      });
    })
  });

  it("POST /customers    create customer status 400 name and userId required", (done) => {
    chai
      .request(url)
      .post("/customers/")
      .send({
        "lastName": "Barroso",
        "phone": "1203948234",
      })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        expect(res.body.error[0]).to.be.equal("\"name\" is required");
        expect(res.body.error[1]).to.be.equal("\"userId\" is required")
        expect(res.body.body).to.be.equal("");
        done();
      });
  });

  it("POST /customers    create customer status 409 userId must be unique", (done) => {
    chai
      .request(url)
      .post("/customers/")
      .send({
        "name": "eeee",
        "lastName": "ssss",
        "phone": "656",
        "userId": user.userId
      })
      .end(function (err, res) {
        expect(res).to.have.status(409);
        expect(res.body.error).to.be.equal("user_id must be unique");
        expect(res.body.body).to.be.equal("");
        done();
      });
  });

  it("POST /customers    create customer status 409 userId does not exist", (done) => {
    chai
      .request(url)
      .post("/customers/")
      .send({
        "name": "eeee",
        "lastName": "ssss",
        "phone": "656",
        "userId": "123e4567-e89b-12d3-a456-426614174000"
      })
      .end(function (err, res) {
        expect(res).to.have.status(409);
        expect(res.body.error).to.be.equal("Error en base de datos");
        expect(res.body.body).to.be.equal("");
        done();
      });
  });

  it("PATCH /customers    Modify customer's name status 200", (done) => {
    chai
      .request(url)
      .patch("/customers/")
      .send({
        "id": customer.customerId,
        "name": "ambrossini",
      })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body[0]).to.be.equal(1);
        done();
      });
  });

  it("PATCH /customers    Modify customer's name status 400 id required", (done) => {
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

  it("GET /customers    Get customer by id status 200", (done) => {
    chai
      .request(url)
      .get("/customers")
      .send({ "id": customer.customerId })
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body.name).to.be.equal("ambrossini");
        done();
      });
  });

  it("DELETE /customer    delete customer status 200", (done) => {
      customer.deleteCustomer(customer.customerId)
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.error).to.be.equal("");
        expect(res.body.body).to.be.equal(1);

        user.deleteUser(user.userId)
        // eslint-disable-next-line no-unused-vars
        .end( function (err, res) {

        done();
        })
      })
  });

  it("DELETE /customer    delete customer status 400", (done) => {
    chai
      .request(url)
      .delete("/customers")
      .send({
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


module.exports = { Customer }
