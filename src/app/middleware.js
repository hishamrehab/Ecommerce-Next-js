// const PrivateRoute = () => {
//   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
// };

// export default PrivateRoute;

export function middleware({ children }) {
  if (loading) {
    return <div>Loading....</div>;
  }
  if (user) {
    return children;
  }
}

export const config = {
  matcher: "/cart",
};
