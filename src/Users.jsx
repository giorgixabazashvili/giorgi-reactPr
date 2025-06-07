// import React from "react";

// import { Await, Link, useLoaderData } from "react-router-dom";

// export default function Users() {
//   const usersData = useLoaderData();

//   return (
//     <>
//       <div>
//         <h3>All Users list</h3>

//         <hr />
//         <React.Suspense
//           fallback={
//             <div className="d-flex gap-4 flex-wrap justify-content-center">
//               <div className="spinner-square">
//                 <div className="square-1 square"></div>
//                 <div className="square-2 square"></div>
//                 <div className="square-3 square"></div>
//               </div>
//             </div>
//           }
//         >
//           <Await resolve={usersData.data}>
//             {(loadedUsers) => {
//               return (
//                 <div className="d-flex gap-4 flex-wrap justify-content-center">
//                   {loadedUsers.map((user) => {
//                     return (
//                       <ul className=" list-group col-3" key={user._id}>
//                         <li className="list-group-item">{user.firstname}</li>
//                         <li className="list-group-item">
//                           {" "}
//                           <Link
//                             to={`/users/${user._id}`}
//                             className="btn btn-success"
//                           >
//                             Show more info
//                           </Link>
//                         </li>
//                       </ul>
//                     );
//                   })}
//                 </div>
//               );
//             }}
//           </Await>
//         </React.Suspense>
//       </div>
//     </>
//   );
// }

// import React from "react";
// import { Await, Link, useLoaderData } from "react-router-dom";

// export default function Users() {
//   const usersData = useLoaderData();

//   return (
//     <div className="users-container">
//       <h3 className="title">All Users List</h3>
//       <hr />

//       <React.Suspense
//         fallback={
//           <div className="spinner-wrapper">
//             <div className="spinner-square">
//               <div className="square-1 square"></div>
//               <div className="square-2 square"></div>
//               <div className="square-3 square"></div>
//             </div>
//           </div>
//         }
//       >
//         <Await resolve={usersData.data}>
//           {(loadedUsers) => (
//             <div className="card-grid">
//               {loadedUsers.map((user) => (
//                 <div className="user-card" key={user._id}>
//                   <h5 className="user-name">{user.firstname}</h5>
//                   <Link to={`/users/${user._id}`} className="info-button">
//                     Show more info
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           )}
//         </Await>
//       </React.Suspense>
//     </div>
//   );
// }

import React from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

export default function Users() {
  const usersData = useLoaderData();

  return (
    <div
      className="container-fluid py-4"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        {/* Page Header */}
        <div
          className="card mb-4 border-0 shadow-sm"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <div className="card-body py-4 text-center">
            <h2
              className="text-white mb-0 fw-bold"
              style={{
                textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              All Users List
            </h2>
          </div>
        </div>

        {/* Content */}
        <React.Suspense
          fallback={
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "300px" }}
            >
              <div
                className="spinner"
                style={{
                  width: "3rem",
                  height: "3rem",
                  border: "0.25em solid rgba(102, 126, 234, 0.2)",
                  borderTopColor: "#667eea",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              ></div>
            </div>
          }
        >
          <Await resolve={usersData.data}>
            {(loadedUsers) => (
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {loadedUsers.map((user) => (
                  <div className="col" key={user._id}>
                    <div
                      className="card h-100 shadow-sm border-0"
                      style={{
                        borderRadius: "15px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div
                        className="card-body text-center p-4"
                        style={{ background: "white" }}
                      >
                        <div
                          className="user-avatar mb-3 mx-auto"
                          style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "2rem",
                            fontWeight: "bold",
                          }}
                        >
                          {user.firstname.charAt(0).toUpperCase()}
                        </div>
                        <h5
                          className="card-title mb-2 fw-bold"
                          style={{ color: "#764ba2" }}
                        >
                          {user.firstname} {user.lastname}
                        </h5>
                        <p className="text-muted small mb-4">{user.email}</p>
                        <Link
                          to={`/users/${user._id}`}
                          className="btn btn-sm px-4"
                          style={{
                            background: "rgba(102, 126, 234, 0.1)",
                            color: "#667eea",
                            borderRadius: "20px",
                            border: "1px solid rgba(102, 126, 234, 0.3)",
                            fontWeight: "500",
                            transition: "all 0.3s ease",
                          }}
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Await>
        </React.Suspense>
      </div>
    </div>
  );
}
