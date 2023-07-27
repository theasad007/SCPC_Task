/* 
 Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
*/

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lower = 'abcdefghijklmnopqrstuvwxyz'
const digit = '0123456789'
const special = '~!@#$%^&*()_+'
const all = upper + lower + digit + special

function rand (max) {
  return Math.floor(Math.random() * max)
}

function random (set) {
  return set[rand(set.length - 1)]
}

function generate (length, set) {
  var result = []
  while (length--) result.push(random(set))
  return result
}

function shuffle (arr) {
  var result = []

  while (arr.length) {
    result = result.concat(arr.splice(rand[arr.length - 1]))
  }

  return result
}


function genaratePassword (length) {
  let result = []

  result = result.concat(generate(1, upper))
  result = result.concat(generate(1, lower)) 
  result = result.concat(generate(1, digit))
  result = result.concat(generate(1, special)) 
  result = result.concat(generate(length - 4, all)) 

  return shuffle(result).join('')
}

const passLength = 6;
const result = genaratePassword(passLength);
console.log(result);

