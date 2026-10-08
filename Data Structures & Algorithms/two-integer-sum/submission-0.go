func twoSum(nums []int, target int) []int {

	tmpMap := make(map[int]int, len(nums))
	for x, num := range nums {

		searchFor := target - num
		valueFound, ok := tmpMap[searchFor]

		if ok {
			return []int{valueFound, x}
		} else {
			tmpMap[num] = x
		}
	}

	return []int{}
}