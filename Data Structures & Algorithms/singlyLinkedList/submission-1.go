
type LinkedList struct {
	values []int
	size   int
}

func NewLinkedList() *LinkedList {
	var linkedList LinkedList

	linkedList.size = 0
	linkedList.values = []int{}

	return &linkedList
}

func (ll *LinkedList) Get(index int) int {
	if index >= ll.size {
		return -1
	}
	return ll.values[index]
}

func (ll *LinkedList) InsertHead(val int) {
	var newll LinkedList
	newll.values = append(newll.values, val)

	for i := 0; i < ll.size; i++ {
		newll.values = append(newll.values, ll.values[i])
	}

	ll.values = newll.values
	ll.size += 1
}

func (ll *LinkedList) InsertTail(val int) {
	ll.values = append(ll.values, val)
	ll.size++
}

func (ll *LinkedList) Remove(index int) bool {
	if index >= ll.size {
		return false
	}
	var newll LinkedList

	for i := 0; i < ll.size; i++ {
		if index != i {
			newll.values = append(newll.values, ll.values[i])
		}
	}

	ll.values = newll.values
	ll.size--
	return true
}

func (ll *LinkedList) GetValues() []int {
	return ll.values
}
