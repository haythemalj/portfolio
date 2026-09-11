<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessageMail;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

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

        ContactMessage::create($validated);

        $mailSent = true;

        try {
            Mail::to(config('portfolio.contact_email'))
                ->send(new ContactMessageMail($validated));
        } catch (\Exception $e) {
            $mailSent = false;
            Log::warning('Contact message was saved, but email delivery failed.', [
                'recipient' => config('portfolio.contact_email'),
                'error' => $e->getMessage(),
            ]);
        }

        if ($request->expectsJson() || $request->ajax()) {
            return response()->json([
                'success' => true,
                'message' => $mailSent
                    ? 'Message sent successfully.'
                    : 'Message saved successfully. Email delivery is not configured yet.',
            ]);
        }

        return back()->with('contact_success', $mailSent
            ? 'Message sent successfully.'
            : 'Message saved successfully. Email delivery is not configured yet.');
    }
}
