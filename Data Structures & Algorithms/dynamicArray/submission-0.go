type DynamicArray struct {
	size     int
	capacity int
	el       []int
}

func NewDynamicArray(capacity int) *DynamicArray {
	var da DynamicArray
	da.capacity = capacity
	da.size = 0
	da.el = make([]int, da.capacity)

	return &da
}

func (da *DynamicArray) Get(i int) int {
	return da.el[i]
}

func (da *DynamicArray) Set(i int, n int) {
	da.el[i] = n
}

func (da *DynamicArray) Pushback(n int) {
	if da.capacity == da.size {
		da.resize()
	}

	da.el[da.size] = n
    da.size++
}

func (da *DynamicArray) Popback() int {
	da.size--
	return da.el[da.size]
}

func (da *DynamicArray) resize() {
	da.capacity = 2 * da.capacity

	newArr := make([]int, da.capacity)

	for i := range da.size {
		newArr[i] = da.el[i]
	}

    da.el = newArr
}

func (da *DynamicArray) GetSize() int {
	return da.size
}

func (da *DynamicArray) GetCapacity() int {
	return da.capacity
}
