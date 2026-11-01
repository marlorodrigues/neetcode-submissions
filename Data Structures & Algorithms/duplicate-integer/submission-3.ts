class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Set<number>()

        for(const x of nums){
            if(map.has(x)){
                return true
            }

            map.add(x)
        }

        return false
    }
}
