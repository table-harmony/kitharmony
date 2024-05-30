import { env } from "@/env";
import { lemonSqueezySetup } from "@lemonsqueezy/lemonsqueezy.js";

export default lemonSqueezySetup({
  apiKey: env.LEMONSQUEEZY_API_KEY,
});
