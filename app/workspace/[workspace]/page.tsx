import Navbar from "./navbar";
import Apps from "./apps";
import Sidebar from "./sidebar";
import View from "./view";
import Infrastructure from "./infrastructure";
import { LayoutRoot } from "@/components/index";

export default async function Index({ params, searchParams }: any) {
  return (
    <Infrastructure params={params} searchParams={searchParams}>
      <LayoutRoot>
        <Navbar />
        <Apps />
        <Sidebar />
        <View />
      </LayoutRoot>
    </Infrastructure>
  );
}
