class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
                        // diff     index
        let table = new Map<number, number>()

        for (let index = 0; index < nums.length; index++){
            let num = nums[index]
            let aux = (target - num)

            let j = table.get(aux)

            if(j !== undefined){
                return [index, j]
            }

            table.set(num, index)
        }

        return []
    }
}
