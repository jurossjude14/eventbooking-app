import { NextResponse, NextRequest } from "next/server";
import { getDocs, collection, addDoc, where, DocumentData } from "firebase/firestore";

import { db } from '@/app/firebase';

export async function GET(request) {
  try {
    const querySnapshot = await getDocs(collection(db,"blogdb"));
    const tempArr = [];
    querySnapshot.forEach((doc)=> {
       tempArr.push({id: doc.id,...doc.data()});
    }); 
    return NextResponse.json({ message:"success", status: 200, data:tempArr});
  } catch (error) {
    return NextResponse.json({ message:`${error}`});
  }
};


export async function POST(request) {
  try {
    const res = await request.json();
    const title = res?.title;
    const desc = res?.desc;
    const category = res?.category;
    const docRef = await addDoc(collection(db,"blogdb"), {title, desc, category});
    return NextResponse.json({ message:"Succesfuly added data", docId: docRef.id})
  } catch (error) {
    return NextResponse.json({ message:`${error}`});
  }
};