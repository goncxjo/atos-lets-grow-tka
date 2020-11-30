import { NameStartsWithPipe } from './name-starts-with.pipe';

describe('NameStartsWithPipe', () => {
  it('create an instance', () => {
    const pipe = new NameStartsWithPipe();
    expect(pipe).toBeTruthy();
  });
});
