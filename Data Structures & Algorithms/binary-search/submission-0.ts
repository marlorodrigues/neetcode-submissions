class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        var hi = nums.length
        var lo = 0

        while(lo < hi){
            let middleIndex = Math.floor(lo + (hi - lo) / 2)

            if (target > nums[middleIndex]){
                lo = middleIndex + 1
            }
            else if (target < nums[middleIndex]){
                hi = middleIndex
            }
            else {
                return middleIndex
            }
        }

        return -1
    }
}
