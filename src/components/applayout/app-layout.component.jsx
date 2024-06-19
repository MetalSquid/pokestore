import { Outlet } from "react-router-dom";
import Navigation from "../../Routes/navigation/navigation.component";

function AppLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default AppLayout;
