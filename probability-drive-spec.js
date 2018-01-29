const chai = require('chai');
const expect = chai.expect;
const ProbabilityDrive = require('./probability-drive');

describe('ProbabilityDrive', function(){

  it('rescues Arthur Dent and Ford Prefect from open space, if probability under two to the power of 276,709 to one against', function(){
    let rescued = ProbabilityDrive.calculate(Math.pow(2, 276709)-1)
    expect(rescued).to.be.true
  });

});
