import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavbarBrand,
  Dropdown,
  Form,
  Badge,
  Button,
} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <NavbarBrand>
          <Link to="/">A_Shopping card</Link>
        </NavbarBrand>
        <Form>
          <Form.Control
            type="search"
            placeholder="Search"
            className=" m-auto search "
            style={{ width: 500 }}
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </Form>
        <Nav>
          <Dropdown align="end">
            <DropdownToggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </DropdownToggle>
            <DropdownMenu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartItem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>${prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
