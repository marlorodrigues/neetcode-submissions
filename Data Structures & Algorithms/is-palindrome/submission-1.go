func isPalindrome(s string) bool {
	s = strings.ToLower(s)

	var newString strings.Builder
	for _, letter := range s {
		isLetter := letter >= 'a' && letter <= 'z'
		isDigit := letter >= '0' && letter <= '9'

		if isLetter || isDigit {
			newString.WriteString(string(letter))
		}
	}

	for index, letter := range newString.String() {
		currentRune := rune(newString.String()[(len(newString.String())-1)-index])

		if letter != currentRune {
			return false
		}
	}

	return true
}
