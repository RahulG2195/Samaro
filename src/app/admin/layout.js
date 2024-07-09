'use client';
import React from "react";
import { Container } from "reactstrap";
import Sidebar from "./sidebars/vertical/page";
import Header from "./Header/page";
import "../../../styles/style.scss"
import "../../../styles/_variables.css"
import "../../../styles/layout/_sidebar.css";
import "../../../styles/layout/_container.css";
import { ToastContainer } from "react-toastify";
import "../../app/admin/global.css"
import { useRouter,usePathname } from 'next/navigation';
// import Sidebar from "./sidebars/vertical/Sidebar";

const Admin = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);
  const showMobilemenu = () => {
    setOpen(!open);
  };

  let isAdminLoginPage;
  if(pathname === '/admin/adminLogin'){
    isAdminLoginPage = true
  }
  else{
    isAdminLoginPage = false;
  }
  
  


  return (
    <main>
      <div className="pageWrapper d-md-block d-lg-flex">
        {/******** Sidebar **********/}
        {!isAdminLoginPage && (<aside
          className={`sidebarArea shadow bg-white ${!open ? "" : "showSidebar"
            }`}
        >
          <Sidebar showMobilemenu={() => showMobilemenu()} />
        </aside>)}
        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          <Header showMobmenu={() => showMobilemenu()} />
          <ToastContainer />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <div>{children}</div>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default Admin;
