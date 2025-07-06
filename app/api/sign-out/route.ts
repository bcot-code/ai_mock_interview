
import { NextResponse } from 'next/server';


export async function POST(){
    
    const response = NextResponse.json({success: true});
    //Clear session cookie
    response.cookies.set({
        name: 'session',
        value: '',
        maxAge: 0,
        path:'/',
    });

    return response;
}