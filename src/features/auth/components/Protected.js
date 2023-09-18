import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser } from "../authSlice";

function Protected({ children }) {
  const user = useSelector(selectLoggedInUser);

  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
}

export default Protected;

// mongodb+srv://E00tshirt:<password>@cluster0.lgdalnt.mongodb.net/?retryWrites=true&w=majority
// princerajprince00raj