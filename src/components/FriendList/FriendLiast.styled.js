import styled from "styled-components"

export const Container = styled('li')(() => {
    return {
        display: "flex",
    }
})

export const Status = styled('span')(({ isOnline }) => ({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  marginRight: '10px',
  backgroundColor: isOnline ? 'green' : 'red',
}));