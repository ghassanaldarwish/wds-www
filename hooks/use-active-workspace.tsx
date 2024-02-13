import { useLocalStorage } from "@mantine/hooks";

export default function useActiveWorkspace() {
  const [activeWorkspace, setActiveWorkspace] = useLocalStorage({
    key: "activeWorkspace",
    defaultValue: "",
  });

  return { activeWorkspace, setActiveWorkspace };
}
