import { lazy } from "react"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";

const Products = lazy(() => import("./pages/Products"))
const Cart = lazy(() => import("./pages/Cart"))
const Checkout = lazy(() => import("./pages/Checkout"))
const Login = lazy(() => import("./pages/Login"))
const About = lazy(() => import("./pages/AboutUs"))

const appRoutes = [{
    path:"/", requiresAuth:false ,component:Home
},
{path:"/products/:category?", requiresAuth:false, component:Products},
{path:"/cart", component:Cart, requiresAuth:false},
{path:"/checkout", component:Checkout, requiresAuth:true},
{path:"/login", component:Login, requiresAuth:false},
{path:"aboutus", component:About, requiresAuth:false},
{path:"*", component:NotFound, requiresAuth:false}
] 

export default appRoutes