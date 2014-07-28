var express = require('express');
var router = express.Router();

var feedResult = new Array();
var FeedParser = require('feedparser')
  , request = require('request');

var req = request('https://github.com/derekargueta.atom')
  , feedparser = new FeedParser();

req.on('error', function (error) {
  // handle any request errors
});
req.on('response', function (res) {
  var stream = this;

  if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

  stream.pipe(feedparser);
});


feedparser.on('error', function(error) {
  // always handle errors
});
feedparser.on('readable', function() {
  // This is where the action is!
  var stream = this
    , meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
    , item;

  while (item = stream.read()) {
  	console.log("title: " + item.title);
  	console.log("description: " + item.description);
  	console.log("link: " + item.link);
  	console.log("pubdate: " + item.pubdate);
  	console.log('===========================================================================')
  	var dateList = String(item.pubdate).split(" ");
  	var date = dateList[0] + " " + dateList[1] + " " + dateList[2] + " " + dateList[3];
  	var itemTitle = String(item.title);

  	var spanStart = '<span class="octicon ';
  	if(itemTitle.indexOf("starred") > -1) {
  		spanStart += 'octicon-star" ';
  	} else if(itemTitle.indexOf("pushed") > -1) {
  		spanStart += 'octicon-git-commit" ';
  	} else {
  		spanStart += '" ';
  	}
  	spanStart+= 'style="font-size:22px">';
  	var linkStart = '<a href="' + String(item.link) + '" target="_blank">     ';
  	var feedTitle = '<b>' + itemTitle + '</b>';
  	var pubDate =  '<p><b>' + String(item.pubdate) + '</b></p>';

  	var total = spanStart + linkStart + feedTitle + '</a></span>' + pubDate; 

    feedResult.push(total);
  }

});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html', {
  	feed: feedResult
  });
});

module.exports = router;
