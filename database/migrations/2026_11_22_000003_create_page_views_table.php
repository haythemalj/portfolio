<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageViewsTable extends Migration
{
    /**
     * Privacy-friendly visitor statistics, stored on our own database.
     * No IP address is stored: visitor_hash is a daily-rotating hash, so the same
     * person can be counted once per day but never identified or followed.
     */
    public function up()
    {
        Schema::create('page_views', function (Blueprint $table) {
            $table->id();
            $table->string('kind', 20)->default('page'); // page | whatsapp
            $table->string('path', 255);
            $table->string('locale', 8)->nullable();      // page language: en, fr, ar, tr
            $table->string('translated', 10)->nullable(); // language picked in the auto-translate menu
            $table->string('referrer_host', 120)->nullable();
            $table->string('device', 10)->nullable();     // mobile | tablet | desktop
            $table->string('visitor_hash', 64);
            $table->unsignedInteger('duration_ms')->nullable();
            $table->unsignedSmallInteger('status')->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->index('created_at');
            $table->index(['kind', 'created_at']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('page_views');
    }
}
