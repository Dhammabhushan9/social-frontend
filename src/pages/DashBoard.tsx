import { SideBar } from "./SideBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import  { Home } from'./HomePage'
import { Profile } from "./Profile";
import { Post } from "./Post";

export const DashBoard=()=>{
    return<>
        <BrowserRouter>
        <SideBar></SideBar>

        <main className="ml-80 p-6 w-full">
        <Routes>
           
        <Route  path="/home" element={<Home/>} />
        <Route  path="/profile" element={<Profile />} />
        <Route  path="/post" element={<Post/>} />
        </Routes>
        </main>
        </BrowserRouter>
    </>
}