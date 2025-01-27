// palindrome or not
function isPalindromeArray(arr) {
    let start = 0, end = arr.length - 1;
  
    while (start < end) {
      if (arr[start] !== arr[end]) {
        return false; // Not a palindrome
      }
      start++;
      end--;
    }
  
    return true; // It's a palindrome
  }
  
  // Example usage:
  console.log(isPalindromeArray([1, 2, 3, 2, 1]));





  
// remove negative number and push postive number
function filterAndPushPositiveNumbers(arr) {
    // Filter out negative numbers
    const positiveNumbers = arr.filter(num => num >= 0);
  
    // Push positive numbers into a new array
    const newArray = [];
    positiveNumbers.forEach(num => newArray.push(num));
  
    return newArray;
  }
  
  // Example usage:
  const numbers = [-10, 15, -20, 30, -5, 50];
  console.log(filterAndPushPositiveNumbers(numbers)); // Output: [15, 30, 50]
  




// second largest element witout sorting
  function findSecondLargest(arr) {
    let largest = null, secondLargest = null;
  
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }
  
    return secondLargest;
  }
  
  // Example usage:
  const number = [10, 20, 30, 40, 50];
  console.log(findSecondLargest(number)); // Output: 40