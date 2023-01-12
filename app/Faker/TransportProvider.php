<?php

namespace App\Faker;
use Faker\Provider\Base;

class TransportProvider extends Base
{
    protected static $transports = [
        'bus',
        'plane',
        'cruise',
        'train',
        'own transport',
    ];

    public function transport(): string
    {
        return static::randomElement(static::$transports);
    }
}