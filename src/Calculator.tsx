import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

/*
React.FC stands for "Functional Component".
  It's a TypeScript type that helps you define React functional components. 
When you use React.FC, you get a few benefits and some built -in types for free.
*/

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    return () => {};
  }, []);

  const handlePress = (value: string) => {
    console.log('[handlePress]value : ', value);
    if (value === '.') {
      if (input === '' || input.endsWith(' ') || /[+\-*/]$/.test(input)) {
        // If "." is pressed and input is empty, ends with space, or ends with an operator, prepend "0."
        setInput(prevInput => prevInput + '0.');
      } else if (!/\.\d*$/.test(input)) {
        // If there's no decimal in the current number, allow adding "."
        setInput(prevInput => prevInput + value);
      }
    } else {
      setInput(prevInput => prevInput + value);
    }
    //setInput(prevInput => prevInput + value);
  };

  const handleClear = () => {
    console.log('[handleClear]');
    setInput('');
  };

  const handleBackspace = () => {
    console.log('[handleBackspace]');
    setInput(prevInput => prevInput.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      // Replace the '×' and '÷' with '*' and '/' respectively for eval to work correctly
      const sanitizedInput = input.replace(/×/g, '*').replace(/÷/g, '/');

      // Evaluate the expression
      const result = eval(sanitizedInput);
      console.log('check result : ', result);

      // Set the result as the new input
      setInput(result.toString());
    } catch (error) {
      // If there's an error in evaluation, set the input to 'Error'
      setInput('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{input || '0'}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={handleClear}>
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('/')}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('*')}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCalculate}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleBackspace}>
            <Text style={styles.buttonText}>←</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  result: {
    fontSize: 48,
    color: '#fff',
    textAlign: 'right',
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 1,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 32,
    color: '#fff',
  },
});

export default Calculator;
