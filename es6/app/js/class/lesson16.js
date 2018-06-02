{
	let log = (type) => {
		return function (target,name,descriptor) {
			let src_method = descriptor.value;
			descriptor.value = (...arg) => {
				src_method.apply(target,arg)
				console.info(`log ${type}`)
			}
		}
	}
	class AD {
		@log('show')
		show () {
			console.info('ad is show')
		}
		@log('click')
		click() {
			console.info('ad is click')
		}
	}
	let ad = new AD()
	ad.show()	
	ad.click()

}












