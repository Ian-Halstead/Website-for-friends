const namesArr = [ 'test1.png', 'test2.png' ];
const imgElements = [];

for (let i in namesArr) {
	let imgElement = document.createElement('img');
	imgElement.setAttribute('src', 'img/' + namesArr[i]);
	imgElements.push(new imageObject(imgElement.width, imgElement.height, imgElement));
}

// Sorts imgElements array based on the width of all elements
imgElements.sort((a, b) => a.width - b.width);

// TODO Run Binary search to find value closest to range

for (let i in imgElements) {
	let min = 0;
	let max = arr_test.length - 1;

	const binarySearch = (arr, target, margin) => {
		let mid = Math.floor((max + min) / 2);

		if (arr[mid] > target) {
			max = mid - 1;
			return binarySearch(arr, target, margin);
		}
		else if (arr[mid] < target - margin) {
			min = mid + 1;
			return binarySearch(arr, target, margin);
		}
		else {
			return mid;
		}
	};
}
