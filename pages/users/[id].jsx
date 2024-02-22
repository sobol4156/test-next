import { useRouter } from "next/router";
import styles from "../../styles/user.module.sass";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer>
      <div className={styles.user}>
        <div className={styles.user}>
          <h3>Пользователь номер: {query.id}</h3>
          <div>Имя Пользователя - {user.name}</div>
        </div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await responce.json();

  return {
    props: { user },
  };
}
