export async function GET(request: Request, response: Response) {
  return new Response(JSON.stringify({ msg: "get tike" }));
}

export async function POST(request: Request) {
  try {
    // * get username from request body
    const { username } = await request.json();

    // * compare username with database
    const isValid = username === "tike";

    // * if username is valid, return success
    return new Response(JSON.stringify({ msg: isValid ? "success" : "fail" }));
  } catch (error) {
    // * if error, return error
    return new Response(JSON.stringify({ msg: error }));
  }
}

export async function PATCH(request: Request, response: Response) {
  return new Response(JSON.stringify({ msg: "patch tike" }));
}

export async function DELETE(request: Request, response: Response) {
  return new Response(JSON.stringify({ msg: "delete tike" }));
}
