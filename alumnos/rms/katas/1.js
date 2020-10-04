let myNumbers = [10, 5, 3, 80, 1, 0];
let sortedNumbers = [];

    function sortNumbers(numbers) {
      let indexOfSmallest = 0;
      let smallestNumber = numbers[0];
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallestNumber) {
          smallestNumber = numbers[i];
          indexOfSmallest = i;
        }
      }
      sortedNumbers.push(smallestNumber);
      numbers.splice(indexOfSmallest, 1);

      while(numbers.length != 0) {
        sortNumbers(numbers);
        return sortedNumbers;
      }
    }

findSmallest(myNumbers);
