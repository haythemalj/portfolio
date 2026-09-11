@extends('admin.layout')
@section('title', 'Account Security')

@section('content')
<h1>Account Security</h1>
<p style="color:var(--muted);margin-bottom:24px">Change the password used to access your portfolio dashboard.</p>

<form method="POST" action="{{ route('admin.account.update') }}" style="max-width:560px">
    @csrf
    @method('PUT')
    <div class="form-group">
        <label for="current_password">Current password</label>
        <input id="current_password" type="password" name="current_password" required autocomplete="current-password">
        @error('current_password')<small style="color:#f87171">{{ $message }}</small>@enderror
    </div>
    <div class="form-group">
        <label for="password">New password</label>
        <input id="password" type="password" name="password" required autocomplete="new-password">
        @error('password')<small style="color:#f87171">{{ $message }}</small>@enderror
    </div>
    <div class="form-group">
        <label for="password_confirmation">Confirm new password</label>
        <input id="password_confirmation" type="password" name="password_confirmation" required autocomplete="new-password">
    </div>
    <button type="submit" class="btn">Update password</button>
</form>
@endsection
