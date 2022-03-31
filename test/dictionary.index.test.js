// const dictionaryIndex = require('../src/index');
const dictionaryService = require('../src/services/dictionary_service');
// const assert = require('assert');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sinonChai = require("sinon-chai");
chai.use(sinonChai);


describe('Test', function () {

    it("should add a member into dictionary", () => {
        // const result = dictionaryService.addKey("foo", "bar");
        // const input = result["foo"];
        // const output = "bar";
        // assert.equal(input, output);
        sinon.spy(console, "log");
        dictionaryService.addKey("foo", "bar");

        // let stubService = sinon.stub(dictionaryService, "addKey").returns(dictionary);
        
        expect(console.log).to.have.been.c;
        // assert.calledOnce(consoleLogSpy);

        // console.log("STUB", stubService);
        // const result = dictionaryService.addKey("foo", "bar");
        // const input = result["foo"];
        // const output = "bar";
        // assert.equal(input, output);
    })

})
// exports.testAddKey = () => {
//     const result = dictionaryService.addKey("foo", "bar");
//     const input = result["foo"];
//     const output = "bar";
//     assert.equal(input, output);
   
// }
