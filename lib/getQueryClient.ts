import { queryClientOptions } from "./utils";
import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

const getQueryClient = cache(() => new QueryClient(queryClientOptions));
export default getQueryClient;
