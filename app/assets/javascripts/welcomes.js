$(document).ready( function() {
  $('#new').on('click', function() {
  $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/users',
      method: 'GET',
      datatype: 'JSON'
    }).done( function(users) {
      var list = $('#users');
      list.empty();
      users.forEach( function(user) {
        var li = '<li>' + user.first_name + ' ' + user.last_name + ' ' + user.phone_number + '</li>'
        list.append(li)
      });
    });
  });

  $('#button').on('click', function() {
    var firstName = $('#first_name');
    var lastName = $('#last_name');
    var phoneNumber = $('#phone_number');
    var data ={'user[first_name]': firstName.val(), 'user[last_name]': lastName.val(), 'user[phone_number]': phoneNumber.val()}
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/users',
      type: 'POST',
      dataType: 'JSON',
      data: data
    }).done( function(res) {
      console.log(res)
    });
  });
});