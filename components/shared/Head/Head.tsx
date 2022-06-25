import React, { FC } from "react";
import { HeadPresenter } from "./HeadPresenter";

type Props = {
  pageName: string;
};

export const Head: FC<Props> = ({ pageName }) => {
  const title = `${pageName} | みんわり`;

  const isIncludingPage = pageName.includes("ページ");
  const description = `割り勘アプリ「みんわり」の${pageName}${
    isIncludingPage ? "" : "ページ"
  }です`;

  return <HeadPresenter title={title} description={description} />;
};
