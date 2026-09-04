//01. Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};
//02. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
    return nums;

};
//03. Valid Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
};
//04. Ransom Note
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    const count = {};
    for (const char of magazine) {
        count[char] = (count[char] || 0) + 1;
    }
    for (const char of ransomNote) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
};