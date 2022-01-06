export interface NumberFormat {
  // the maximum count of numbers after the decimal separator 
  fractionalLength: number,
  // the maximum count of numbers before the decimal separator
  integerLength: number,
  // the total number of characters needed to format the number
  totalLength: number
}

const DECIMAL_SEPARATOR = '.';
const DECIMAL_SEPARATOR_LENGTH = DECIMAL_SEPARATOR.length;

/**
 * calculates the length needed to list all value aligned at the 
 * decimal separator
 * 
 * @param numberFormat the number format of the list
 * @param the length needed to show all numbers aligned at the 
 * decimal separator
 */
function _getTotalLength(numberFormat: NumberFormat): number {
  let decimalSeparatorLength = DECIMAL_SEPARATOR_LENGTH;
  if (numberFormat.fractionalLength == 0) {
    // there is no DECIMAL_SEPARATOR needed
    decimalSeparatorLength = 0;
  }
  return numberFormat.integerLength + decimalSeparatorLength + numberFormat.fractionalLength;
}


/**
 * gets the max length the numbers parts (integer/fraction) in the list,
 * needed to output the at console as table
 * 
 * @param numberValues the list of numbers to be analysed
 * @returns the number format description,
 */
export function getNumberFormat(numberValues: number[]): NumberFormat {
  const numberFormat: NumberFormat = {
    integerLength: 0,
    fractionalLength: 0,
    totalLength: 0
  };

  numberValues.forEach((numberValue: number) => {
    const numberString: string = numberValue.toString();
    const [integerPart, fractionalPart] = numberString.split(DECIMAL_SEPARATOR);
    numberFormat.integerLength = Math.max(numberFormat.integerLength, (integerPart || '').length);
    numberFormat.fractionalLength = Math.max(numberFormat.fractionalLength, (fractionalPart || '').length);
  });
  numberFormat.totalLength = _getTotalLength(numberFormat);

  return numberFormat;
}

