// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { supabase } from "/supabase";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const getUser = async () => {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser();
//       setUser(user);
//     };
//     getUser();

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user || null);
//     });
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={user ? <Navigate to="/dashboard" /> : <Home />}
//         />
//         <Route
//           path="/login"
//           element={user ? <Navigate to="/dashboard" /> : <Login />}
//         />
//         <Route
//           path="/dashboard"
//           element={user ? <Dashboard user={user} /> : <Navigate to="/login" />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

