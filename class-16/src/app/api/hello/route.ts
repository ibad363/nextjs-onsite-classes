import { NextRequest, NextResponse } from "next/server";

const product:any = []

export function GET () {
    return NextResponse.json(product)
}

export async function POST (request: NextRequest) {
    const body = await request.json() //response in
    product.push(body)
    console.log("backend",body)
    return NextResponse.json(body) // response out
}