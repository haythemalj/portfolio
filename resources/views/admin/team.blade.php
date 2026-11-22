@extends('admin.layout')
@section('title', 'Team access')

@section('content')
<div class="page-head">
  <div>
    <h1>Team access</h1>
    <p>Share your dashboard with team members or friends. Each person gets their own login.</p>
  </div>
</div>

@if(session('invite'))
  @php $inv = session('invite'); $shareText = "Hi {$inv['name']}, here is your access to my portfolio dashboard. Open this link to choose your password: {$inv['link']}"; @endphp
  <div class="card" style="border-color:var(--line-red);margin-bottom:16px">
    <h2><span><i class="fa-solid fa-link" style="color:var(--red-2)"></i> Invite link for {{ $inv['name'] }}</span></h2>
    <p class="small muted" style="margin-bottom:10px">Send this private link to {{ $inv['name'] }}. It works once, expires in {{ $inviteDays }} days, and is shown only now. Create a new one any time.</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <input type="text" readonly value="{{ $inv['link'] }}" id="inviteLink" style="flex:1;min-width:220px;padding:10px 12px;background:#0f0f0f;border:1px solid rgba(255,255,255,.12);border-radius:10px;color:#fff;font:inherit;font-size:.85rem" onclick="this.select()">
      <button class="btn btn-primary" type="button" data-copy-target="inviteLink"><i class="fa-regular fa-copy"></i> Copy link</button>
      <a class="btn btn-ghost" href="https://wa.me/?text={{ rawurlencode($shareText) }}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Send on WhatsApp</a>
      <a class="btn btn-ghost" href="mailto:{{ $inv['email'] }}?subject={{ rawurlencode('Your access to my portfolio dashboard') }}&body={{ rawurlencode($shareText) }}"><i class="fa-solid fa-envelope"></i> Send by email</a>
    </div>
  </div>
@endif

<div class="grid g-main">
  <div class="table-wrap">
    <table class="table table-stack">
      <thead><tr><th>Person</th><th>Role</th><th>Status</th><th style="text-align:right">Actions</th></tr></thead>
      <tbody>
        @foreach($members as $member)
          @php $self = $member->id === auth()->id(); $locked = $self || $member->isOwner(); @endphp
          <tr>
            <td class="full">
              <div style="display:flex;gap:10px;align-items:center">
                <div class="avatar" style="width:32px;height:32px;font-size:.85rem">{{ mb_strtoupper(mb_substr($member->name, 0, 1)) }}</div>
                <div style="min-width:0"><div style="font-weight:600">{{ $member->name }} @if($self)<span class="small muted">(you)</span>@endif</div><div class="small muted ellipsis">{{ $member->email }}</div></div>
              </div>
            </td>
            <td data-label="Role">
              @if($locked)
                <span class="badge {{ $member->isOwner() ? 'b-red' : '' }}">{{ \App\Models\User::ROLES[$member->effectiveRole()] }}</span>
              @else
                <form method="POST" action="{{ route('admin.team.update', $member) }}">@csrf @method('PUT')
                  <select name="role" onchange="this.form.submit()" style="background:#0f0f0f;color:#fff;border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:5px 8px;font:inherit;font-size:.85rem" aria-label="Role for {{ $member->name }}">
                    <option value="editor" @selected($member->role === 'editor')>Editor</option>
                    <option value="viewer" @selected($member->role === 'viewer')>Viewer</option>
                  </select>
                </form>
              @endif
            </td>
            <td data-label="Status">
              @if($member->isInvitePending())
                @if($member->invite_expires_at && $member->invite_expires_at->isPast())
                  <span class="badge b-red">Invite expired</span>
                @else
                  <span class="badge b-amber">Invite sent</span>
                @endif
              @else
                <span class="small muted">{{ $member->last_active_at ? 'Active '.$member->last_active_at->diffForHumans() : 'Active' }}</span>
              @endif
            </td>
            <td data-label="Actions" style="text-align:right">
              @unless($locked)
                <div style="display:inline-flex;gap:6px">
                  <form method="POST" action="{{ route('admin.team.regenerate', $member) }}">@csrf<button class="btn btn-ghost btn-sm" type="submit" title="Create a new invite link (also lets them reset their password)"><i class="fa-solid fa-link"></i> {{ $member->isInvitePending() ? 'New link' : 'Reset link' }}</button></form>
                  <form method="POST" action="{{ route('admin.team.destroy', $member) }}" data-confirm="Remove {{ $member->name }}'s access to the dashboard?">@csrf @method('DELETE')<button class="icon-btn" type="submit" title="Remove access" aria-label="Remove {{ $member->name }}"><i class="fa-solid fa-user-minus"></i></button></form>
                </div>
              @endunless
            </td>
          </tr>
        @endforeach
      </tbody>
    </table>
  </div>

  <div class="form-row" style="align-content:start">
    <form class="card form-row" method="POST" action="{{ route('admin.team.store') }}">
      @csrf
      <h2 style="margin:0">Add a person</h2>
      <div class="field"><label for="m-name">Name</label><input id="m-name" type="text" name="name" value="{{ old('name') }}" required maxlength="80"></div>
      <div class="field"><label for="m-email">Email</label><input id="m-email" type="email" name="email" value="{{ old('email') }}" required maxlength="180"><div class="hint">They log in with this email.</div></div>
      <div class="field"><label for="m-role">Role</label>
        <select id="m-role" name="role">
          <option value="viewer" @selected(old('role') === 'viewer')>Viewer: can look, can't change anything</option>
          <option value="editor" @selected(old('role') === 'editor')>Editor: manages projects and messages</option>
        </select>
      </div>
      <button class="btn btn-primary" type="submit"><i class="fa-solid fa-user-plus"></i> Add and create invite link</button>
    </form>

    <div class="card">
      <h2>What each role can do</h2>
      <div class="list small">
        <div class="list-row"><span class="badge b-red">Owner</span><span class="grow">Everything, including team access. That's you.</span></div>
        <div class="list-row"><span class="badge">Editor</span><span class="grow">Add, edit, hide and reorder projects; read, mark and delete messages; see statistics.</span></div>
        <div class="list-row"><span class="badge">Viewer</span><span class="grow">See the dashboard, statistics, projects and messages, but change nothing.</span></div>
      </div>
    </div>
  </div>
</div>
@endsection

@push('scripts')
<script>
document.querySelectorAll('[data-copy-target]').forEach(b => b.addEventListener('click', async () => {
  const el = document.getElementById(b.dataset.copyTarget);
  try { await navigator.clipboard.writeText(el.value); } catch (e) { el.select(); document.execCommand('copy'); }
  b.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
}));
</script>
@endpush
