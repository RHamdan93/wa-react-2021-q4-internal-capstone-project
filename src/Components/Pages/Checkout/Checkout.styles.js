import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.div`
  padding: 0 0 10% 0;
  margin: 0 10% 0 10%;
`;

export const TransparentLink = styled(Link)`
  display: inline-block;
  margin: 20px 0 20px 0;
  padding: 5px 20px 5px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  border-radius: 15px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const LinksContainter = styled.div`
  display: flex;
  justify-content: space-around;
`;
