import {  doc, deleteDoc, updateDoc,collection,getDoc } from "firebase/firestore";
import { NextResponse, NextRequest } from "next/server";
import { db } from '@/app/firebase';

export async function PATCH(request, {params}) {
    try {
        const id = params?.id;
        const res = await request.json();
        const blogRef = doc(db,"blogdb", id);

        await updateDoc(blogRef, res);
        return NextResponse.json({ message:"Sucessfully document Update"});
    } catch (error) {
        return NextResponse.json({ message:`${error}`});
    }
}


export async function DELETE(request, {params}) {
    try {
        const id = params?.id;
        await deleteDoc(doc(db, "blogdb", id))
        return NextResponse.json({ message:"Sucessfully Delete Data"});
    } catch (error) {
        return NextResponse.json({ message:`${error}`});
    }
}

export async function GET(request,{params}) {
    try {
      const id = params?.id;  
      const docRef = doc(collection(db, 'blogdb'), id);
      const docSnap = await getDoc(docRef);
      const singleObj = docSnap.data();
      return NextResponse.json({ message:"success", status: 200, data:singleObj});
    } catch (error) {
      return NextResponse.json({ message:`${error}`});
    }
}