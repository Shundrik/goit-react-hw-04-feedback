import styled from "styled-components"

const NotificationText = styled.p`
text-align:center;
font-size: 20px;
`

export const Notification = ()=>{
    return ( 
        <NotificationText>There is no feedback</NotificationText>
    )
}