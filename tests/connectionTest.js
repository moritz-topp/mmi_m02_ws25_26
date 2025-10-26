const chai = require("chai");
const supertest = require("supertest");
const server = require("../index");

chai.should();
const api = supertest.agent(server);

// Todo Unit Tests
