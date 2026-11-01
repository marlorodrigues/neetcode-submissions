class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = []
        const reference = {
            "[": "]",
            "{": "}",
            "(": ")"
        }

        for(const char of s){
            if(char in reference){
                stack.push(char)
            }
            else {
                let lastItem = stack.pop()

                if(char !== reference[lastItem]){
                    return false
                }
            }
        }

        return stack.length === 0
    }
}
