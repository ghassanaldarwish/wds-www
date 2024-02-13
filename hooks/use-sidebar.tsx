import { useLocalStorage } from "@mantine/hooks";

export default function useSidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useLocalStorage({
    key: "isOpenSidebar",
    defaultValue: false,
  });

  const toggleSidebar = () => setIsOpenSidebar((prev) => !prev);

  return { isOpenSidebar, toggleSidebar };
}
