import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import TaskManager from "./components/taskbar"

function App() {

  return (
    <TaskManager />
  );
}

export default App;