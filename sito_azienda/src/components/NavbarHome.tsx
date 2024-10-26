import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export const NavbarHome = () => {
  return (
    <Navbar className="bg-gray-900 text-white shadow-lg">
      <NavbarBrand>
        <p className="font-bold text-lg">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6 justify-center">
        <NavbarItem>
          <Link href="#" className="text-white hover:text-gray-400">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" className="text-blue-500 hover:text-blue-400">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-white hover:text-gray-400">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="justify-end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-white hover:text-gray-400">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            color="primary"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
