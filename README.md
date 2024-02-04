# Student Affairs Website

This website is designed to provide a student management for student affairs staff with a user-friendly interface. Below are the key functionalities accross different pages:

  ### Home Page
  * The home page serves as a central hub for easy navigation and provides the description for the website.

  ### Register Page
  * Users can **`Add a New Student`** to the system.
  * Student information includes ID, name, date of birth, GPA, gender, level, status ("active" or "inactive"), department, email, and mobile number.
  
  ### Update/Delete Page
  * Users can **`Update Existing Student`** information.
  * The department field is disabled for editing during updates.
  * Users can **`Delete an Existing Student`** data using its ID.
  
  ### Search For Active Students Page
  * Users can **`Search for Active Students`** by name.
  * Students with similar names and active status are rendered as a table.

  ### Assign Department Page
  * Users can select a specific student by ID to **`Assign a Department`**.
  * The page includes student ID, a dropdown list for available departments, and a submit button.
  * This action is applicable for students if the level is above or equal to 3; otherwise, an error message is displayed.
  
  ### View Active and Inactive Students Page
  * Users can **`View all Active or Inactive Students`** in a separate page.
  * Active Students are rendered in a separate table with a related set of attributes.
  * Inactive Students are renderend in another separate table with a related set of attributes.
  
  ### Change Status Page
  * Users can **`Change the Status of a Student`** from **Active to Inactive or vice versa** directly from the table rendered in the page of all active and inactive students.

