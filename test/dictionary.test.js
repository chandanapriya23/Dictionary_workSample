const dictionaryService = require('../src/services/dictionary_service');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
const message = require('../src/utils/messages');


describe('Add Key to dictionary', function () {
    afterEach( () => {
        sinon.restore();
    })

    it("should add a member into dictionary", () => {
        let consoleLogSpy = sinon.spy(console, "log");
        dictionaryService.addKey("foo", "bar");        
        expect(consoleLogSpy).to.have.been.calledWith(message.ADD_MESSAGE);
    })

    it("should throw error if member already exists", () => {
        dictionaryService.addKey("foo", "bar");        
        let consoleLogSpy = sinon.spy(console, "log");
        dictionaryService.addKey("foo", "bar");        
        expect(consoleLogSpy).to.have.been.calledWith(message.MEMBER_EXISTS_ERROR_MESSAGE);
    })

    it("should add a member to existing key", () => {
        let consoleLogSpy = sinon.spy(console, "log");
        dictionaryService.addKey("foo", "bax");        
        dictionaryService.addKey("foo", "bar");        
        expect(consoleLogSpy).to.have.been.calledWith(message.ADD_MESSAGE);
    })

})

describe('Items in dictionary', function () {
    afterEach( () => {
        sinon.restore();
    })

    it("should list an empty item from dictionary", () => {
        let consoleLogSpy = sinon.spy(console, "log");
        dictionaryService.items("foo", "bar");        
        expect(consoleLogSpy).to.have.been.calledWith(message.EMPTY_SET_MESSAGE);
    })

    // it("should list item from dictionary", () => {
    //     dictionaryService.items();
    //     let consoleLogSpy = sinon.spy(console, "log");       
    //     expect(consoleLogSpy).to.have.been.calledWith("{foo : bar}");
    // })

})



