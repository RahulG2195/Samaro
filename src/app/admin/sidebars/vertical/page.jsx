'use client';
import { Button, Nav, NavItem, NavLink } from "reactstrap";
// import Logo from "../../../../../public/assets/images/logo/logo_alt.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navigation = [

  {
    title: "Dashboard",
    href: "/admin",
    icon: "bi bi-speedometer2",
  },
  {
    type: "accordion",
    title: "Home Page",
    items: [
      { title: "Hero banner", href: "/admin/home/banner" ,icon: "bi bi-hdd-stack"},
      { title: "Spc Lvt section", href: "/admin/home/spcLvt" ,icon: "bi bi-hdd-stack"},
      // { title: "Design Range", href: "/admin/action/three" ,icon: "bi bi-hdd-stack"},
      { title: "Benifits", href: "/admin/home/benifits" ,icon: "bi bi-hdd-stack"},
      { title: "Floor Explorer", href: "/admin/home/floorExplorer" ,icon: "bi bi-hdd-stack",icon: "bi bi-hdd-stack" },
      { title: "Spaces", href:"/admin/home/spaces" ,icon: "bi bi-hdd-stack"},
    ],
    icon: "bi bi-hdd-stack",

  },
  {
    type: "accordion",
    title: "Why samaro page",
    items: [
      { title: "video and description", href: "/admin/whySamaro/video" ,icon: "bi bi-hdd-stack"},
      { title: "Vision , mission section", href: "/admin/whySamaro/vision_mission" ,icon: "bi bi-hdd-stack"},
      // { title: "Design Range", href: "/admin/action/three" ,icon: "bi bi-hdd-stack"},
      { title: "Benifits", href: "/admin/whySamaro/benifits" ,icon: "bi bi-hdd-stack"},
      { title: "Certifications", href: "/admin/whySamaro/certifications" ,icon: "bi bi-hdd-stack"},
      { title: "Dimension & Spaces", href: "/admin/whySamaro/dimensions" ,icon: "bi bi-hdd-stack"},
      { title: "Download center", href: "/admin/whySamaro/downloadcenter" ,icon: "bi bi-hdd-stack"},
    ],
    icon: "bi bi-hdd-stack",

  },
 
  {
    type: "accordion", title: "Product", items: [
      { title: "Hero Banner", href: "/admin/product/banner" },
      { title: "Products", href: "/admin/product" },
      // { title: "Delete Product", href: "/admin/product/delete" },
    ],
      icon: "bi bi-hdd-stack",

  },
  {
    title: "Gallery",
    href: "/admin/gallery",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Download Center",
    href: "/admin/downloadCenterPage",
    icon: "bi bi-hdd-stack",
  },
  {
    type: "accordion", title: "Newsletter Page", items: [
      { title: "Hero Banner", href: "/admin/newsletter/banner" },
      { title: "News", href: "/admin/newsletter" },
      // { title: "Delete Product", href: "/admin/product/delete" },
    ],
      icon: "bi bi-hdd-stack",

  },


  {
    type: "accordion",
    title: "Contact us",
    items: [
      { title: "Hero banner", href: "/admin/contactUs/banner" },
    ],
    icon: "bi bi-hdd-stack",

  },

  {
    title: "Basic Information",
    href: "/admin/basicInfo",
    icon: "bi bi-bell",
  },
  
  {
    title: "Colors",
    href: "/admin/color",
    icon: "bi bi-bell",
  },
  
  {
    title: "Newsletter mails",
    href: "/admin/emailList",
    icon: "bi bi-bell",
  },
  
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3 sidebarBgColor h-100">
      <div className="d-flex align-items-center justify-content-between ">
        <img src="/assets/images/logo/logo_alt.png" alt="" className="w-50" />
        <div className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
            onClick={showMobilemenu}
          ></Button>
        </div>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav sidebarBgColor">
          {navigation.map((navi, index) => {
            if (navi.type === "accordion") {
              return (
                <div className="accordion accordion-flush adminHeader sidebarBgColor" id={`accordionFlushExample${index}`} key={index}>
                  <div className="accordion-item sidebarBgColor">
                    <div
                      className="accordion-button collapsed p-3 text-secondary sidebarBgColor"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${index}`}
                    >
                      <i className={navi.icon}></i>
                      <span className="ms-3 d-inline-block">{navi.title}</span>
                    </div>
                    <ul
                      id={`flush-collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`flush-heading${index}`}
                      data-bs-parent={`#accordionFlushExample${index}`}
                    >
                      {navi.items.map((item, subIndex) => (
                        <li className="nav-item  d-inline-block" key={subIndex}>
                          <NavLink href={item.href} className="nav-link">
                            {item.title}
                          </NavLink>
                        </li>
                      ))}

                    </ul>
                  </div>
                </div>
              );
            }
            return (
              <NavItem key={index} className="sidenav-bg">
                <Link href={navi.href} className={
                  location === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }>
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </Link>
              </NavItem>
            );
          })}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
