import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import TaskManager from "./components/taskbar"
import Auth from "./components/auth";
import { supabase } from "./supabaseclient";

function App() {

  const [session , setsession] = useState(false)

  const fetchsession = async () =>{
    const currentsession = await supabase.auth.getSession();
    console.log(currentsession)
    setsession(currentsession.data.session)
  }

  useEffect(() =>{
    fetchsession()
  }, [])

  const logout = async() =>{
    const { error } = await supabase.auth.signOut();
    if(error){
      alert("You were log out")
      console.log("error while logging out" , error)
    }
  }

  return (
    <>

{session ? <> <button onClick={logout} className="px-3 py-1 items-center justify-center text-sm bg-red-600 text-white rounded hover:bg-red-700 ">Log Out</button> <TaskManager/> </>: <Auth/>}

    </>
  );
}

export default App;