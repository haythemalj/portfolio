<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessageMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        try {
            $validated = $request->validate([
            'name' => 'required|string|max:120',
            'email' => 'required|email|max:180',
            'subject' => 'required|string|max:200',
            'message' => 'required|string|max:5000',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            if ($request->expectsJson()) {
                return response()->json(['message' => $e->validator->errors()->first()], 422);
            }
            throw $e;
        }

        try {
            Mail::to(config('portfolio.contact_email'))
                ->send(new ContactMessageMail($validated));
        } catch (\Exception $e) {
            if ($request->expectsJson()) {
                return response()->json([
                    'message' => 'Email could not be sent. Configure SMTP in .env (Gmail app password).',
                ], 500);
            }
            return back()->withErrors(['email' => 'Could not send message. Check mail configuration.']);
        }

        if ($request->expectsJson()) {
            return response()->json(['success' => true, 'message' => 'Message sent successfully.']);
        }

        return back()->with('contact_success', 'Message sent successfully.');
    }
}
