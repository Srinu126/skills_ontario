"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    if (!message) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission success
      setIsDialogOpen(true);

      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <div className="w-full max-w-md p-8 bg-[#2d2d2d] rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="name" className="text-lg">
              Your Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full mt-2 bg-[#444444] text-white border border-gray-600 rounded-md px-4 py-2"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="email" className="text-lg">
              Your Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-2 bg-[#444444] text-white border border-gray-600 rounded-md px-4 py-2"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          <div className="mb-6">
            <Label htmlFor="message" className="text-lg">
              Your Message
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="w-full mt-2 bg-[#444444] text-white border border-gray-600 rounded-md px-4 py-2"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-[#5956E9] hover:bg-[#4b48c2] text-white px-8 py-2 rounded-lg"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Thank You!</DialogTitle>
          </DialogHeader>
          <div className="text-center mt-4">
            <p className="text-lg text-gray-700">
              Your form has been submitted successfully.
            </p>
            <p className="mt-2 text-gray-500">We will get back to you soon!</p>
          </div>
          <DialogFooter>
            <DialogClose
              onClick={() => setIsDialogOpen(false)}
              className="bg-[#5956E9] hover:bg-[#4b48c2] text-white px-6 py-2 rounded-lg"
            >
              Close
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactUs;
