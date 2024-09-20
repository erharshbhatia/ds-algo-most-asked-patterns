// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 

// Follow up: Could you find an algorithm that runs in O(m + n) time?


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

    let map = new Map();
    let sn = s.length;
    let tn = t.length;

    for (let i = 0; i < tn; i++) {
        if (!map.has(t[i])) {
            map.set(t[i], 0)
        }
        map.set(t[i], map.get(t[i]) + 1)
    }

    let start = 0;
    let end = 0;
    let required = map.size;
    console.log(required)

    let windowCount = new Map();
    let minLen = Infinity, ans = [];
    let formed = 0;


    while (end < sn) {
        let char = s[end]

        windowCount.set(char, (windowCount.get(char) || 0) + 1);

        // when char is present in lookup map and count matches windowCount
        if (map.has(s[end]) && windowCount.get(s[end]) === map.get(s[end])) {
            formed++
        }

        // shrink the window from left side
        while (start <= end && formed === required) {
            
            char = s[start]
            if (end - start + 1 < minLen) {

                minLen = end - start + 1;
                ans = [minLen, start, end]
            }

            windowCount.set(char, windowCount.get(char) - 1);

            if (map.has(char) && windowCount.get(char) < map.get(char)) {
                formed--
            }
            start++;
        }
        end++;
    }

    return s.substring(ans[1], ans[2]+1)

};