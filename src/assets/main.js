$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/3459063.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log('courses in-progress', response.courses.in_progress)
      addCourses(response.courses.in_progress)
    }
  });

  function addCourses(courses) {
    var badges = $('#badges')
    courses.forEach(function(course) {
      var $course = $('<div/>', {
        'class': 'course'
      }).appendTo(badges)

      $('<h3/>', {
        text: course.title
      }).appendTo($course)

      $('<img/>', {
        src: course.badge
      }).appendTo($course)

      $('<a/>', {
        'class': 'btn btn-primary',
        href: course.url,
        target: '_blank',
        text: 'See Course'
      }).appendTo($course)
    })
  }
});
