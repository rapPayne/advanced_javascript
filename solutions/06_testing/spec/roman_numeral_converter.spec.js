import convert from '../src/roman_numeral_converter';

describe('Roman numeral converter', () => {
  it('will return 1 given i', () => {
    let actual = convert('i');
    expect(actual).toEqual(1);
  });
});
