import { Dog } from './dog';

describe('Dog', () => {
  it('should create an instance', () => {
    expect(new Dog(0,new Date ,"" , "", "", new Date, "")).toBeTruthy();
  });
});
