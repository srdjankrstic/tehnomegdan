  $(function () {
     var activeTab = $('[href=' + location.hash + ']');
     activeTab && activeTab.tab('show');
  });

$(document).ready(function() {
  prettyPrint();
  
  $('#registrationModal').modal({
    show: false,
    keyboard: true
  });
});
