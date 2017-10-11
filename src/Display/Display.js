import React from 'react';

const Display = ({ displayValue }) => {

  const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']

  const convertEnglish = (value) => {
    const index = numbers.findIndex(number => value.includes(number))

    if (index >= 0 && index < 10) {
      const wordArray = value.split(' ');
      const replaceWords = wordArray.map(word => {
        if (word === numbers[index]) { return numbers[index+1] }
        else { return word }
      }).join(' ')

      return replaceWords
    }
  }

  return (
    <div className='display'>
      {convertEnglish(displayValue) || displayValue}
    </div>
  )
}

export default Display;
