import Link from "next/link";
import { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";

export default function Users({ users }) {
  return (
    <MainContainer>
      <div className="main">
        <div className="users">
          <h1>Пользователи</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <Link href={`/users/${user.id}`}>
                  <h4> {user.name}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <style>
          {`
            .main{
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .users{
              text-align:center;
            }
            h1{
              font-size: 4em;
              margin-bottom: 50px
            }
            ul{
              list-style-type:none;
            }
            li{
              margin: 15px 0;
              font-size: 35px
            }
          `}
        </style>
      </div>
    </MainContainer>
  );
}

export async function getStaticProps(context) {
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await responce.json();
  return {
    props: { users },
  };
}
