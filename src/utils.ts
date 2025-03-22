import ImageKit from "imagekit";

export const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: "private_+TJaNI1WwLWyFA3hrqX62UQHD08=",
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});
