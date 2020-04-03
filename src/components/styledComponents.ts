import styled from "styled-components";

interface MyTagProps {
    unread: boolean;
}

export const Div = styled.div`
background-color: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.font};
`;

export const FillerDiv = styled.div`
background-color: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.font};
height: 100vh;`;

export const ReadOrUnread = styled.li`
    background-color: ${ (props: MyTagProps) => (
    props.unread
        ? 'lightcyan'
        : 'white')};
`;

export const RedBanner = styled.h3`
        color: ${props => props.theme.colors.banner}`;

export const StyledInput = styled.input`
color: ${props => props.theme.colors.font}
background-color: ${props => props.theme.colors.input}
width: 20%;
margin: 8px 0;
box-sizing: border-box
`;


export const StyledTextArea = styled.textarea`
  color: ${props => props.theme.colors.font}
  background-color: ${props => props.theme.colors.textarea};
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

export const StyledBtn = styled.button`
background-color: ${props => props.theme.colors.btnBackground};
  border: none;
  color: ${props => props.theme.colors.btn};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export const StyledNavBtn = styled.button`
background-color: ${props => props.theme.colors.navbtnBackground};
  border: none;
  color: ${props => props.theme.colors.navbtn};
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
`;