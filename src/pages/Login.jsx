import { useNavigate } from "react-router-dom";
import { supabase } from "/supabase";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin + "/dashboard" },
    });

    if (error) console.error("Login error:", error.message);
  };


  return (
    <main className="bg-gradient-to-b from-primary via-teal-50 to-secondary flex items-center justify-center text-darkBlue min-h-screen font-parkisans">
      <div className="bg-white grid space-y-8 shadow rounded border p-8 w-full max-w-md mx-4 md:space-y-10">
        <h1 className="text-2xl font-semibold text-darkBlue text-center mb-4 md:text-2xl lg:text-3xl">
          Login
        </h1>

        <button
          onClick={handleGoogleLogin}
          aria-label="Login with Google"
          className="flex items-center justify-center gap-4 w-full p-3 bg-white border rounded-md shadow-md hover:bg-gray-100 transition text-sm md:text-lg"
        >
          <FcGoogle className="text-3xl md:text-4xl" />
          Login with Google
        </button>
      </div>
    </main>
  );
};

export default Login;
