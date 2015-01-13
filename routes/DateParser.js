/**
	Used to parse the date from the GitHub RSS Feed.
*/

module.exports = {
	parseDate: function( dateText ) {

		var dateComponents = String(dateText).split(" ");
		var dateTotal = dateComponents[0] + " " +  dateComponents[1] + " " +  dateComponents[2] + " " +  dateComponents[3]
		return dateTotal;
	}
}