type iAmount = {
    key: string
    value: number
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false
        }

        var letterCount = new Map<string, number>();
        for(const str of t){
            let prev = letterCount.get(str)

            if(!prev){
                letterCount.set(str, 1)
            }
            else {
                letterCount.set(str, ++prev)
            }
        }

        for(const str of s){
            let prev = letterCount.get(str)

            if(prev === undefined){
                return false
            }
            else {
                prev -= 1

                if(prev === 0){
                    letterCount.delete(str)    
                }
                else {
                    letterCount.set(str, prev)
                }
            }
        }

        return letterCount.size === 0
    }
}
