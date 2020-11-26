import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 5px;
  &::-webkit-scrollbar {
    display: none;
  }
  &.fixed {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(0.5);
    z-index: 1;
  }
`;

export const Item = styled.li`
  padding: 0px 8px;
`;
