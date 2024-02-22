import MainContainer from "../components/MainContainer";

const Index = () => {
  return (
    <MainContainer keywords={"Начальная страница"}>
      <h1 >Главная</h1>
      <style>
        {`
          h1{
            text-align: center;
            margin-top: 50%;
            font-size: 5em
          }
        `}
      </style>
    </MainContainer>
  );
};

export default Index;
