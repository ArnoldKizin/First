
  function resetSearch() {
      var placeHolder = 'רשום מילת חיפוש';
      var val = $("#Top1_SearchBox1_SearchTextBox").val();
      if (!val || val.length == 0)
          $("#Top1_SearchBox1_SearchTextBox").val(placeHolder);
  }
  
  $("#Top1_SearchBox1_SearchTextBox").live('keyup', function (e) {
      if (e.keyCode == '13') {
          e.stopPropagation();
          searchSite();
          return false; 
      }
  });
  
  $('#searchBox a').live('click', function (e) {
      e.preventDefault();
      searchSite();
      return false;
  });
  
  function searchSite(){
      var query = $("#Top1_SearchBox1_SearchTextBox").val();
      if (query && query.length > 0) {
          query = escape(query);
          location.href = 'http://' + 'www.paz.co.il' + '/index.aspx?id=4158&searchKey=' + query;
      }
  }
