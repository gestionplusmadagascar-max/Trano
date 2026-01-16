export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  balanceAr: number;
  locale: "fr" | "en" | "mg";
  theme: "light" | "dark";
  createdAt: string;
}
