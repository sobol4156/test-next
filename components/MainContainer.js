import A from "../components/A";
import Head from "next/head";

export default function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <title>Моя Главная Страница</title>
        <meta name="description" content="Описание вашей главной страницы" />
        <meta keywords={`Sobol, TechLid, ${keywords}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="navbar">
        <A href={"/"} text="Главная" />
        <A href={"/users"} text="Пользователи" />

        
        <style jsx>
          {`
            .navbar {
              background: #FFA500;
              padding: 15px;
              display:flex;
              gap: 20px
            }
          `}
        </style>
      </div>
      <div>{children}</div>
    </>
  );
}
