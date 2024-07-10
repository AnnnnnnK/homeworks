import styled from 'styled-components';

import React from 'react'

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


// export const Containerk = styled('div')(({ id }) => {
// 	const isOnline = id % 2 === 0
// 	return {
// 		textAlign: 'center',
// 		h1: {
// 			color: isOnline ? 'green' : 'red',
// 		},
// 	}
// })
