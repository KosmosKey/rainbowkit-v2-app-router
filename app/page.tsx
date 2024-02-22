import { ConnectButton } from "@rainbow-me/rainbowkit";
import { GetServerSideProps } from "next";
import { headers } from "next/headers";
import { Providers } from "./providers";

interface HomePageProps {
  cookies: string;
}

export default function Home() {
  return (
    <Providers cookie={headers().get("cookie") ?? ""}>
      <ConnectButton />
    </Providers>
  );
}
