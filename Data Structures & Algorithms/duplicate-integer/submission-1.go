func hasDuplicate(nums []int) bool {
	tmpMap := make(map[int]int, len(nums))

	for _, x := range nums {
		if _, ok := tmpMap[x]; ok {
			return true
		}

		tmpMap[x] = 0
	}

	return false
}
