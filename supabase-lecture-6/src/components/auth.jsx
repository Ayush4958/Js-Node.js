import React , {useState} from 'react'
import { supabase } from '../supabaseclient';

function Auth() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(isSignIn){
        const {user , error} = await supabase.auth.signUp({email , password}) 
        if(error){
            console.log("Error in signing up" , error)
        }
    }
    else{
        const {user , error} = await supabase.auth.signInWithPassword({email , password})
        if(error){
            console.log("Error in signing in" , error)
        }
    }

    console.log(isSignIn ? 'Sign In' : 'Sign Up', { email, password });
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg w-full max-w-sm shadow-lg"
      >
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 mb-6 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full py-2 mb-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition duration-200"
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>

        <button
          type="button"
          onClick={() => setIsSignIn(!isSignIn)}
          className="w-full py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition duration-200"
        >
          {isSignIn ? 'Switch to Sign Up' : 'Switch to Sign In'}
        </button>
      </form>
    </div>
    </>
  )
}

export default Auth
