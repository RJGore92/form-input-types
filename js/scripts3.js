var contactNumberToAdd = 1;

$(document).ready(function() {
  $("form#testForm").submit(function(event) {
    event.preventDefault();
	  var nameInput = $("#contactName").val();
    var dobInput = $("#contactDOB").val();
    var genderInput = $("input:radio[name=gender]:checked").val();
    if (genderInput == "otherGender") {
      genderInput = $("#otherGenderInput").val();
    }
    var streetAddInput = $("#contactStreetAddress").val();
    var cityAddInput = $("#contactCity").val();
    var stateAddInput = $("#contactState").val();
    var zipInput = $("#contactZIP").val();
    var emailInput = $("#contactEmail").val();
    var colorInput = $("#contactColorPref").val();

    $("div#contactList").append(
      "<div class='contact' id='contact" + contactNumberToAdd +"'>" +
        "<div class='card'>" +
          "<div class='card-head' id='contactHead" + contactNumberToAdd + "' style='background-color: " + colorInput +"'>" +
            "<h5>" + nameInput + "</h5>" +
          "</div>" +
          "<div class='card-body' id='contactBody" + contactNumberToAdd + "'>" +
            "<div class='row'>" +
              "<div class='col-md-6 dob'>" +
                "<p>Date of Birth: " + dobInput + "</p>" +
              "</div>" +
              "<div class='col-md-6 gender'>" +
                "<p>Gender: " + genderInput + "</p>" +
              "</div>" +
            "</div>" +
            "<div class='row'>" +
              "<div class='col-md-5 streetAddress'>" +
                "<p class='noMargin'>Street Address:</p>" +
                "<p class='noMargin'>" + streetAddInput + "</p>" +
                "<p class='noMargin'>" + cityAddInput + ", " + stateAddInput + " " + zipInput +"</p>" +
              "</div>" +
              "<div class='col-md-7 email'>" +
                "<p>" + emailInput + "</p>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>"
    )
  });
});
