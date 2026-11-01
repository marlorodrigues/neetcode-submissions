const minLetter = "a".charCodeAt(0)
const maxLetter = "z".charCodeAt(0)
const minNumStr = "0".charCodeAt(0)
const maxNumStr = "9".charCodeAt(0)

function isAlphanum(value: number): boolean {
    return (value >= minLetter && value <= maxLetter) || 
           (value >= minNumStr && value <= maxNumStr)
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.toLowerCase()

        var left = 0
        var right = s.length - 1

        while(left <= right){
            let a = s.charCodeAt(left)
            if(!isAlphanum(a)){
                left++

                continue
            }

            let b = s.charCodeAt(right)
            if(!isAlphanum(b)){
                right--

                continue
            }

            if(s[left] !== s[right]){
                return false
            }

            right--
            left++
        }

        return true
    }
}
