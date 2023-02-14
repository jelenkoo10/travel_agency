<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        "/reservation",
        "/login",
        "/reservations",
        "/search",
        "/user",
        "/user/*",
        "/search",
        "/getuser",
        "/offer",
        "/update/offer/*",
        "/show/users/*",
        "/res/update/*",
        "/update/user/*",
        "/photo/upload"
        //
    ];
}
