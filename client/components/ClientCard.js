import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Button,
  Icon,
  Right,
} from "native-base";

export default ClientCard = (props) => {

  return (
    <Container
      style={{
        backgroundColor: "#ffff57",
        flexDirection: "row",
        alignContent: "flex-end"
        
      }}
    >
      <Content padder>
        <Card >
          <CardItem header bordered>
            <Left>
              <Body>
                <Text>Your Balance</Text>
              </Body>
            </Left>
            <Text>{props.user.name} {props.user.surname}</Text>
          </CardItem>
          <CardItem cardBody>
            <Body style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 33, padding:15 }}>
                ${props.user.account.balance}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};


// const styles = StyleSheet.create({
//   client: {
//     // top: "43%",
//     width: 350,
//     height: 150,
//     backgroundColor: "#fb5f3b",
//     zIndex: 2,
//     justifyContent: "center",
//     opacity: 0.77,
//   },
//   img: {
//     width: 66,
//     height: 66,
//     borderRadius: 50,
//     top: 30,
//     left: "7%"
//   },
//   text: {
//     alignSelf: "center",
//     color: "white",
//     fontSize: 24,
//     left: "15%",
//     bottom: "25%"
//   },
// });



