import styled from 'styled-components';

export const ConatinerProfile = styled.section`
  max-width: 860px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.header`
  header{
    display: flex;
    justify-content: space-between;

    h1{
      max-width: 482px;
      height: 84px;

      font-family: Roboto, sans-serif;
      font-size: 36px;
      font-weight: bold;
    }

    button{
      border: 0;
      border-radius: 5px;
      padding: 8px 16px;

      font-family: Roboto, sans-serif;
      font-size: 18px;
      text-align: center;
    }
  }
`;

export const PictureProfile = styled.div`
  img{
    margin-top: 50px;
    max-width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const Menu = styled.section`
  margin-top: 80px;

  h2{
    font-family: Roboto, sans-serif;
    font-size: 30px;
    font-weight: bold;
  }
`;
