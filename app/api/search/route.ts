const subjects: string[] = ["Math", "Physics", "Thai"];
const sports: string[] = ["Football", "Basketball", "Tennis"];

const categories: { [key: string]: string[] } = { subjects, sports };

export async function GET(request: Request, response: Response) {
  const url: URL = new URL(request.url);
  const search = url.searchParams.get("category");

  return new Response(JSON.stringify({ categories: categories[search ?? ""] }));
}
