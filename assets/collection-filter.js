Shopify.queryParams = {};

// Preserve existing query parameters
  if (location.search.length) {
    var params = location.search.substr(1).split('&');

    for (var i = 0; i < params.length; i++) {
      var keyValue = params[i].split('=');

      if (keyValue.length) {
        Shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
      }
    }
  }

// Update sort_by query parameter on select change
  document.addEventListener('change', function(e) {
    const elem = e.target.closest('#sort-by');
    console.log("sort-pressed")

    if (elem) {
      var value = e.target.value;

      Shopify.queryParams.sort_by = value;
      var target = new URLSearchParams(Shopify.queryParams).toString();
      const sortCol = new Sort('#sort-by', 'product-lists', target)
      target = sortCol.getData();
      $.get(target, function(data, status) {
        var outputData = $(data).find('.product-lists').html();
        $('.product-lists').html(outputData);
      });
    }
  });



  $(function() {
    $('body').on('change', 'form.filter-form input', function() {
      updateProductLists(getDataQuery());
      // updateFilterLabel(getDataQuery());
      updateActiveFilters(getDataQuery());
    });
    function getDataQuery() {
      var dataResult = '?';
      var input_name = '';
      var input_value = '';
      var input_query = '';
      var dataInputLists = [];
      $('form.filter-form input:checked,form.filter-form input[type="number"]').each(function(index) {
        input_name = $(this).attr('name');
        $(this).checked
          ? input_value = $(this).attr('value').toString()
          : input_value = $(this).val().toString();
        dataInputLists.length != 0
          ? input_query = `&${input_name}=${input_value}`
          : input_query = `${input_name}=${input_value}`;
        dataResult += input_query;
        dataInputLists.push(input_query);

      });
      console.log(window.location.protocol + '//' + window.location.host + window.location.pathname + dataResult)
      return window.location.protocol + '//' + window.location.host + window.location.pathname + dataResult;
    };
    function updateProductLists(url) {
      console.log(url)
      var target = url;
      $.get(target, function(data, status) {
        var dataOutput = $(data).find('.product-lists').html();
        $('.catalog-container .product-lists').html(dataOutput);
      });
    }

    function updateFilterLabel(url) {
      var target = url;
      console.log("Update Filter Label" + target);
      $.get(target, function(data, status) {
        var dataOutputs = [];
        $(data).find('.filter-group-display__header-selected').each(function(index) {
          dataOutputs[index] = $(this).html();
        });
        $('.catalog-container .filter-group-display__header-selected').each(function(index) {
          $(this).html(dataOutputs[index]);
        });
      });
    };

    function updateActiveFilters(url) {
      var target = url;
      $.ajax({
        url: target,
        method: 'GET',
        success: function(data) {
          var dataOutputs = [];
          $(data).find('.active-filters__remove-filter').each(function(index) {
            var $filter = $(this);
            var filterText = $filter.text().trim();
            var filterHref = $filter.attr('href');
    
            // Create a new <a> element with a click event handler
            var $newLink = $('<a>', {
              'class': 'active-filters__remove-filter',
              'href': filterHref,
              'text': filterText
            }).click(function(e) {
              e.preventDefault();
              removeActiveFilter(filterHref);
            });
    
            dataOutputs[index] = $newLink[0].outerHTML;
          });
          $('#active-filters-container').html(dataOutputs.join(''));
        },
        error: function(xhr, status, error) {
          console.log('AJAX Request Error:', error);
        }
      });
    }
    
    function removeActiveFilter(url) {
      $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
          // Handle the successful removal of the active filter
          console.log('Active filter removed successfully.');
          // Perform any additional actions or updates as needed
    
          // Refresh the active filters container
          updateActiveFilters(getDataQuery());
        },
        error: function(xhr, status, error) {
          console.log('AJAX Request Error:', error);
        }
      });
    }
    

    
  });