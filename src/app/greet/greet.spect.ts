import {greet} from './greet';
describe('greet', () => {
  it('should return a greeting message with the provided name', () => {
    expect(greet('adsoft')).toContain('adsoft');
  })
})
