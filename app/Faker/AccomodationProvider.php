<?php

namespace App\Faker;
use Faker\Provider\Base;

class AccomodationProvider extends Base
{
    protected static $accomodations = [
        '1_1',
        '1_2',
        '1_2_and1',
        '1_3',
        '1_3_and1',
        '1_4',
    ];

    public function accomodation(): string
    {
        return static::randomElement(static::$accomodations);
    }
}