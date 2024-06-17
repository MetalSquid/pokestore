import { Outlet } from "react-router-dom";
import Navigation from "../../Routes/navigation/navigation.component";

function AppLayout() {
    return (
        <div className="layout">
            <Navigation />
            <Outlet />

        </div>
      );
}

export default AppLayout ;
