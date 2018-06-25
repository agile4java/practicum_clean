module.exports = {

  Category: function(bestofferenabled, autopayenabled, categoryid,
    categorylevel, categoryname, categoryparentid) {
    this.bestofferenabled = bestofferenabled;
    this.autopayenabled = autopayenabled;
    this.categoryid = categoryid;
    this.categorylevel = categorylevel;
    this.categoryname = categoryname;
    this.categoryparentid = categoryparentid;
    this.getCategoryName = function() {
      return this.categoryname;
    };
    this.getCategoryId = function() {
      return this.categoryid;
    };
  }





}