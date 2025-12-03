import { RequestHandler } from "express";
import { z } from "zod";
import { Resend } from "resend";
import type { ContactFormData, ContactResponse } from "@shared/api";

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required").trim()
});

export const handleContact: RequestHandler = async (req, res) => {
  try {
    // Validate request body
    const data = contactFormSchema.parse(req.body) as ContactFormData;

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: "noreply@ventechplus.xyz",
      to: "admin@ventechplus.xyz",
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ""}
        ${data.company ? `<p><strong>Company:</strong> ${escapeHtml(data.company)}</p>` : ""}
        <h3>Message:</h3>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
      `
    });

    if (adminEmailResult.error) {
      console.error("Failed to send admin email:", adminEmailResult.error);
      return res.status(500).json({
        success: false,
        message: "Failed to send email. Please try again later."
      } as ContactResponse);
    }

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: "noreply@ventechplus.xyz",
      to: data.email,
      subject: "We received your message - BlackBugs Technologies",
      html: `
        <h2>Thank You for Contacting Us!</h2>
        <p>Hi ${escapeHtml(data.name)},</p>
        <p>We received your message and appreciate you reaching out to BlackBugs Technologies.</p>
        <p>Our team will review your inquiry and get back to you as soon as possible.</p>
        <p>Best regards,<br>The BlackBugs Technologies Team</p>
      `
    });

    if (userEmailResult.error) {
      console.error("Failed to send confirmation email:", userEmailResult.error);
      // Don't fail the response if confirmation email fails, as the admin email was sent successfully
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully. We'll get back to you soon!"
    } as ContactResponse);
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      const firstError = error.errors[0];
      return res.status(400).json({
        success: false,
        message: firstError.message
      } as ContactResponse);
    }

    // Handle other errors
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing your request. Please try again later."
    } as ContactResponse);
  }
};

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
