let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
const { User } = require('./user.network.test')
const { Customer } = require('./customer.network.test')

chai.use(chaiHttp);
const url = "http://localhost:3000/api/v1";

class Orders {
  constructor() {
    this.orderId = "";
  }

  createOrder(customerId) {
    return chai
    .request(url)
    .post("/orders/")
    .send({
      "customerId": customerId
    })
  }

  deleteOrder(orderId) {
    return chai
    .request(url)
    .delete("/orders/")
    .send({
      id: orderId,
    })
  }
}

describe("#Orders Network.js: ", () => {

  const user = new User("andres@gmail.com" , "12345");
  const customer = new Customer("Andres", "Barroso", "1203948234")
  const order = new Orders();

  it("POST /orders    create orders status 201", (done) => {
    user.createUser()
      .then( res => {
        user.userId = res.body.body.id || null;

        return customer.createCustomer(user.userId)
      })
      .then( res => {
        customer.customerId = res.body.body.id || null;

        order.createOrder(customer.customerId)
        .end(function (err, res) {
          order.orderId = res.body.body.id || null;

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

  it("DELETE /order    delete order status 200", (done) => {

    order.deleteOrder(order.orderId)
    .end( function(err,res) {

      expect(res).to.have.status(200);
      expect(res.body.error).to.be.equal("");
      expect(res.body.body).to.be.equal(1);

      customer.deleteCustomer(customer.customerId)
      // eslint-disable-next-line no-unused-vars
      .end(function (err, res) {
        user.deleteUser(user.userId)
        // eslint-disable-next-line no-unused-vars
        .end( function (err, res) {
        done();
        })
      })
    })
  })
});
