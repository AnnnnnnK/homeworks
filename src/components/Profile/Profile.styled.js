import styled from 'styled-components';


export const Container = styled('div')(() => {
    return {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        div: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        img: {
            width: '300px',
            backgroundColor: 'red'
        }
            
  }
})
