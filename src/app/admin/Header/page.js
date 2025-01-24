'use client';
import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Nav,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";;
// import ResetPass from "@/components/Admin/ResetPassword/resetPass";
// import ResetPass from "../components/Admin/ResetPassword/resetPass";
import ResetPass from "../../../components/Admin/ResetPassword/ResetPass";

import { useRouter } from "next/navigation";
import axios from "axios";

const Header = ({ showMobmenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
const router = useRouter()

  const toggleResetModal = () => {
    setShowResetForm(!showResetForm); 
  };
  const closeResetModal = () => {
    setShowResetForm(false); 
  };

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const toggleCollapse = () => setIsOpen(!isOpen);

  const handleReset = () => {
    setShowResetForm(true); 
  };

  const closeResetForm = () => {
    setShowResetForm(false); 
  };

  const handleLogout = async () => {
    try {
      localStorage.clear();
      await axios.delete('/api/login');
      router.push('/admin/adminLogin'); 
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

  return (
    <Navbar color="danger" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
        </NavbarBrand>
        <Button color="danger" className="d-lg-none" onClick={showMobmenu}>
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="danger"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={toggleCollapse}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>
{/* SAMARO@123 */}
      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto Admin" navbar>
          {/* Your navigation links */}
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="danger">
            <div style={{ lineHeight: "0px" }}>
              <i className="bi bi-person-workspace"></i>
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem onClick={handleReset}>Reset Password</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
      <Modal isOpen={showResetForm} toggle={toggleResetModal} centered>
        {/* <ModalHeader toggle={toggleResetModal}></ModalHeader> */}
        <ModalBody>
          <ResetPass onClose={closeResetModal} />
        </ModalBody>
      </Modal>   
       </Navbar>
  );
};

export default Header;
