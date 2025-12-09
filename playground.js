/*

gcf:

Question 1 of 4

Given an array of integers numbers, construct a new array in the following manner:
The first element of the new array is the first element of numbers;
The second element of the new array is the last element of numbers;
The third element of the new array is the second element of numbers;
The fourth element of the new array is the second-to-last element of numbers;
... and so on, until the new array contains all elements of numbers.
Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(numbers.length2) will fit within the execution time limit.
Example
For numbers = [0, 4, 3, 2, 1], the output should be solution(numbers) = [0, 1, 4, 2, 3].
 Explanation:
 Following the rules above, we get the following sequence numbers[0], numbers[4], numbers[1], numbers[3], numbers[2], which results in [0, 1, 4, 2, 3].


For numbers = [-5, 4, 0, 3, 2, 2], the output should be solution(numbers) = [-5, 2, 4, 2, 0, 3].
 Explanation:
 Following the rules above, we get the following sequence numbers[0], numbers[5], numbers[1], numbers[4], numbers[2], numbers[3], which results in [-5, 2, 4, 2, 0, 3].


Input/Output
[execution time limit] 4 seconds (js)


[memory limit] 1 GB


[input] array.integer numbers

 An array of integers.

 Guaranteed constraints:
 3 ≤ numbers.length ≤ 1000,
 -1000 ≤ numbers[i] ≤ 1000.


[output] array.integer

 An array of integers constructed as described above.



 A:

Intialize a res array
initalize two variables, one called left; which will be the starting point of numbers and right which will be the last index of numbers

 iterate through nums array
    take the first index of nums array and push it into res array
    then push the last index of nums array in to res array

return res array


E:

numbers = [0, 4, 3, 2, 1]
                 l           
                 r

left = numbers[0]
right = numbers[numbers.length - 1]

curr = null

res [0, 1, 4, 2, 3]



solution(numbers) = [0, 1, 4, 2, 3]
*/



const questionOneSolution = (nums) => {
    const res = []

    let l = 0, r = nums.length - 1

    while(l <= r) {
        res.push(nums[l])
        l++
        res.push(nums[r])
        r--
    }
    
    res.pop()
    return res
    
}

// console.log(solution([0, 4, 3, 2, 1]))//solution(numbers) = [0, 1, 4, 2, 3]


/*

prefixesSrcString: 


For a given string src and an array of strings strings, the string src is said to be a prefix-string of strings if it is a concatenation of several consecutive elements from the beginning of the strings array. More formally, src is a prefix-string of strings if there exists some index i ≥ 0, such that src = strings[0] + strings[1] + ... + strings[i].
For example, consider an array strings = ["one", "two", "three"].
src = "one" is a prefix-string of the strings array, as strings[0] = src = "one",
src = "onetwo" is a prefix-string of the strings array, as strings[0] + strings[1] = src = "onetwo",
src = "onetw" is not a prefix-string of the strings array,
src = "onethree" is not a prefix-string of the strings array.
Task: Given two arrays of strings and sources, for each element in sources, find out whether it is a prefix-string of strings. As a result, return an array of length sources.length, where the ith element is true if sources[i] is a prefix-string of strings, and false otherwise.
Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(strings.length2 × sources.length) will fit within the execution time limit.

Example 
For strings = ["one", "two", "three"] and sources = ["onetwo", "random", "one", "twoone", "twothree"], the output should be
 solution(strings, sources) = [true, false, true, false, false].


sources[0] = "onetwo" is a prefix-string, as strings[0] + strings[1] = sources[0] = "onetwo", so true is appended to the result.
sources[1] = "random" is not a prefix-string, so false is appended to the result.
sources[2] = "one" is a prefix-string, as strings[0] = sources[2] = "one", so true is appended to the result.
sources[3] = "twoone" is not a prefix-string. It may be obtained by evaluating strings[1] + strings[0], but it is not a consecutive concatenation. Sofalse is appended to the result.
sources[4] = "twothree" is not a prefix-string. It may be obtained by evaluating strings[1] + strings[2], but it is not a concatenation of the first elements of the strings array, as it doesn't start with strings[0]. Sofalse is appended to the result.
Thus, the resulting array is [true, false, true, false, false].


Input/Output
[execution time limit] 4 seconds (js)


[memory limit] 1 GB


[input] array.string strings

 An array of strings. It is guaranteed that each element only consists of English letters.

 Guaranteed constraints:
 1 ≤ strings.length ≤ 100,
 1 ≤ strings[i].length ≤ 100.


[input] array.string sources

 An array of strings. It is guaranteed that each element only consists of English letters.

 Guaranteed constraints:
 1 ≤ sources.length ≤ 100,
 1 ≤ sources[i].length ≤ 100.


[output] array.boolean

 For every string in sources array, return true if it is a prefix-string of strings, and false otherwise.


A:

initalize res array empty

store the combo fucntion within a varibale called setEvaluation

iterate through source array
    
    if the source[i] is included within the set
        push true in res array
    else
        push false in res array

return res


helper function:

initialize a new set (setEvaulation) that is empty 
initialize an empty string sequence

iterate through the strings array
    sequence += strings[i]

    setEvaluation(sequence)

return setEvaluation
*/

