"use strict";

var expect = require('chai').expect,
    whatIsInAName = require('./whereforeArtThou.js');

describe('WhatIsInAName', function() {
    it('should return an array of all objects that have matching property and value pairs', function() {
        expect(whatIsInAName([
            {
                first: "Romeo",
                last: "Montague"
            }, {
                first: "Mercutio",
                last: null
            }, {
                first: "Tybalt",
                last: "Capulet"
            }
        ], {last: "Capulet"})).to.deep.equal([
            {
                first: "Tybalt",
                last: "Capulet"
            }
        ]);
    });
    it('should return an array of all objects that have matching property and value pairs', function() {
        expect(whatIsInAName([
            {
                "a": 1
            }, {
                "a": 1
            }, {
                "a": 1,
                "b": 2
            }
        ], {"a": 1})).to.deep.equal([
            {
                "a": 1
            }, {
                "a": 1
            }, {
                "a": 1,
                "b": 2
            }
        ]);
    });

    it('should return an array of all objects that have matching property and value pairs', function() {
        expect(whatIsInAName([
            {
                "a": 1,
                "b": 2
            }, {
                "a": 1
            }, {
                "a": 1,
                "b": 2,
                "c": 2
            }
        ], {
            "a": 1,
            "c": 2
        })).to.deep.equal([
            {
                "a": 1,
                "b": 2,
                "c": 2
            }
        ]);
    });

});
