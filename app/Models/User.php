<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'invite_token_hash',
        'invite_expires_at',
        'last_active_at',
    ];

    /** Dashboard roles, from most to least access. */
    public const ROLES = [
        'owner' => 'Owner',
        'editor' => 'Editor',
        'viewer' => 'Viewer',
    ];

    private const ROLE_RANK = ['viewer' => 1, 'editor' => 2, 'owner' => 3];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'invite_token_hash',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'invite_expires_at' => 'datetime',
        'last_active_at' => 'datetime',
    ];

    /** The site owner from config is always an owner, even before the role column is set. */
    public function effectiveRole(): string
    {
        if ($this->name === config('portfolio.admin_name') && $this->role !== 'owner') {
            return 'owner';
        }

        return array_key_exists((string) $this->role, self::ROLE_RANK) ? $this->role : 'viewer';
    }

    /** True when this user's role is at least $role (viewer < editor < owner). */
    public function hasRole(string $role): bool
    {
        return (self::ROLE_RANK[$this->effectiveRole()] ?? 0) >= (self::ROLE_RANK[$role] ?? 99);
    }

    public function isOwner(): bool
    {
        return $this->hasRole('owner');
    }

    public function canEdit(): bool
    {
        return $this->hasRole('editor');
    }

    public function isInvitePending(): bool
    {
        return $this->invite_token_hash !== null;
    }

    public function posts(){
        return $this->hasMany('App\Models\Post') ;
    }
}
