<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    protected $fillable = [
        'location',
        'transport',
        'apartment',
        'stars',
        'price',
        'departure_time',
        'arrival_time',
        'program',
        'images',
    ];
}
