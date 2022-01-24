const dev = process.env.NODE_ENV !== "production";

export const appUrl = dev
  ? "http://localhost:3000"
  : "https://e-commerce-tau-tan.vercel.app";
