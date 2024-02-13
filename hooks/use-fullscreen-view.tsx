import { useFullscreen } from "@mantine/hooks";
export default function useFullscreenView() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return { ref, toggle, fullscreen };
}
