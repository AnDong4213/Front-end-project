{
	
	// console.log(Promise)
	// Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大
	
	// Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。   Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
	
	/* function timeout(ms) {
		return new Promise((resolve, reject) => {
			// setTimeout(resolve, ms, 'done');
			setTimeout(() => {
				resolve('done')
			},ms)
		});
	}
	timeout(3000).then((value) => {
		console.log(value);
	}); */
	
	/* onreadystatechange 事件
当请求被发送到服务器时，我们需要执行一些基于响应的任务。
每当 readyState 改变时，就会触发 onreadystatechange 事件。
readyState 属性存有 XMLHttpRequest 的状态信息。
下面是 XMLHttpRequest 对象的三个重要的属性：  onreadystatechange(存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。)  readyState   status
	 */
	/* const getJSON = function(url) {
		const promise = new Promise(function(resolve, reject){
			const handler = function() {
				if (this.readyState !== 4) {
					return;
				}
				if (this.status === 200) {
					resolve(this.response);
				} else {
					reject(new Error(this.statusText));
				}
			};
			const client = new XMLHttpRequest();
			// 使用 async=false 时，请不要编写 onreadystatechange 函数 - 把代码放到 send() 语句后面即可：
			// 一般来说，向服务器发送POST请求由于解析机制的原因，需要进行特别的处理。因为POST请求和Web表单提交是不同的，需要使用XHR来模拟表单提交
			// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			client.open("GET", url, true);
			client.onreadystatechange = handler;
			client.responseType = "json";
			client.setRequestHeader("Accept", "application/json");
			client.send(null);
		});
		return promise;
	};
	getJSON("https://www.easy-mock.com/mock/59dc45d51de3d46fa94cc91d/axios/testaxios").then(function(json) {
		console.log(json);
	}, function(error) {
		console.error('出错了', error);
	}); */
	
	// 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
	
	/* const p1 = new Promise(function (resolve, reject) {
		console.log('p1')
		// setTimeout(() => resolve('拉拉...'), 3000)
		setTimeout(() => reject(new Error('fail')), 3000)
	})

	const p2 = new Promise(function (resolve, reject) {
		console.log('p2')
		setTimeout(() => resolve(p1), 10000)  // p1如果是resolve等10s后再执行，是reject的话，就不会等10s了
	})

	p2
		.then(result => console.log(result))
		.catch(error => console.log(error)) */
	// p1是一个 Promise，3 秒之后变为rejected。p2的状态在 10 秒之后改变，resolve方法返回的是p1。由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）
	
	// 调用resolve(1)以后，后面的console.log(2)还是会执行，并且会首先打印出来。这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务
	/* new Promise((resolve, reject) => {
		resolve(1);
		console.log(2);
	  }).then(r => {
		console.log(r);
	}); */
	// 一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。所以，最好在它们前面加上return语句，这样就不会有意外。
	new Promise((resolve, reject) => {
		return resolve(1);
		console.log(2);
	  }).then(r => {
		console.log(r);
	});
	
}

{
	/* new Promise((resolve, reject) => {
		return reject('失败...');
	  }).then(r => {
		console.log(r);
	}).
	catch(err => {
		console.log(err);
	}) */
	const promise = new Promise(function(resolve, reject) {
		try {
		  throw new Error('test-haha');
		} catch(e) {
		  reject(e);
		}
	});
	promise.catch(function(error) {
	console.log(error);
	});
	  
}


/* {
	let ajax = function(callback) {
		console.log('执行...')
		setTimeout(function(){
			callback && callback.call()
		},1000)
	}
	ajax(function(){
		console.log('timeout1')
	})
} */

/* {
	function Product(name, price) {
	  this.name = name;
	  this.price = price;
	  this.hehe = function () {
		console.log(9)
	  }
	  this.hihi = function() {
		 console.log(this.price)
	  }
	}
	function Food(name, price,category) {
		Product.call(this,name, price)
		this.category = category
	}
	let haha = new Food('baicai',20,'shucai')
	console.log(haha.category) //  shucai
	haha.hihi() // 20
	haha.hehe()  // 9
}

{
	let animals = [
		{species: 'Lion', name: 'King'},{species: 'Whale', name: 'Fail'}
	]
	// 使用call方法调用匿名函数
	for(let i=0; i<animals.length;i++) {
		(function(i){
			// console.log(this)  // {species: "Lion", name: "King"}
			this.print = function() {
				// console.log(this)  // {species: "Whale", name: "Fail", print: ƒ}
				console.log('#' + i  + ' ' + this.species + ': ' + this.name)
			}
			this.print()
		}).call(animals[i], i)
	}
}

{
	// 使用call方法调用函数并且指定上下文的'this'
	function greet() {
		let reply = [this.person, 'Is An Awesome', this.role].join(' ')
		console.log(reply)
	}
	let i = {person: 'Douglas Crockford', role: 'Javascript Developer'}
	greet.call(i)
} */

/* {
	let ajax = function(num) {
		console.log('执行2')
		return new Promise((resolve,reject) => {
			setTimeout(function(){
				if (num > 5) {
					resolve(num)
				} else {
					throw new Error('出错了...')
				}
			},1000)	
		})
	}
	ajax(9).then((haha) => {
		console.log(haha)
	}).catch((err) => {
		console.log(err)
	})
} */

/* {
	function loadImg(src) {
		return new Promise((resolve,reject) => {
			// let img = document.createElement('img')
			const img = new Image();
			img.src = src
			img.onload = function() {
				resolve(img)
			}
			img.onerror = function(err) {
				reject(err)
			}
		})
	}
	
	function showImgs(imgs) {
		imgs.forEach((img) => {
			document.body.appendChild(img)
		})
	}
	
	Promise.all([
		loadImg('https://gma.alicdn.com/bao/uploaded/i4/17318753/TB2MsHEopuWBuNjSszbXXcS7FXa_!!0-saturn_solar.jpg_130x130.jpg_.webp'),
		loadImg('https://lh3.googleusercontent.com/-hG-VPA9ymmo/AAAAAAAAAAI/AAAAAAAAAAA/AB6qoq0QVHM5I_dhlssRdMxbst6IGxTaRg/mo/photo.jpg?sz=46'),
		loadImg('https://gtd.alicdn.com/tfscom/TB1LwhKa2NNTKJjSspfSuvXIFXa')
	]).then(showImgs)
	
} */

/* {
	function loadImg(src) {
		return new Promise((resolve,reject) => {
			let img = document.createElement('img')
			img.src = src
			img.onload = function() {
				resolve(img)
			}
			img.onerror = function(err) {
				reject(err)
			}
		})
	}
	
	function showImgs(img) {
		let p = document.createElement('p')
		p.appendChild(img)
		document.body.appendChild(p)
	}
	
	Promise.race([
		loadImg('https://gtd.alicdn.com/tfscom/TB1s4OXX4WYBuNjy1zkwu0GGpXa'),
		loadImg('https://lh3.googleusercontent.com/-hG-VPA9ymmo/AAAAAAAAAAI/AAAAAAAAAAA/AB6qoq0QVHM5I_dhlssRdMxbst6IGxTaRg/mo/photo.jpg?sz=46'),
		loadImg('https://gtd.alicdn.com/ tfscom/TB1gjlgXY1YBuNjSszewu1blFXa')
	]).then(showImgs)
} */