const questionTwoSolution = (strs, srcs) => {

    function combo(strs) {
        const setEvaluation = new Set()
    
        let sequence = ''
    
        for (const str of strs) {
            sequence += str
            setEvaluation.add(sequence)
        }
    
        return setEvaluation
    }

    const res = []

    const setEvaluation = combo(strs)

    for (const src of srcs) {
        if (setEvaluation.has(src)) res.push(true)
        else res.push(false)
    }

    return res

};



/* 
Given an array of integers numbers, distribute all of its integers between two arrays, first and second, based on the following rules:
The first number, numbers[0], goes to the first array.
The second number, numbers[1], goes to the second array.
Each following number, numbers[i] where i > 1, goes to the array with the higher number of elements that are strictly greater than the numbers[i]. 
In case of a tie, numbers[i] goes to the array with a lower length. If it is still a tie, numbers[i] goes to the first array.
Your task is to return a single array - the combination of first and second by appending all elements of second to the end of first.

Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(numbers.length2) will fit within the execution time limit.

Example
For numbers = [5, 7, 6, 9, 2], the output should be solution(numbers) = [5, 9, 2, 7, 6].
Explanation:
numbers[0] = 5 goes to the first array and numbers[1] = 7 goes to the second array. At this point, first = [5] and second = [7].
Considering numbers[2] = 6:
There are 0 elements in the first array that are greater than numbers[2] = 6,
There is 1 element in the second array that is greater than numbers[2] = 6,
As 1 > 0, numbers[2] goes to the second array,
At this point, first = [5] and second = [7, 6].
Considering numbers[3] = 9:
There are 0 elements in the first array that are greater than numbers[3] = 9,
There are 0 elements in the second array that is greater than numbers[3] = 9,
As 0 = 0, it is a tie, numbers[3] goes to the array with the lowest length, which is the first array,
At this point, first = [5, 9] and second = [7, 6].
Considering numbers[4] = 2:
There are 2 elements in the first array that are greater than numbers[4] = 2,
There are 2 elements in the second array that is greater than numbers[4] = 2,
As 2 = 2, it is a tie, numbers[4] should go to the array with the lowest length. As both arrays have equal length (first.length = second.length = 2), numbers[4] goes to the first array.
At this point, first = [5, 9, 2] and second = [7, 6].
Appending second to the end of first results in the following array: [5, 9, 2] + [7, 6] = [5, 9, 2, 7, 6].
Input/Output
[execution time limit] 4 seconds (js)


[memory limit] 1 GB


[input] array.integer numbers

 An array of integer numbers.

 Guaranteed constraints:
 2 ≤ numbers.length ≤ 103,
 0 ≤ numbers[i] ≤ 105.


[output] array.integer

 The result of appending second array to the end of the first array, after splitting all integers from numbers based on the rules described above.
*/

const numsArr = [5, 8, 4, 5, 6, 9, 1]

function solutionGCF(nums) {
    const firstArry = [nums[0]], secondArry = [nums[1]]

    for (let i = 2; i < nums.length; i++) {
        const cur = nums[i]
        let greatestFElement = 0, greatestSElement = 0
        
        for (let j = 0; j < firstArry.length; j++) {
            const curF = firstArry[j]
            if (curF > cur) greatestFElement++
        }

        for (let j = 0; j < secondArry.length; j++) {
            const curS = secondArry[j]
            if (curS > cur) greatestSElement++
        }

        if (greatestFElement > greatestSElement) {
            firstArry.push(cur)
        } else if (greatestSElement > greatestFElement) {
            secondArry.push(cur)
        } else if (firstArry.length > secondArry.length) {
            secondArry.push(cur)
        } else {
            firstArry.push(cur)
        }
        // console.log({greatestFElement, greatestSElement}) 
        // console.log({firstArry, secondArry})
    }
    
    return firstArry.concat(secondArry);
}

// console.log(solutionGCF(numsArr))
// console.log('hi')

