var dateParser = require('./DateParser');

module.exports = {
	buildRssHtml: function( item ) {
		var date = dateParser.parseDate(item.pubdate);

	  	var spanStart = '<span class="octicon ';
	  	spanStart += getGithubClass(item.title);
	  	spanStart += 'style="font-size:22px">';
	  	var linkStart = '<a href="' + String(item.link) + '" target="_blank">     ';
	  	var feedTitle = '<b>' + String(item.title) + '</b>';
	  	var pubDate =  '<p><b>' + date + '</b></p>';

	  	var total = spanStart + linkStart + feedTitle + '</a></span>' + pubDate;
	  	return total;
  }
}

function getGithubClass( itemTitle ) {

	itemTitle = String(itemTitle);

	if(itemTitle.toLowerCase().indexOf("starred") > -1) {
  		return 'octicon-star" ';
  	} else if(itemTitle.toLowerCase().indexOf("pushed") > -1) {
  		return 'octicon-git-commit" ';
  	} else if(itemTitle.toLowerCase().indexOf("created") > -1) {
      if(itemTitle.toLowerCase().indexOf("repository") > -1) {
        return 'octicon-repo" ';
      } else if(itemTitle.toLowerCase().indexOf("branch") > -1) {
        return 'octicon-git-branch" ';
      }
    } else {
  		return '" ';
  	}
}