<?php

namespace App\Faker;
use Faker\Provider\Base;

class ApartmentProvider extends Base
{
    protected static $apartments = [
        'hotel',
        'bungalow',
    ];

    public function apartment(): string
    {
        return static::randomElement(static::$apartments);
    }
}