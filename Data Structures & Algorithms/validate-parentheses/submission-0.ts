const isOpen = (char: string) => {
    return  (char === "(") ||
            (char === "{") ||
            (char === "[")
}

const isClose = (char: string) => {
    return  (char === ")") ||
            (char === "}") ||
            (char === "]")
}

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
            if(isOpen(char)){
                stack.push(char)
            }
            else if(isClose(char)) {
                let lastItem = stack.pop()

                if(char !== reference[lastItem]){
                    return false
                }
            }
            else {
                return false
            }
        }

        return stack.length === 0
    }
}
