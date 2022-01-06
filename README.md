# number-format-analyzer
Analyzes a list of numbers to be able to output them formatted as a list as good as possible aligned at
the decimal separator

## Usage
```
import numberListAnalyzer from 'numberListAnalyzer';
const numbers: number[] = [
  1,
  1.5
  12,
  1.567
]

const numberFormatConfig = numberListAnalyzer(numbers)
console.log(numberFormatConfig.integerLength)
console.log(numberFormatConfig.fractionalLength)
console.log(numberFormatConfig.totalLength)

```
->
```
2
3
6
```
The values could be used to output the numbers like that: 
```
   1
   1.5
  12
   1.567

```

The function could be used to transform a list of numbers


