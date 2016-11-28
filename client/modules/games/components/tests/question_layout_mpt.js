// const {describe, it} = global;
// import {expect} from 'chai';
// import {shallow} from 'enzyme';
// import {shallow, mount} from 'enzyme';
// import {assert} from 'chai';
// import QuestionLayoutMpt from '../question_layout_mpt';
//
// describe('games.components.question_layout_mpt', () => {
//   it('should do something');
// });
const {describe, it} = global;
// import {expect} from 'chai';
// import {shallow} from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import { assert , expect } from 'chai';
import QuestionLayoutMpt from '../question_layout_mpt';

describe('games.components.question_layout_mpt', () => {
  it('should test tea tests', () => {
    let foo = 'bar4';
    let beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
    expect(foo).to.have.length(3);
    expect(beverages).to.have.property('tea').with.length(3);
  });
});
