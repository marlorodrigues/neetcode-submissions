func twoSum(nums []int, target int) []int {

	tmpMap := make(map[int]int, len(nums))
	for x, num := range nums {
		valueFound, ok := tmpMap[target-num]

		if ok {
			return []int{valueFound, x}
		}

		tmpMap[num] = x

	}

	return []int{}
}
