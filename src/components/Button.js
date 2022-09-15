import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  justify-content: center;
  align-items: center;
  background: ${({ primary }) => (primary ? "#00FFC2" : "#251061")};
  white-space: nowrap;
  padding: 10px 10px 10px 10px;
  color: ${({ primary }) => (primary ? "#251061" : "#00FFC2")};
  font-size: ${({ large }) => (large ? "20px" : "14px")};
  outline: none;
  border: none;
  min-width: 150px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "2px" : "none")};
  font-weight: 500;
  text-align: center;

  &:hover {
    background: ${({ primary }) => (primary ? "#251061" : "#00FFC2")};
    transform: translateY(-2px);
    color: #fff;
    border: 1px solid #fff;
  }
`
