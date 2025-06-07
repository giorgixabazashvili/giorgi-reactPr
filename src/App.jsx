import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layoute from "./Layoute";
import Home from "./component/Home";
import Login from "./component/Login";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./component/Profile";
import Users from "./Users";
import UserDetails from "./component/UserDetials";
import Phones from "./component/Phones";
import Error from "./component/Error";
import { UsersLoader } from "./loader.js/loader";
import { userDetailLoader } from "./loader.js/loader";
import Tasks from "./component/Tasks";
import { requireAuth } from "./loader.js/loader";
import SignUp from "./component/SignUp";
import Edit from "./component/Edit";

// esaris pirveli metodi asec shegvidzlia gavaketot magram version 6 shi  ufro axali modaa meore
// function App() {
//   return (
//     <>
//       <div>
//         <BrowserRouter>
//           <AuthProvider>
//             <Routes>
//               <Route path="" element={<Layoute />}>
//                 <Route index path="/" element={<Home />} />
//                 <Route
//                   path="phones"
//                   // loader={async () => await requireAuth()}
//                   element={<Phones />}
//                 />
//                 <Route path="login" element={<Login />} />

//                 <Route
//                   path="users"
//                   errorElement={<Error />}
//                   element={<Users />}
//                 />

//                 <Route path="users/:id" element={<UserDetials />} />

//                 <Route
//                   path="profile"
//                   loader={async () => await requireAuth()}
//                   element={<Profile />}
//                 />
//               </Route>
//             </Routes>
//           </AuthProvider>
//         </BrowserRouter>
//       </div>
//     </>
//   );
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layoute />}>
      <Route index element={<Home />} />
      <Route path="ticket" element={<Phones />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="tasks" element={<Tasks />} />

      <Route
        path="users"
        element={<Users />}
        loader={UsersLoader}
        errorElement={<Error />}
      />
      <Route
        path="users/:id"
        element={<UserDetails />}
        loader={userDetailLoader}

        // errorElement={<Error />}
      />

      <Route path="profile" element={<Profile />} />
      <Route path="edit" element={<Edit />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
