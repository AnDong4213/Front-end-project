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

{
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
}

{
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
	
	function showImgs(imgs) {
		imgs.forEach((img) => {
			document.body.appendChild(img)
		})
	}
	
	Promise.all([
		loadImg('https://gtd.alicdn.com/tfscom/TB1s4OXX4WYBuNjy1zkwu0GGpXa'),
		loadImg('https://lh3.googleusercontent.com/-hG-VPA9ymmo/AAAAAAAAAAI/AAAAAAAAAAA/AB6qoq0QVHM5I_dhlssRdMxbst6IGxTaRg/mo/photo.jpg?sz=46'),
		loadImg('https://gtd.alicdn.com/tfscom/TB1gjlgXY1YBuNjSszewu1blFXa')
	]).then(showImgs)
	
}

{
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
}





