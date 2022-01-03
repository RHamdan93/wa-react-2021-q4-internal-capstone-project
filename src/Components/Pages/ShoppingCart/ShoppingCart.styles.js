import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductThumbnail = styled.img`
  width: 20%;
`;

export const ProceedToCheckoutButton = styled(Link)`
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

export const CartEmptyMessage = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const ProductTable = styled.table`
  border-collapse: collapse;

  & tr {
    border: solid;
    border-width: 1px 0;
  }

  & tr:first-child {
    border-top: none;
  }

  & tr:last-child {
    border-bottom: none;
  }
`;
