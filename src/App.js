import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardHome from "./Pages/DashboardHome";
import DashboardOverviewUser from "./Pages/DashboardOverviewUser";
import DashboardOverviewMerchant from "./Pages/DashboardOverviewMerchant";
import TransactionHistory from "./Pages/TransactionHistory";
import SupaAdmin from "./Pages/SupaAdmin";
import UserDetails from "./Pages/UserDetails";
import MerchantDetails from "./Pages/MerchantDetails";
import PrivateRoute from "./Context/AuthContext";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />}/>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardHome />}/>
            <Route path="/user-overview" element={<DashboardOverviewUser />}/>
            <Route path="/merchant-overview" element={<DashboardOverviewMerchant />}/>
            <Route path="/transaction-history" element={<TransactionHistory />}/>
            <Route path="/supa-admin" element={<SupaAdmin />}/>
            <Route path="/user-details/:id" element={<UserDetails />}/>
            <Route path="/merchant-details" element={<MerchantDetails />}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
