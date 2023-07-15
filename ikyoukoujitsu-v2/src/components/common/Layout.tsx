import { Noto_Serif_JP } from "next/font/google";

const notojp = Noto_Serif_JP({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
  // display: "swap",
});

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return <div className={notojp.className}>{children}</div>;
};

export default Layout;
