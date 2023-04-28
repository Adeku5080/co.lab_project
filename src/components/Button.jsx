import React ,{useState}from 'react'
import styled from 'styled-components'


 const Button = ({ text, link }) => {
  const [showButton, setShowButton] = useState(true);
  return (
    <Btn show>
      <a href={link} aria-label={text} target="_blank" rel="norefferrer">
        {text}
      </a>
    </Btn>
  );
};

const Btn = styled.button`
  display: inline-block;
  background-color: #FF78F0;
  color: #ffffff;
  outline: none;
  border: none;

  font-size:0.875em;
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  @media(max-width :800px){
      padding:0.4rem 1rem;
      font-size:0.75em;
}

  a {
    text-decoration:none;
    color:#ffffff;
    font-size:16px;
    font-weight:600;
    line-height:24px;

  }

  &:hover {
    transform: scale(0.9);
    background:#865DFF;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #FF78F0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;


export default Button;