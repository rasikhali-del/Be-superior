import React from "react";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Icon + Heading */}
        <div className="flex justify-center items-center mb-4 gap-2">
          <AlertCircle className="h-8 w-8 text-blue-600" aria-hidden="true" />
          <h1 className="text-2xl font-bold text-blue-900">
            404 - Page Not Found
          </h1>
        </div>

        {/* Message */}
        <p className="mt-2 text-blue-800/80">
          Oops! The page you’re looking for doesn’t exist or might have been moved.
        </p>
        <p className="text-blue-800/70 mt-1 text-sm">
          Please check the URL or return to the homepage.
        </p>

        {/* CTA Button */}
        <a href="/">
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Go Back Home
          </button>
        </a>
      </div>
    </div>
  );
}
