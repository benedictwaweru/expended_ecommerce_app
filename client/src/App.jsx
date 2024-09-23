import { Routes, Route, Navigate } from "react-router-dom";
import { AuthLayout } from "./components/auth/AuthLayout";
import { AdminLayout } from "./components/admin/AdminLayout";
import ShoppingLayout from "./components/shopping/ShoppingLayout";
import ShoppingHome from "./pages/shopping/ShoppingHome";
import ShopListing from "./pages/shopping/ShopListing";
import Checkout from "./pages/shopping/Checkout";
import Account from "./pages/shopping/Account";
import CheckAuth from "./components/common/CheckAuth";
import PageNotFound from "./pages/notFound/PageNotFound";
import UnauthorizedPage from "./pages/unauthorized/UnauthorizedPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminFeatures from "./pages/admin/AdminFeatures";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProducts from "./pages/admin/AdminProducts";

export default function App() {
  const isAuthenticated = false;
  const user = null;

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user} >
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user} >
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/features" element={<AdminFeatures />} />
          <Route path="/orders" element={<AdminOrders />} />
          <Route path="/products" element={<AdminProducts />} />
        </Route>
        <Route
          path="/shopping"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user} >
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="/home" element={<ShoppingHome />} />
          <Route path="/shoplisting" element={<ShopListing />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/unauthorized" element={<UnauthorizedPage />}/>
        <Route path="/pagenotfound" element={<PageNotFound/>} />
        <Route path="*" element={<Navigate to="/pagenotfound" />} />
      </Routes>
    </div>
  );
}
