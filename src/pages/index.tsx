import { FaCalendar, FaUser } from 'react-icons/fa';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <main className={styles.contentContainer}>
      <div className={styles.logo}>
        <img src="/images/Logo.svg" alt="Logo" />
      </div>
      <div className={styles.posts}>
        <Link href="/posts/">
          <a className={styles.post}>
            <strong>O mundo mudou e agora há desafios</strong>
            <p>ash uaejii aiefjaiej aeif aiefjaeifanefiai efaiefaiefiae fa </p>
            <span>
              <FaCalendar /> 18 Abr 2021
              <FaUser /> Danilo Vieira
            </span>
          </a>
        </Link>
        <Link href="/posts/">
          <a className={styles.post}>
            <strong>O mundo mudou e agora há desafios</strong>
            <p>ash uaejii aiefjaiej aeif aiefjaeifanefiai efaiefaiefiae fa </p>
            <span>
              <FaCalendar /> 18 Abr 2021
              <FaUser /> Danilo Vieira
            </span>
          </a>
        </Link>
        <Link href="/posts/">
          <a className={styles.post}>
            <strong>O mundo mudou e agora há desafios</strong>
            <p>ash uaejii aiefjaiej aeif aiefjaeifanefiai efaiefaiefiae fa </p>
            <span>
              <FaCalendar /> 18 Abr 2021
              <FaUser /> Danilo Vieira
            </span>
          </a>
        </Link>
      </div>
      <div className={styles.loading}>
        <button>Carregar mais posts</button>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsResponse = await prismic.getByType('posts', { pageSize: 2 });
  const postsPagination = {
    results: postsResponse.results,
    next_page: postsResponse.results_per_page,
  };

  return {
    props: {
      postsPagination,
    },
  };
};
