import Vapi from "@vapi-ai/web";

let vapiInstance: Vapi | null = null;

export function getVapi() {
  if (!vapiInstance) {
    const token = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!;
    if (!token) throw new Error("Missing VAPI web token");
    vapiInstance = new Vapi(token);
  }
  return vapiInstance;
}
