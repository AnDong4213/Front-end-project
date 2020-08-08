/* {
	let tell = function* (){
		yield 'a'		
		yield 'b'
		return 'c'
	}
	let k = tell();    
	// console.log(k)  //  Generator {_invoke: ƒ}   function后有一个星号(*)...
	
	console.log(k.next().value)
	console.log(k.next())   //  {value: "b", done: false}
	console.log(k.next().value)  //  c
	console.log(k.next())
} */

/* {
	let obj = {}, a = [{a:'a'},{d:'d'}],b = {b:'b'}, c = {c:'c'}
	obj[Symbol.iterator] = function* () {
		yield a;		
		yield b;
		yield c;
	}
	for (let value of obj) {
		console.log(value)
	}
} */

/* {
	let state = function* (){
		while(1) {
			yield 'A';		
			yield 'B';
			yield 'C';
		}
	}
	let status = state()
	console.log(status.next())
	console.log(status.next())
	console.log(status.next())
	console.log(status.next())
	console.log(status.next())
} */

{
	/* let draw = function (count) {
		console.log(`剩余${count}次`);
	}
	let residue = function* (count){
		while (count>0) {
			count--;
			yield draw(count)
		}
	}
	let stat = residue(5), btn = document.createElement('button')
	btn.id = 'start'
	btn.textContent = '抽奖'
	btn.style.color = '#000'
	btn.style.border = 'none'
	btn.style.backgroundColor = 'pink'
	document.body.appendChild(btn)
	document.getElementById('start').addEventListener('click',function(){
		stat.next()
	},false) */
}

{
	// 长轮询。。。
	let ajax = function* () {
		yield new Promise((resolve,reject) => {
			setTimeout(() => {
				resolve({code: 200})
			}, 5000)
		})
	};
	let pull = function() {
		let generator = ajax(), step = generator.next();
		step.value.then((d) => {
			if (d.code !== 200) {
				setTimeout(() => {
					console.info('wait')
					pull()
				},1000)
			} else {
				console.info(d)
			}
		})
	}
	pull()
}


{
	
	let ajax = function* () {
		let rs = yield new Promise((resolve,reject) => {
			setTimeout(() => {
				resolve({code: 2019})
			},200)
		})
		console.log(rs);
	};
	ajax();
	console.log(ajax())
	/* let pull = function() {
		let generator = ajax(), step = generator.next();
		step.value.then((d) => {
			if (d.code !== 200) {
				setTimeout(() => {
					console.info('wait')
					pull()
				},1000)
			} else {
				console.info(d)
			}
		})
	}
	pull() */
}

















