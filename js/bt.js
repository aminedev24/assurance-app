$(document).ready( function () {
  $('#table').DataTable({
    lengthMenu: [
      [ 5, 15, 25, -1 ],
      [ '5 rows', '15 rows', '25 rows', 'Show all' ]
  ],
  
  });

  $('#table_filter input').addClass('form-control search-input')
  $('#table_filter label').addClass('form-label')
} );