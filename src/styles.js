import styled from 'styled-components';

// styled-components removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component that has your styles attached to it.

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  background-color: #fff;
  width: 50%;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`