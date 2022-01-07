import { expect } from "chai";
import { getNumberFormat, NumberFormat } from "./getNumberFormat";

describe('getNumberFormat', () => {
  it('results in all parts have a zero length for an empty lists', () => {
    const numberList: number[] = [];

    const numberFormat: NumberFormat = getNumberFormat(numberList);

    expect(numberFormat).to.eql({
      fractionalLength: 0,
      integerLength: 0,
      totalLength: 0
    } as NumberFormat);
  });

  it('integerLength returns the maximum length of the integer part of all values', () => {
    const numberList: number[] = [
      12,
      1.5,
      1358,
    ];

    const numberFormat: NumberFormat = getNumberFormat(numberList);

    expect(numberFormat.integerLength).to.eql(4);
  });

  it('fractionalLength returns the maximum length of the fraction part of all values', () => {
    const numberList: number[] = [
      12,
      1.5,
      1.358,
    ];

    const numberFormat: NumberFormat = getNumberFormat(numberList);

    expect(numberFormat.fractionalLength).to.eql(3);
  });

  it('the totalLength return the maximum length needed to align all values by the decimal point', () => {
    const numberList: number[] = [
      12,
      1.5,
      1.358,
    ];

    const numberFormat: NumberFormat = getNumberFormat(numberList);

    expect(numberFormat.totalLength).to.eql(6);
  });

  it('the totalLength does not include a decimal for only integer values', () => {
    const numberList: number[] = [
      12,
      15,
      1358,
    ];

    const numberFormat: NumberFormat = getNumberFormat(numberList);

    expect(numberFormat.totalLength).to.eql(4);
  });

  it('the totalLength includes the generated leading zero and the decimal ' +
    'separator length for only fractional values', () => {
      const numberList: number[] = [
        .12,
        .15,
        .1358,
      ];

      const numberFormat: NumberFormat = getNumberFormat(numberList);

      expect(numberFormat.totalLength).to.eql(6);
    });

  it('adapt the totalLength if the fractional part changes', () => {
    const numberList: number[] = [
      .12,
      .15,
      .1358,
    ];

    const numberFormat: NumberFormat = getNumberFormat(numberList);
    numberFormat.fractionalLength = 2;
    expect(numberFormat.totalLength).to.eql(4);
  });
});
