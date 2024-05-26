//your JS code here. If required.
const ouput = document.getElementById('output');
let arr = [1, 2, 3, 4];
function promise(arr, time) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(arr);
		}, time);
	});
}

promise(arr, 3000);
.then((res) =>{
	const even = res.filter((num) =>{
		return num % 2 === 0;
	});
	return promise(even, 1000);
})
.then((res) =>{
	ouput.innerText = res;
	const multi = res.map((num) =>{
		return num * 2;
	});
	return promise(multi, 2000);
})
.then((res)=>{
	ouput.innerText = res;
})
.catch((error)=>{
	console.log(error);
});














