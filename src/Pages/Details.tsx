import React from "react";
import styled from "styled-components";
import tv from "../Asset/169529_1604051771.webp";
import { useParams } from "react-router-dom";
import data from "../Block/konga.json";

export function Details() {
  const params: any = useParams();
  const details = data[params.id - 1];

  return (
    <Container>
      <Wrapper>
        <Left>
          <Img src={details.img} />
        </Left>
        <Right>
          <Top>
            <Title>{details.UpTxt}</Title>
            <Desc>
              <p>Product Code: 5424856</p>
              <p>Brand: Hisense</p>
            </Desc>
          </Top>
          <Price>
            <p>${details.new}</p>
            <sub>${details.old}</sub>
            <span>You save ₦22,000</span>
          </Price>
          <Quantity>
            <Up>
              <CountDesc>Quantity:</CountDesc>
              <Count>
                <Minus>-</Minus>
                <Num>1</Num>
                <Plus>+</Plus>
              </Count>
            </Up>
            <Call>
              <p>Call us for bulk purchases:</p>
              <p>Click here to show phone number</p>
            </Call>
          </Quantity>
          <Button>Buy Now</Button>
        </Right>
      </Wrapper>
    </Container>
  );
}

const P = styled.div`
  width: 2px;
  height: 60px;
  border-width: 174px;
  border-style: solid;
  border-color: transparent transparent black;
`;
const Button = styled.div`
  width: 50%;
  height: 20px;
  background-color: green;
  padding: 10px;
  text-align: center;
  color: white;
  border-radius: 5px;
`;
const Call = styled.div`
  margin: 17px 0 0 0;
  border-bottom: 1px solid silver;
  margin-bottom: 20px;
  p {
    margin: 8px 0 8px;
    line-height: 1.3;
    font-size: 14px;
  }
  margin-bottom: 20px;
`;
const Minus = styled.div`
  border-right: 1px solid silver;
  text-align: center;
  padding-right: 10px;
`;
const Num = styled.div``;
const Plus = styled.div`
  border-left: 1px solid silver;
  padding-left: 10px;
`;
const Count = styled.div`
  width: 100px;
  height: 20px;
  border: 1px solid silver;
  color: gray;
  display: flex;
  gap: 15px;
  justify-content: space-evenly;
  padding: 3px;
  font-size: 20px;
  align-items: center;
`;
const CountDesc = styled.div`
  font-size: 14px;
`;
const Up = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Quantity = styled.div``;
const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid silver;
  margin-bottom: 20px;

  p {
    font-size: 25px;
  }
  sub {
    font-size: 14px;
    padding-top: 10px;
    text-decoration: line-through;
    color: gray;
  }
  span {
    font-size: 14px;
    padding-top: 10px;
    color: green;
  }
`;
const Top = styled.div`
  border-bottom: 1px solid silver;
`;
const Desc = styled.div`
  p {
    margin: 8px 0 0;
    line-height: 1.3;
    font-size: 14px;
  }
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Left = styled.div`
  width: 400px;
  height: 350px;
`;

const Right = styled.div`
  width: 60%;
  height: 50vh;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
