import { NextRequest, NextResponse } from "next/server";

const product:any = []

export function GET () {
    console.log(product)
    return NextResponse.json(product)
}

export async function POST (request: NextRequest) {
    const body = await request.json() //response in
    console.log("backend",body)
    product.push(body)
    return NextResponse.json(body) // response out
}