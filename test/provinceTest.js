var assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const Province = require('../src/Province')

describe('province', function () {
    it('shortfall', function () {
        let asia = new Province(sampleProvinceData());
        expect(asia.shortfall).equal(5);
    });
});


function sampleProvinceData() {
    return {
        name: "Asia",
        producers: [
            {name: "Byzantium", cost: 10, production: 9},
            {name: "Attalia", cost: 12, production: 10},
            {name: "Sinope", cost: 10, production: 6},
        ],
        demand: 30,
        price: 20
    };
}
