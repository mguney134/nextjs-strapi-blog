import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import  { ThemeSwitcher } from "./ui/ModeSwitcher";

const SiteHeader = () => {
  return (
    <Navbar>
    <NavbarBrand>
      
      <p className="font-bold text-inherit">SITE NAME</p>
    </NavbarBrand>
    <NavbarContent className=" sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="#">
          Features
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          Customers
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Integrations
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className=" lg:flex">
        <ThemeSwitcher />
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  );
};
export default SiteHeader;