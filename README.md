# number-format-analyzer
Analyzes a list of numbers to be able to output them formatted as a list as good as possible aligned at
the decimal separator

## Usage

```TypeScript
import numberListAnalyzer from 'numberListAnalyzer';
const numbers: number[] = [
  1,
  1.5
  12,
  1.567,
  3.1462e-5
]

const numberFormatConfig = numberListAnalyzer(numbers)
console.log(numberFormatConfig.integerLength)
console.log(numberFormatConfig.fractionalLength)
console.log(numberFormatConfig.totalLength)

->
2 // two digit of 12
9 // 4 fractional digits and the exponent of -5
12 // all digits and the decimal separator
```
The values could be used to output the numbers like that: 
```Text
   1
   1.5
  12
   1.567
   0.000031462

```

The `totalLength` allows the user to change the `fractionalLength` and the `integerLength` in the
postprocessing. The `totalLength`would return the 
changed value. This could be user to limit the number of fractional digit to specific maximum.

You could change the `fractionalLength` of the above 
example to limit the `fractionalLength` to 5 digist.
The `totalLength` would change to 7

```TypeScript
numberFormatConfig.fractionalLength = Math.min(numberFormatConfig.fractionalLength, 5);
console.log(numberFormatConfig.totalLength);
->
7
```
