@extends('admin.layout')
@section('title', 'Settings')

@section('content')
<div class="page-head">
  <div>
    <h1>Settings</h1>
    <p>Your profile and password.</p>
  </div>
</div>

<div class="grid g-2">
  <form class="card form-row" method="POST" action="{{ route('admin.account.profile') }}" style="align-content:start">
    @csrf @method('PUT')
    <h2 style="margin:0">Profile</h2>
    <div class="field"><label for="name">Name</label><input id="name" type="text" name="name" value="{{ old('name', $user->name) }}" maxlength="80" @disabled($isMainAdmin)></div>
    <div class="field"><label for="email">Email (used to log in)</label><input id="email" type="email" name="email" value="{{ old('email', $user->email) }}" maxlength="180" @disabled($isMainAdmin)></div>
    <div class="field"><label>Role</label><input type="text" value="{{ \App\Models\User::ROLES[$user->effectiveRole()] }}" disabled></div>
    @if($isMainAdmin)
      <p class="small muted">This is the main admin account. Its name and email come from your hosting settings (<code>ADMIN_NAME</code> and <code>ADMIN_EMAIL</code> on Render), so they're changed there.</p>
    @else
      <button class="btn btn-primary" type="submit" style="justify-self:start"><i class="fa-solid fa-floppy-disk"></i> Save profile</button>
    @endif
  </form>

  <form class="card form-row" method="POST" action="{{ route('admin.account.update') }}" style="align-content:start">
    @csrf @method('PUT')
    <h2 style="margin:0">Change password</h2>
    @if($passwordResetsOnDeploy)
      <div class="alert alert-warn" style="margin:0"><i class="fa-solid fa-triangle-exclamation"></i> <code>ADMIN_PASSWORD</code> is set in your hosting settings, so every site update resets this account's password to that value. To keep a password changed here, remove <code>ADMIN_PASSWORD</code> from Render's environment settings.</div>
    @endif
    <div class="field"><label for="current_password">Current password</label><input id="current_password" type="password" name="current_password" required autocomplete="current-password"></div>
    <div class="field"><label for="password">New password</label><input id="password" type="password" name="password" required minlength="8" autocomplete="new-password"><div class="hint">At least 8 characters.</div></div>
    <div class="field"><label for="password_confirmation">Repeat new password</label><input id="password_confirmation" type="password" name="password_confirmation" required minlength="8" autocomplete="new-password"></div>
    <button class="btn btn-primary" type="submit" style="justify-self:start"><i class="fa-solid fa-key"></i> Update password</button>
  </form>
</div>
@endsection
