func isAnagram(s string, t string) bool {
	if len(t) != len(s) {
		return false
	}

	tmpMap := make(map[rune]int, len(s))
	for _, letter := range s {
		tmpMap[letter]++
	}

	for _, letter := range t {
		if tmpMap[letter] == 0 {
			return false
		} else {
			tmpMap[letter]--
		}
	}

	return true
}

