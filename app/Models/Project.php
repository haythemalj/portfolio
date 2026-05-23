<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'details',
        'image',
        'url',
        'github_url',
        'technologies',
        'category',
        'order',
        'featured',
    ];

    protected $casts = [
        'technologies' => 'array',
        'featured' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function scopeFeatured($query)
    {
        return $query->where('featured', true)->orderBy('order');
    }

    public function scopeActive($query)
    {
        return $query->orderBy('order');
    }
}
