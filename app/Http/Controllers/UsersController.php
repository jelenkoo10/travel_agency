<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index() {
        $user = auth()->user();
        return view('users.index', compact('user'));
    }
}
