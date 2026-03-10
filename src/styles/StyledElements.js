import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${props => props.danger ? '#ff4d4d' : '#007bff'};
  color: white;
  &:hover { opacity: 0.8; }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Select = styled.select`
  padding: 5px;
  margin-right: 10px;
`;