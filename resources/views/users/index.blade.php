@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <!-- <a href="http://127.0.0.1:8000/offer/create">Add new offer</a> -->
        <div class="col-md-8">
            <h1>Profile page</h1>
            <div class="card">
                <a href="http://127.0.0.1:8000/user/{{ $user->id }}">
                    <p class="location">{{$user->name}} {{$user->surname}}</p>
                </a>
            </div>
            @if (auth()->user()->role == 'admin')
                @unless ($users->isEmpty())
                    @foreach ($users as $single_user)
                        <p>{{$single_user->name}} {{$single_user->surname}}</p>
                    @endforeach
                @endunless
                <a href="http://127.0.0.1:8000/user/create">Add new Staff member</a>
                <a href="http://127.0.0.1:8000/reservations">All reservations</a>
            @endif
        </div>
    </div>
</div>
@endsection
