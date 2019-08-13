const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "失眠飞行",
        artist: '接个吻，开一枪 / 沈以诚 / 薛明媛',
        url: 'http://music.163.com/song/media/outer/url?id=1365898499.mp3',
        cover: 'http://p1.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg?param=130y130',
      },
	  {
        name: "不打扰",
        artist: '接个吻，开一枪 / 沈以诚 / 刘思鉴',
        url: 'http://music.163.com/song/media/outer/url?id=571338448.mp3',
        cover: 'http://p2.music.126.net/cJJcUguKdcg5GhNA7gxLog==/109951163859421398.jpg?param=130y130',
      },
	  {
        name: "Super Far",
        artist: 'LANY',
        url: 'http://music.163.com/song/media/outer/url?id=487210825.mp3',
        cover: 'http://p2.music.126.net/s9h1qnZKf78_6Iu30uXJ-A==/18892908300286770.jpg?param=130y130',
      },
      {
        name: 'Delicate (Sawyr And Ryan Tedder Mix)',
        artist: 'Taylor Swift',
        url: 'http://music.163.com/song/media/outer/url?id=567447085.mp3',
        cover: 'http://p2.music.126.net/chn0mrIY7y32SddNtFQGBA==/109951163315557093.jpg?param=130y130',
      }
    ]
});