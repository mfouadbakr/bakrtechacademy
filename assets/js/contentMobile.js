$(document).ready(function() {
function getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[[]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  function moveSidebarToSelect() {
    var $select = $('#course-select');
    var currentPage = window.location.pathname.split('/').pop(); // e.g., "courses.html" or "projects.html"

    if (window.innerWidth <= 768) {
      $select.empty();

      $('#sidebar section .btnItem').each(function() {
        var id = $(this).attr('id'); 
        var text = $(this).text().trim();
        text = text.replace(/^\d+\s*/, ''); // remove leading number if any
        var url = currentPage + '?id=' + id;
        $select.append($('<option></option>').val(url).text(text));
      });

      // Set the selected option based on URL id param
      const selectedId = getParameterByName('id');
      if (selectedId) {
        const selectValue = currentPage + '?id=' + selectedId;
        $select.val(selectValue);
      }

      $('#sidebar').addClass('d-none');
      $('#listContent').removeClass('d-none');
    } else {
      $('#sidebar').removeClass('d-none');
      $('#listContent').addClass('d-none');
    }
  }

  $('#course-select').on('change', function() {
    var url = $(this).val();
    if (url && url !== '#') {
      window.location.href = url;
    }
  });

  moveSidebarToSelect();
  $(window).resize(moveSidebarToSelect);
});