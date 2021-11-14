import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { useSession, getSession } from "next-auth/client";
import Login from "../components/login";

export default function Home() {
  const [session] = useSession();
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Custom-Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl"></Icon>
            </Button>
          </div>
          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
              <Image src="https://links.papareact.com/pju" layout="fill" />
            </div>
            <p className="ml-2 mt-2 font-semibold">Blank</p>
          </div>
        </div>
      </section>
      <section className="px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8">
          <div className="flex items-center justify-between pb-5">
            <h2 className="flex-grow text-lg">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="blue" />
          </div>
        </div>
      </section>
    </div>
  );
}
