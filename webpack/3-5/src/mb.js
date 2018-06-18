let urlMap = {}
class Point {
  constructor({id, mid, singer, name, album, duration, image}) {
    Object.assign(this,{id, mid, singer, name, album, duration, image})
    this.url = 'www.baidu.com';
    if (urlMap[this.id]) {
      this.ageurl = urlMap[this.id]
    } else {
      this.genUrl()
    }
  }
  genUrl() {
    this.ageurl = `http://dl.stream.qqmusic.qq.com`
  }
}
export function createPoint(d) {
  return new Point({
    id: d.songid,
		mid: d.songmid,
		singer: d.singer,
		name: d.songname,
		album: d.albumname,
		duration: d.interval,
		image: d.image
  })
}
