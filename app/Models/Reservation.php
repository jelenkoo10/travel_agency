<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'traveler_name',
        'traveler_surname',
        'phone_number',
        'email',
        'payment',
        'num_of_travelers',
        'comment',
        'status',
        'offer_id',
    ];

    public function offer() {
        return $this->belongsTo(Offer::class, 'offer_id');
    }
}
