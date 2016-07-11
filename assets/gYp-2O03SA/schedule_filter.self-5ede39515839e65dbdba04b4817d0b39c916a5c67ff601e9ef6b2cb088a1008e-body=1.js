(function() {
  var concatValues, filters;

  filters = {};

  $('.button-group').on('click', 'li', function() {
    var $buttonGroup, $this, filterGroup, filterValue;
    $this = $(this);
    $buttonGroup = $this.parents('.button-group');
    filterGroup = $buttonGroup.attr('data-filter-group');
    filters[filterGroup] = $this.attr('data-filter');
    filterValue = concatValues(filters);
    $('.masonry__container').isotope({
      filter: filterValue
    });
  });

  concatValues = function(obj) {
    var prop, value;
    value = '';
    for (prop in obj) {
      value += obj[prop];
    }
    return value;
  };

  $(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup;
    $buttonGroup = $(buttonGroup);
    return $buttonGroup.on("click", "li", function() {
      $buttonGroup.find(".active").removeClass("active");
      return $(this).addClass("active");
    });
  });

}).call(this);
