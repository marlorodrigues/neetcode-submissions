func hasDuplicate(nums []int) bool {
	for x := 0; x < len(nums); x++ {
		for y := 0; y < len(nums); y++ {
			if y == x {
				continue
			}
			if nums[x] == nums[y] {
				return true
			}
		}
	}

	return false
}