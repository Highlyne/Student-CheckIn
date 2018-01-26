$(document).ready(function() {
    // Getting a reference to the input field where user enters sign in information
    var $newFirstName = $("input.first_name");
    var $newLastName = $("input.last_name");
    var $newStudentNum = $("input.Std_Num");
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "button.check_in", newCheckedIn);
    $(document).on("click", "button.check_out", toggleComplete);
    
    // Getting todos from database when page loads
    showAll();
  
  
    // Returns to homepage and will fire app.get funtion on index_controller.js
    function showAll() {
      $.get("/");
      };
  
  
    // This function adds new student to the database
    function newCheckedIn(Student) {
      $.ajax({
        method: "PUT",
        url: "/api/todos",
        data: todo
      }).then(showAll);
    }
  });