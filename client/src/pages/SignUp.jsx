import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 space-y-6 animate-fade-in">
        
        {/* Icon and Heading */}
        <div className="flex items-center justify-center gap-2 text-slate-800">
          <FaUserPlus className="text-3xl" />
          <h1 className="text-3xl font-bold">Create Account</h1>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
          />

          {/* Sign Up Button */}
          <button
            type="submit"
            className="bg-slate-700 text-white py-3 rounded-lg text-lg font-medium uppercase tracking-wider hover:bg-slate-800 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Redirect */}
        <div className="text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
