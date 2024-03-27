'use server'
import ContactEmail from "@/email/contactEmail";
import React from "react";
import { Resend } from "resend";


const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export default async function sendEmail(formData: FormData){

    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    if(!message || typeof message != "string"){
        return{
            error: "Message is required"
        }
    }

    if(!senderEmail || typeof senderEmail != "string"){
        return{
            error: "Email is required"
        }
    }

    let data;
    let error;
    try {
        
        data = await resend.emails.send({
                from: " Portfolio Contact <onboarding@resend.dev>",
                to: "bhrittik23@gmail.com",
                subject: "Client message from my portfolio",
                reply_to: senderEmail as string,
                react: React.createElement(ContactEmail, {
                    message: message,
                    senderEmail: senderEmail,
                }) 
        
        
            })
    } catch (error: any) {
        throw new Error(`Error Occured ${error.message}`)
    }

    return { data, error }
}