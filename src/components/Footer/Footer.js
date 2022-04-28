import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: gray;
  font-family: sans-serif;
`;

const Footer = () => {

  const now = new Date().getFullYear();
  return (
    <Wrapper>
      <div className="container">
        <div className="title">{`Все права защищены 2020 - ${now}`}</div>
      </div>
    </Wrapper>
  );
};

export default Footer;
