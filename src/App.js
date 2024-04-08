import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardHome from "./Pages/DashboardHome";
import DashboardOverviewUser from "./Pages/DashboardOverviewUser";
import DashboardOverviewMerchant from "./Pages/DashboardOverviewMerchant";
import TransactionHistory from "./Pages/TransactionHistory";
import SupaAdmin from "./Pages/SupaAdmin";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardHome />}/>
          <Route path="/user-overview" element={<DashboardOverviewUser />}/>
          <Route path="/merchant-overview" element={<DashboardOverviewMerchant />}/>
          <Route path="/transaction-history" element={<TransactionHistory />}/>
          <Route path="/supa-admin" element={<SupaAdmin />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
