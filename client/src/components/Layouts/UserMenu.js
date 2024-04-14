// import React from "react";
// import { NavLink } from "react-router-dom";
// const UserMenu = () => {
//   return (
//     <div>
//       <div className="text-center dashboard-menu">
//         <div className="list-group">
//           <h4>Dashboard</h4>
//           <NavLink
//             to="/dashboard/user/profile"
//             className="list-group-item list-group-item-action"
//           >
//             Profile
//           </NavLink>
//           <NavLink
//             to="/dashboard/user/orders"
//             className="list-group-item list-group-item-action"
//           >
//             Orders
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserMenu;
import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Otherstyles.css"
import { useAuth } from "../../context/auth";

const UserMenu = () => {
  const [auth] = useAuth();
  return (
    <div className="user-menu">
      <h4>Profile</h4>
      <ul className="dashboard-list">
        {/* <li>
          <NavLink to="/dashboard/user/profile" activeClassName="active">
            Profile
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/dashboard/user/orders" activeClassName="active">
            Orders
          </NavLink>
        </li> */}
        <li> <div className="col-md-9 user-menu">
            
              <h3>Name: {auth?.user?.name}</h3>
              <h3>Email: {auth?.user?.email}</h3>
            
          </div></li>
      </ul>
    </div>
  );
};

export default UserMenu;