/*
Let's say that array elements follow the alternating pattern if they alternate on even and odd positions (e.g. [1, 3, 1, 3, 1] or [3, 2, 3, 2]). The values on even and odd positions don't have to be different, so an array like [1, 1, 1, 1] is also alternating.
Given an array of integers numbers, find if there are elements in this array that break the alternating pattern. Return the index of the first element that breaks the alternating pattern, or -1 if there is no such element.
Example
For numbers = [1, 3, 1, 2, 1, 3], the output should be solution(numbers) = 3.
Since numbers[0] = numbers[2] = 1, numbers[1] = 3, the alternating pattern should be [1, 3, 1, 3, ...]. The first element to break this alternating pattern is numbers[3] = 2.
For numbers = [1, 3, 1, 3, 1, 3], the output should be solution(numbers) = -1.
The alternating pattern is also [1, 3, 1, 3, ...], but there aren't any elements that break this pattern.
*/


const numbers = [1, 3, 1, 2, 1, 3] //should be index 3
const numbers2 = [-1, 444, -1, 444, -1, 444, -1, -1, -442024811, 447425003] //should be index 7

function solutionAlternate (numbers) {
    if (numbers.length < 2) return -1

    const first = numbers[0], second = numbers[1]

    for (let i = 2; i < numbers.length; i++) {
        const cur = numbers[i]

        const isEvenPostiton = i % 2 === 0
        
        if (isEvenPostiton) {
            if (first !== cur) return i
        } else {
            if (second !== cur) return i
        }
    }   


    return -1
}

// console.log(solutionAlternate(numbers))


// Add Binary String
/*
Avoid using built-in big integers to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.

Given two binary strings a and b, add them together and return the resulting string.

Example

    For a = "1000" and b = "111", the output should be
    8 + 7
    15
    "1111"
    solution(a, b) = "1111";
    ---
    For a = "1" and b = "1", the output should be
    solution(a, b) = "10".



Input/Output

    [execution time limit] 4 seconds (js)

    [memory limit] 1 GB

    [input] string a

    A string that can contain only 0 and 1.

    Guaranteed constraints:
    0 ≤ a.length ≤ 105.

    [input] string b

    A string that can contain only 0 and 1.

    Guaranteed constraints:
    0 ≤ b.length ≤ 105.

    [output] string

    The result of adding strings a and b, without any leading zeros.

    examples:

    a: "10"
    b: "1"

    1       10


    1       1 0

        11


    solution: "11"

    a: "1101"
    b: "111"
    
    1101    111

    1 1 0 1     1 1 1 

    1211
    1 10 1 1

    solution: "10100"

    a: "1111001101011000001011000111100011101011110100101010010001110101011101010100101000001101000010000110001110100010011101011111111110110101100101110001010101011110001010000010111110011011"
    b: "111101101000010111101000101010001010010010010110011010100001000010110110110000110001101"

    solution: "1111001101011000001011000111100011101011110100101010010001110101011101010100101000001101000010001101111011100101011010100101010000000111111000100100101001100110100000111001000100101000"
*/


// console.log(parseInt("1000", 2).toString(2))

const main = () => {
    console.log(biToDeci("11001010"))
    console.log(deciToBi(202))
}

const biToDeci = (binary) => {
    let total = 0
    let power = binary.length - 1

    for (let digit of binary) {
        total += (2 ** power) * (+digit)
        power--
    }

    return total
}

const deciToBi = (num) => {
    let biStr = "", n = num

    while (n) {
        biStr += n % 2
        n = Math.floor(n /= 2)
    }

    return Number(biStr.split("").reverse().join(""))
}

// main()

