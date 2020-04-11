// const namesArr = [ 'test1.png', 'test2.png', 'Newsies_PRP_LOGO.png', 'Newsies_PRP_LOGO - Copy' ];
// const imgElements = [];

// for (let i in namesArr) {
// 	let imgElement = document.createElement('img');
// 	imgElement.setAttribute('src', 'img/' + namesArr[i]);
// 	imgElements.push(new imageObject(imgElement.width, imgElement.height, imgElement));
// }

// // Sorts imgElements array based on the width of all elements
// imgElements.sort((a, b) => a.width - b.width);

// for (let i in imgElements) {
// 	let min = 0;
// 	let max = imgElements.length - 1;
// 	let closest = [];
// }

// const binarySearch = (arr, target, margin) => {
// 	let mid = Math.floor((max + min) / 2);

// 	if (arr[min].width > arr[max].width) {
// 		return closest;
// 	}
// 	else if (arr[mid].width > target) {
// 		max = mid - 1;
// 		return binarySearch(arr, target, margin);
// 	}
// 	else if (arr[mid].width < target - margin) {
// 		min = mid + 1;
// 		closest.push(mid);
// 		closest.sort((a, b) => imgElements[a].width - imgElements[b].width);
// 		console.log(closest);
// 		return binarySearch(arr, target, margin);
// 	}
// 	else {
// 		return mid;
// 	}
// };

// let min = 0;
// let max = imgElements.length - 1;
// let closest = [];
// binarySearch(imgElements, 1000000, 0);

// document.body.appendChild(imgElements[1].element);

// // const binarySearch = (arr, target, margin) => {
// // 	let mid = Math.floor((max + min) / 2);

// // 	if (min > max) {
// // 		return closest;
// // 	}
// // 	if (arr[mid].width > target) {
// // 		max = mid - 1;
// // 		return binarySearch(arr, target, margin);
// // 	}
// // 	else if (arr[mid].width < target - margin) {
// // 		min = mid + 1;
// // 		closest = mid;
// // 		return binarySearch(arr, target, margin);
// // 	}
// // 	else {
// // 		return mid;
// // 	}
// // };
// while (localStorage.getItem('loaded') !== 1) {}

const gallery = document.getElementById('gallery');
const MARGIN = gallery.width / 10;
const imagesHTML = gallery.getElementsByTagName('img');
let images = [].slice.call(imagesHTML);
images.sort((a, b) => a.width - b.width);

let min = 0;
let max = images.length - 1;
let closest = [];
const binarySearch = (arr, target, margin) => {
	let mid = Math.floor((min + max) / 2);

	if (max < min) {
		return -1;
	}
	else if (arr[mid].width < target - margin) {
		min = mid + 1;
		return binarySearch(arr, target, margin);
	}
	else if (arr[mid].width > target) {
		max = mid - 1;
		return binarySearch(arr, target, margin);
	}
	else {
		return mid;
	}
};

// console.log(binarySearch(images, gallery.width, MARGIN));

images.forEach((value, id) => {
	images = images.slice(1);

	let target = gallery.width - value.width;
});
