var express = require('express');
var router = express.Router();
var dateParser = require('./DateParser');
var constants = require('../constants');

var feedResult = new Array();
var FeedParser = require('feedparser')
  , request = require('request');

var req = request(constants.github_rss_url)
  , feedparser = new FeedParser();

req.on('error', function (error) {
  // handle any request errors
});
req.on('response', function (res) {
  var stream = this;

  if (res.statusCode != 200) {
    return this.emit('error', new Error('Bad status code'));
  }

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
  	var date = dateParser.parseDate(item.pubdate);
  	var itemTitle = String(item.title);

  	var spanStart = '<span class="octicon ';
  	if(itemTitle.toLowerCase().indexOf("starred") > -1) {
  		spanStart += 'octicon-star" ';
  	} else if(itemTitle.toLowerCase().indexOf("pushed") > -1) {
  		spanStart += 'octicon-git-commit" ';
  	} else if(itemTitle.toLowerCase().indexOf("created") > -1) {
      if(itemTitle.toLowerCase().indexOf("repository") > -1) {
        spanStart += 'octicon-repo" ';
      } else if(itemTitle.toLowerCase().indexOf("branch") > -1) {
        spanStart += 'octicon-git-branch" ';
      }
    } else {
  		spanStart += '" ';
  	}
  	spanStart+= 'style="font-size:22px">';
  	var linkStart = '<a href="' + String(item.link) + '" target="_blank">     ';
  	var feedTitle = '<b>' + itemTitle + '</b>';
  	var pubDate =  '<p><b>' + date + '</b></p>';

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