/*
You are given a non-negative integer number represented as a string of digits, and a positive integer k. Your task is to perform the following algorithm:

    If the length of the number is less than or equal to k, end the algorithm. Otherwise proceed to the next steps;
    Split the number into groups of k digits in each. The last group may contain less than k digits;
    Add up the digits in each group, and concatenate these results in the same order;
    Replace the number with the result of step 3 and go back to step 1.

Return the resulting string number after the algorithm ends.

It is guaranteed that the algorithm will end at step 1 at some point.

Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(number.length × NUMBER_OF_STEPS) will fit within the execution time limit.

Example

    For number = "11111222322" and k = 3, the output should be solution(number, k) = "144".
    Expand to see the example video.

    Your browser does not support playing HTML5 video. You can instead.

    Note: If you are not able to see the video, use this link to access it.
        The number has length 11 > k, so we proceed to the next steps;
        We split number into groups of size k = 3: [111, 112, 223, 22]. Note that the last group is not full and has only two digits;
        We add up the digits in each group, and concatenate the results, obtaining [3, 4, 7, 4]. Thus, the new value of number becomes "3474";
        We start again with step 1: number has length 4 > k, so we proceed to the next steps;
        We split number into groups of size k = 3: [347, 4];
        We add up the digits in each group, and concatenate the results, the new number is "144";
        The length of the new number is 3 = k, so the algorithm ends with "144" as a result.

    For number = "1111122222" and k = 5, the output should be solution(number, k) = "510".
    Expand to see the example video.

    Your browser does not support playing HTML5 video. You can instead.

    Note: If you are not able to see the video, use this link to access it.
        We successfully proceed step 1 and split the number into groups of k = 5 digits on step 2: [11111, 22222];
        We add up the digits in each group, and concatenate the results, and the number becomes "510";
        The new number has length 3 < k, so we finish the algorithm and return the string "510".

Input/Output

    [execution time limit] 4 seconds (js)

    [memory limit] 1 GB

    [input] string number

    A string of digits representing the initial number. It is guaranteed that the given string contains only digits and doesn't contain leading zeros (unless the number is 0).

    Guaranteed constraints:
    1 ≤ number.length ≤ 1000.

    [input] integer k

    The size of the groups number should be split into.

    Guaranteed constraints:
    3 ≤ k ≤ 1000.

    [output] string

    The string on which the algorithm ends.

*/

const numberReduce = "11111222322"
const k = 3

const numberReduce2 = "0"
const k2 = 1000

const numberReduce3 = "9999999"
const k3 = 3

const numberReduce4 = "111000222"
const k4 = 2

const numberReduce5 = "1213145"
const k5 = 2

function solutionReduce(number, k) {
    //base case
    if (number.length <= k) return number

    //recursive case
    let numberGroup = "", pointer = 0
    const numberKSetArr = []

    while (number.length > k) {
        if (numberGroup.length < k) {
            numberGroup += number[pointer]
            console.log(`inside the if statement: "${numberGroup}", ${pointer}`)
        } else {
            numberKSetArr.push(numberGroup)
            numberGroup = `${number[pointer]}`
            
        }
        pointer++
        if (number.length <= pointer) break
    }



    if (numberGroup.length !== 0) numberKSetArr.push(numberGroup)
    console.log({numberKSetArr})
    number = sumOfHolder(numberKSetArr)
    // console.log(number)
    let newNumberValue = number.join("")

    return solutionReduce(newNumberValue, k)
}

function sumOfHolder (numSetArr) {
    const newArrRes = []

    for (const digits of numSetArr) {
        let total = 0
        for (const digit of digits) {
            total += (parseInt(digit))
        }
        newArrRes.push(total)
    }

    return newArrRes
}
// console.log(sumOfHolder([ '111', '112', '223', '22' ]))
// console.log(solutionReduce(numberReduce4, k4))

//mock gcf lvl2: alternating tiles

/*
Imagine there is a circle of red and blue tiles. The color of the tiles are represented by the array tileColors, where tileColors[i] = 0 means that the ith tile is red, whereas tileColors[i] = 1 means that the ith tile is blue.

We want to determine whether the tiles that are next to each other in the circle have alternating colors - the ith tile should have a different color than both the i+1th and the i-1th neighboring tiles . Given an integer size, we want to know how many groups of size consecutive tiles have alternating colors.

Note that because tileColors represents a circle, the first and last tiles (elements in the array) are considered to be next to each other.

Also note that you are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(tileColors.length2) will fit within the execution time limit.

Example

    For tileColors = [0, 1, 0, 1, 1] and size = 3, the output should be solution(tileColors, size) = 3.

    Explanation:
        There are five unique subarrays of size 3.
        First: tileColors[0...2] = [0, 1, 0], which has alternating colors;
        Second: tileColors[1...3] = [1, 0, 1], which has alternating colors;
        Third: tileColors[2...4] = [0, 1, 1], which does not have alternating colors;
        Fourth: tileColors[3...4] + tileColors[0] = [1, 1, 0] (+ is the array concatenation operation), which does not have alternating colors;
        Fifth: tileColors[4] + tileColors[0...1] = [1, 0, 1], which has alternating colors;
        So, there are 3 subarrays which have alternating colors.
    Expand to see the example video.

    Your browser does not support playing HTML5 video. You can instead.

    Note: If you are unable to view the video properly, please use this link to access it.

    For tileColors = [0, 1, 0, 1] and size = 4, the output should be solution(tileColors, size) = 4.

    Explanation:
        Since the array should be circular, there are four unique subarrays, starting at indices 0, 1, 2, and 3;
        These subarrays correspond to arrays: tileColors[0...3], tileColors[1...3] + tileColors[0], tileColors[2...3] + tileColors[0...1], and tileColors[3] + tileColors[0...2];
        All subarrays in the given array consists of either [0, 1, 0, 1] or [1, 0, 1, 0], which represent tiles with alternating colors;
        So, there are 4 subarrays which have alternating colors.
    Expand to see the example video.

    Your browser does not support playing HTML5 video. You can instead.

    Note: If you are unable to view the video properly, please use this link to access it.

Input/Output

    [execution time limit] 4 seconds (js)

    [memory limit] 1 GB

    [input] array.integer tileColors

    A circular integer array representing the colors of tiles as described above.

    Guaranteed constraints:
    2 ≤ tileColors.length ≤ 1000,
    0 ≤ tileColors[i] ≤ 1.

    [input] integer size

    An integer representing the number of tiles that we want to group together to determine whether tiles have alternating colors.

    Guaranteed constraints:
    2 ≤ size ≤ tileColors.length.

    [output] integer

    An integer representing the number of groups of size consecutive tiles in the circle that have alternating colors.

*/

