let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);
const url = "http://localhost:3000/api/v1";

describe("#Orders Network.js: ", () => {
  // eslint-disable-next-line no-unused-vars
  let orderId;
  let userId;
  // eslint-disable-next-line no-unused-vars
  let customerId;

  it("POST /orders    create orders status 201", (done) => {
    chai
      .request(url)
      .post("/users/")
      .send({
        "email": "andres5656@gmail.com",
        "password": "123456789"
      })
      .then( res => {
        userId = res.body.body.id || null;

        chai
        .request(url)
        .post("/customers/")
        .send({
          "name": "Andrese",
          "lastName": "Barrososo",
          "phone": "1203",
          "userId": userId
        })
      })
      .then( res => {
        customerId = res.body.body.id || null;

        chai
        .request(url)
        .post("/orders/")
        .send({
          "customerId": customerId
        })
        .end(function (err, res) {
          expect(res).to.have.status(201);
          expect(res.body.error).to.be.equal("");
          expect(res.body.body.id).to.exist;
          done();
        });
      })
  });

  // it("POST /orders    create user status 400 id required", (done) => {
  //   chai
  //     .request(url)
  //     .post("/orders/")
  //     .send({
  //     })
  //     .end(function (err, res) {
  //       expect(res).to.have.status(400);
  //       expect(res.body.error[0]).to.be.equal("\"id\" is required");
  //       expect(res.body.body).to.be.equal("");
  //       done();
  //     });
  // });

  // it("GET /orders    Get user by id status 200", (done) => {
  //   chai
  //     .request(url)
  //     .get("/users")
  //     .send({ id: orderId })
  //     .end(function (err, res) {
  //       expect(res).to.have.status(200);
  //       expect(res.body.error).to.be.equal("");
  //       expect(res.body.body.Customer.User.email).to.be.equal("andres@gmail.com");
  //       done();
  //     });
  // });
});
