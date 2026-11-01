function isAlphanum(value: number): boolean {
    const minLetter = "a".charCodeAt(0)
    const maxLetter = "z".charCodeAt(0)
    const minNumStr = "0".charCodeAt(0)
    const maxNumStr = "9".charCodeAt(0)

    if(value >= minLetter && value <= maxLetter){
        return true
    }
    else if(value >= minNumStr && value <= maxNumStr){
        return true
    }

    return false
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.trim().toLowerCase()

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