//what i had so far:

/* 
counter will be used for this (count how many alt patterns there are)

find a way to split the array based on the size given
-- maybe use .slice? or .splice? --> we're using slice

once we get the split based on the size, look for alternating patterns 
-- so if reds are all on even positions or blues are all on even positions and vices versa for odd positions, up the counter by one

then return the counter

note to self-- 
if tilesplit ever equals a length <= 2 break current loop
another loop will be used to fill in the last remaining evalutations. 
ensure within the loop that the length of "evaluation" is always 3
*/ 

/*
Test cases:

tileColors: [0, 1, 0, 1, 1]
size: 3

tileColors: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
size: 50

tileColors: [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
size: 10

tileColors: [0, 1, 0, 1, 0, 0, 1, 1, 0, 1]
size: 4

tileColors: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
size: 7
*/


function solutionAlternateTies(tileColors, size) {
    // const actualTileColors = []
    // const finalEvaluator = []

    // let counter = 0, tail = 0, head = size, tailCountDown;

    
    // while (tail !== tileColors.length) {
    //     const tileSplit = actualTileColors.slice(tail, head)
        
    //     for (let i = 0; i < tileSplit.length; i++) {
    //         if (tileSplit.length <= 2) finalEvaluator.push(tileSplit[i])
    //         if (head > tileColors.length) {

    //         }

    //         if (tileSplit[i] === tileSplit[i + 2]) counter++
    //     }

    //     console.log({tileSplit, finalEvaluator})
        
    //     tail++
    //     head++
        
    // }
    
    // return counter
    let counter = 0
    const actualTileColors = []

     for (let i = 0; i < tileColors.length; i++) {
        if (tileColors[i] === 0) actualTileColors.push('red')
        else actualTileColors.push('blue')
    }

    console.log({actualTileColors})

    for (let i = 0; i < actualTileColors.length; i++) {
        let flag = true

        for (let j = 0; j < size - 1; j++) {
            const curr = actualTileColors[(i + j) % actualTileColors.length]
            const nxt = actualTileColors[(i + j + 1) % actualTileColors.length]

            if (curr === nxt) {
                flag = false
                break
            }
            // console.log({curr, nxt})
        }

        if (flag) counter++
    }

  
    return counter
}

// console.log(solutionAlternateTies([0, 1, 0, 1, 1], 3))

/*
🟢 Problem 5: Find Common Elements Between Two Slices
Question:

Given two slices of strings, write a function that returns a slice containing the common elements (words that appear in both slices).
Each common word should appear only once in the result, even if it appears multiple times in either input slice.

📚 Example
Input:

slice1 = ["go", "java", "python", "ruby"]
slice2 = ["python", "go", "javascript", "go"]

Output:

["go", "python"]
(Order doesn't matter for this one!)
*/


//time comp: O(n^2)
//space comp: O(n)
const slice1 = ["go" ,"java", "python", "ruby", "go"]
const slice2 = ["python", "go", "go", "python"]

function CommonElements (arr1, arr2) {
    const resArr = []
    const freqObj = {}

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            // console.log(arr1[i], arr2[j])
            if (arr1[i] === arr2[j]) {
                if (!freqObj[arr1[i]]) freqObj[arr1[i]] = 1
                else freqObj[arr1[i]]++
            }
            
        }
    }

    for (const ele in freqObj) {
        resArr.push(ele)
    }

    return resArr
}

console.log(CommonElements(slice1, slice2)) // returns: ['go','python']