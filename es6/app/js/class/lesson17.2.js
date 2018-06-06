export default class Song {
	constructor({id, mid, singer, name, album, duration, image}) {
		this.id = id
	    this.mid = mid
	    this.singer = singer
	    this.name = name
	    this.album = album
	    this.duration = duration
	    this.image = image
		this.url = 'www.baidu.com'
	}
}
export function createSong(musicData) {
	return new Song({
		id: musicData.songid,
		mid: musicData.songmid,
		singer: musicData.singer,
		name: musicData.songname,
		album: musicData.albumname,
		duration: musicData.interval,
		image: musicData.image
	})
}


