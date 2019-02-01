

	// 找出指定元素出现的所有位置
	export function findElmInArray(array,element){
		var indices = []
		var idx = array.indexOf(element)
		while (idx != -1) {
		  indices.push(idx)
		  idx = array.indexOf(element, idx + 1)
		}
		return indices
	}