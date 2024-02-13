import { type ClassValue, clsx } from "clsx";
import slugify from "slugify";
import { twMerge } from "tailwind-merge";
import ClientCookie from "js-cookie";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createArray(N: number) {
  const arr: number[] = [];
  for (let i = 0; i < N; i++) {
    arr.push(i);
  }

  return arr;
}
export const queryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    },
  },
};

export function toQueryString(obj = {}) {
  const pairs = [];

  for (const [key, value] of Object.entries(obj)) {
    let formattedValue;

    // If the value is a variable reference (not a string literal), convert it to a template literal string
    if (typeof value === "string" && !value.includes(" ")) {
      formattedValue = `${value}`;
    } else {
      formattedValue = encodeURIComponent(value as string);
    }

    pairs.push(`${key}=${formattedValue}`);
  }

  return pairs.join("&");
}

export function toParamsString(params = []) {
  return params.length > 0 ? params.join("/") : "";
}

export function hexToHSL(H: any) {
  // Convert hex to RGB first
  let r: any = 0,
    g: any = 0,
    b: any = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + "," + s + "%," + l + "%)";
}

export const hexToHSL_Shadcn = (hex: string) => {
  const hsl: any = hexToHSL(hex);

  const c = hsl.split("(")[1].split(")")[0].split(",");

  return c.join(" ");
};

export function slugifyString(string: string) {
  return slugify(string, {
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
}

/**** Cookies ************************** */

export function isServer() {
  return !(typeof window != "undefined" && window.document);
}

export function workspaceUserTokens() {
  if (!isServer()) {
    const clientToken = ClientCookie.get("droplet_refresh_token");
    const authorization: string = `Bearer ${clientToken}`;
    const cookie: string = `droplet_refresh_token=${clientToken}`;
    return { authorization, cookie };
  } else {
    const { cookies } = require("next/headers");
    const serverCookie = cookies();
    const serverToken: any = serverCookie.get("droplet_refresh_token");

    const authorization: string = `Bearer ${serverToken.value}`;
    const cookie: string = `droplet_refresh_token=${serverToken.value}`;

    return { authorization, cookie };
  }
}
