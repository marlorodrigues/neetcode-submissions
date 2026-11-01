class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = []
        const reference = new Map<string, string>([
            ["[", "]"],
            ["{", "}"],
            ["(", ")"],
        ])

        for(const char of s){
            if(reference.has(char)){
                stack.push(char)
            }
            else {
                let lastItem = stack.pop()

                if(char !== reference.get(lastItem)){
                    return false
                }
            }
        }

        return stack.length === 0
    }
}
