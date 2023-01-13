<?php

namespace App\Faker;
use Faker\Provider\Base;

class RoleProvider extends Base
{
    protected static $roles = [
        'admin',
        'staff',
    ];

    public function role(): string
    {
        return static::randomElement(static::$roles);
    }
}