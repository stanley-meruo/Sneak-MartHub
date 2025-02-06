import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "/supabase"; // Ensure correct path
import { FiLoader } from "react-icons/fi";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const checkUser = async () => {
  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser();
  //     if (!user) {
  //       navigate("/login");
  //     } else {
  //       setUser(user);
  //     }
  //   };

  //   checkUser();
  // }, [navigate]);
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log("User data from Supabase:", user); // Debugging

      if (!user) {
        window.location.replace("/login"); // 🚀 Hard Redirect to Fix Mobile Issue
      } else {
        setUser(user);
      }
    };

    checkUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };


  return (
    <main className="bg-gray-100 flex flex-col items-center justify-center min-h-screen text-darkBlue p-6">
      <div className="bg-white shadow rounded p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        {user ? (
          <>
            <p className="text-lg mb-4">Welcome, {user.email} 👋</p>
            {user.user_metadata?.avatar_url && (
              <img
                src={user.user_metadata.avatar_url}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
              />
            )}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="grid p-4">
            <FiLoader  className="mx-auto animate-spin text-3xl mb-4"/>
            <p className="text-lg">Loading...</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
