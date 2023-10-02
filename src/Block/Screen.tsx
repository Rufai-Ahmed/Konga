import styled from "styled-components";
import Konga from "./Konga";
import data from "./konga.json";
import { Link, useParams } from "react-router-dom";

const Screen = () => {
  const params: any = useParams();
  return (
    <div>
      <Container>
        {data.map((el) => (
          <Wrap to={`id/${el.id}`}>
            <Konga
              key={el.id}
              img={el.img}
              newP={el.new}
              old={el.old}
              percent={el.percent}
              save={el.save}
              upTxt={el.UpTxt}
            />
          </Wrap>
        ))}
      </Container>
    </div>
  );
};

export default Screen;

const Wrap = styled(Link)``;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
