<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller
{
    public function index() {
        $user = auth()->user();
        $users = User::where('id', '!=', auth()->id())->get();
        return view('users.index', compact('user', 'users'));
    }

    public function create() {
        return view('users.create');
    }
}
