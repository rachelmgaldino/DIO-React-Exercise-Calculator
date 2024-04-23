import Input from './components/Input';
import Button from './components/Button';
import ButtonDW from './components/Button/indexDW';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => {
      if (prev === '0') {
        // If the current number is "0", add the decimal or the new number
        if (num === '.') {
          return '0.'; // Return "0." when adding a decimal
        } else {
          return num; // Replace "0" with the new number
        }
      } else {
        if (prev === '0.' && num === '.') {
          // Prevent multiple decimals
          return prev;
        }
        return `${prev}${num}`; // Append the new number/decimal to the existing value
      }
    });
  };

  const handleSumNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        default:
          break;
      }
    }

  }

  const handleToggleSign = () => {
    setCurrentNumber((prev) => {
      if (prev.startsWith('-')) {
        return prev.replace('-', ''); // if the number is negative, remove the negative sign
      } else {
        return `-${prev}`; // if the number is positive, add the negative sign
      }
    })
  }

  const handlePercentage = () => {
    setCurrentNumber((prev) => {
      return String(Number(prev) / 100); // divide the number by 100
    })
  }

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      // If firstNumber is '0', set it to the current number and set the operation to '/'
      setFirstNumber(String(currentNumber));
      setCurrentNumber(''); // Clear current number for next input
      setOperation('/'); // Set the operation to division
    } else {
      if (Number(currentNumber) === 0) {
        // Check if currentNumber is zero to prevent division by zero
        alert("Cannot divide by zero"); // Show an error message
      } else {
        // Divide firstNumber by currentNumber
        const divide = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(divide)); // Set the result as the current number
        setFirstNumber('0'); // Reset firstNumber
        setOperation(''); // Clear operation
      }
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      // If firstNumber is '0', set it to the current number and set the operation to '*'
      setFirstNumber(String(currentNumber));
      setCurrentNumber(''); // Clear current number for next input
      setOperation('*'); // Set the operation to multiplication
    } else {
      // Multiply firstNumber by currentNumber
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply)); // Set the result as the current number
      setFirstNumber('0'); // Reset firstNumber
      setOperation(''); // Clear operation
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="AC" onClick={handleOnClear} />
          <Button label="±" onClick={handleToggleSign} />
          <Button label="%" onClick={handlePercentage} />
          <Button label="÷" onClick={handleDivideNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <ButtonDW label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
