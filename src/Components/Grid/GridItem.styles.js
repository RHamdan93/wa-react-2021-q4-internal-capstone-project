import styled from "styled-components";

export const GridItemDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 20px;
  text-align: center;
  border: 2px solid black;
  margin: 5px;
`;

export const GridItemSection = styled.div`
  margin: 0 0 10px 0;
  position: relative;

  & img {
    max-width: 40%;
    border-width: 4px;
    border-style: solid;
  }

  & i {
    right: 5px;
    bottom: 5px;
    text-align: right;
  }
`;

export const GridItemTitle = styled(GridItemSection)`
  font-size: 25px;
  font-weight: bold;
`;
