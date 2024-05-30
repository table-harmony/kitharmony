import { env } from "@/env";

export async function POST(request: Request): Promise<Response> {
  try {
    const response = await fetch("https://api.lemonsqueezy.com/v1/products", {
      headers: {
        Authorization: `Bearer ${env.LEMONSQUEEZY_API_KEY}`,
      },
    });
    const products = await response.json();

    return new Response(JSON.stringify(products, null, 1), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Failed", { status: 400 });
  }
}
