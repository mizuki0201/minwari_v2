import React, { FC } from "react";
import Head from "next/head";

type Props = {
  title: string;
  description: string;
};

export const HeadPresenter: FC<Props> = ({ title, description }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
    />
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);
