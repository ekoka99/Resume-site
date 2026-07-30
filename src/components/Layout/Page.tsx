import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();
  const siteUrl = 'https://ekoka99.github.io/Resume-site';
  const canonicalUrl = `${siteUrl}${pathname === '/' ? '/' : pathname}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content="index,follow" name="robots" />
        <meta content="#eef2f6" name="theme-color" />
        <link href={canonicalUrl} key="canonical" rel="canonical" />
        <link href="/Resume-site/favicon.ico" rel="icon" sizes="any" />
        <link href="/Resume-site/site.webmanifest" rel="manifest" />
        <meta content="website" property="og:type" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={canonicalUrl} property="og:url" />
        <meta content="summary" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
