<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageView extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'kind',
        'path',
        'locale',
        'translated',
        'referrer_host',
        'device',
        'visitor_hash',
        'duration_ms',
        'status',
        'created_at',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}
