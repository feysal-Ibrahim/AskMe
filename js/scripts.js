
//business logic
function Contact(first,last,email){
  this.firstName=first;
  this.lastName=last;
  this.email=email;
}

Contact.prototype.fullName =function (){
  return this.firstName + "" + this.lastName + this.email;
}

//user interface
$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();




      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var inputtedemail=$("input#new-email").val();

      var newContact = new Contact(inputtedFirstName, inputtedLastName,inputtedemail);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      $("input#email").val("");

      $(".contact").last().click(function() {
     $("#show-contact").show();
     $("#show-contact h2").text(newContact.firstName);
     $(".first-name").text(newContact.firstName);
     $(".last-name").text(newContact.lastName);
      $(".email").text(newContact.email);

   });


    });
  });
