import React, { useState } from "react";
import Login from "./login";  // Login.js file correct location lo undali
import StudentManagement from "./StudentManagement"; // just created file

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <StudentManagement />
      ) : (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;
