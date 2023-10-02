import styled from "styled-components";
import code from "../Asset/code.png";

type iKonga = {
  img: string;
  upTxt: string;
  old: string;
  percent: string;
  save: string;
  newP: string;
};

const Konga = ({ img, upTxt, old, percent, save, newP }: iKonga) => {
  return (
    <div>
      <Container>
        <Wrapper>
          <ImgHolder>
            <Img src={img ? img : code} alt="Image" />
          </ImgHolder>
          <TxtHolder>
            <UpTxt>{upTxt}</UpTxt>
            <Price>
              <New>N{newP}</New>
              <Old>N{old}</Old>
              <Percent>-{percent}%</Percent>
            </Price>
            <Save>You save N{save}</Save>
          </TxtHolder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Konga;

const Save = styled.div`
  color: green;
  font-size: 13px;
  color: darkgreen;
`;

const Percent = styled.div`
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffd7d7;
  color: #ff3b70;
  font-size: 12px;
  border-radius: 10px;
`;

const Old = styled.div`
  font-weight: 200;
  font-size: 17px;
  text-decoration: line-through;
  color: grey;
`;

const New = styled.div`
  font-weight: 600;
  font-size: 23px;
`;

const Price = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 7px 0;
`;

const UpTxt = styled.div`
  font-size: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TxtHolder = styled.div`
  width: 60%;
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const ImgHolder = styled.div`
  width: 40%;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Container = styled.div`
  width: 410px;
  height: 160px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 13px 18px;
  }
`;
