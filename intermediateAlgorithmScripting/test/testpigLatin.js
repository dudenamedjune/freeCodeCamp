"use strict";

var should = require("chai").should(),
    translaterPigLatin = require("../pigLatin");

describe("TranslatePigLatin", function() {
    it('translatePigLatin("california") should return "aliforniacay"', function() {
        translatePigLatin("california").should.equal("aliforniacay");
    });

    it('translatePigLatin("paragraphs") should return "aragraphspay"', function() {
        translatePigLatin("paragraphs").should.equal("aragraphspay");
    });

    it('translatePigLatin("glove") should return "oveglay"', function() {
        translatePigLatin("glove").should.equal("oveglay");
    });

    it('translatePigLatin("algorithm") should return "algorithmway"', function() {
        translatePigLatin("algorithm").should.equal("algorithmway");
    });
    it('translatePigLatin("eight") should return "eightway"', function() {
        translatePigLatin("eight").should.equal("eightway");
    });

});
