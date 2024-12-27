import {createClient} from "next-sanity";

export const client=createClient({
    projectId:"wxd5y9tx",
    dataset:"production",
    apiVersion:"2022-03-07",
    useCdn:true,
});