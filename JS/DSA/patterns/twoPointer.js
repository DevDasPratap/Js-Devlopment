/**
 * Efficiently solving problems involving comparison, search, partitioning
 * array, string, linkedlist
 * 
 * early stopping as soon as mismatch/condition
 * works in place - no need to create new arrays or copies
 * 
 */

// valid palindrome
function isPalindrome(str) {
	let left = 0, right = str.length - 1
	while (left < right) {
		const leftChar = str[left]
		const rightChar = str[right]
		if (!isAlphaNumeric(leftChar)) {
			left++
			continue
		}
		if (!isAlphaNumeric(rightChar)) {
			right--
			continue
		}
		if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
			return false
		}
		left++
		right--
	}
	return true
}

function isAlphaNumeric(ch) {
	const code = ch.charCodeAt(0);
	// 0–9: 48–57, A–Z: 65–90, a–z: 97–122
	return (
		(code >= 48 && code <= 57) ||
		(code >= 65 && code <= 90) ||
		(code >= 97 && code <= 122)
	);
}

const str = 'A man, a plan, a canal: Panama'.charAt()
isPalindrome(str)