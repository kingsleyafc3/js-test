function add(){
       var UserID = document.getElementById("UserID").value;
       var firstName = document.getElementById("firstName").value;
       var lastName = document.getElementById("lastName").value;
      
       if(UserID=="" || UserID==null){
           alert('Invalid ID');
           document.getElementById("userIDError").innerHTML = "Please enter an ID";
       }
       else{
           document.getElementById("userIDError").innerHTML = "";
       }
       if(firstName=="" || firstName==null){
           alert('Invalid First Name');
           document.getElementById("firstnameError").innerHTML = "Please enter a First Name";
       }
       else{
           document.getElementById("firstnameError").innerHTML = "";
       }
       if(lastName=="" || lastName==null){
           alert('Invalid Last Name');
           document.getElementById("lastnameError").innerHTML = "Please enter a Last Name";
       }
       else{
           document.getElementById("lastnameError").innerHTML = "";
       }
      
      
       if(UserID=!"" && UserID!=null && firstName!="" && firstName!=null && lastName!="" && lastName!=null) { // check all conditions
           var display = "UserID: "+UserID+"<br> First Name: "+firstName+"<br> Last Name: "+lastName;
           document.getElementById("displayform").innerHTML = display;
       }
       else{
           document.getElementById("displayform").innerHTML = "";
       }
       return false;
       }