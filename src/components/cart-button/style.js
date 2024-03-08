import styled from "styled-components";

export const CartButton = styled.button`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  margin-left: 20px;
  color: #fff
`
export const QuantiSpan = styled.span`
background-color: red;
width: 15px;
height: 15px;
position: absolute;
top: 0;
left: 0;
color: white;
font-size: 10px;
font-weight: 500;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
`