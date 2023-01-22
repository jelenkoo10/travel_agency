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
        </div>
    </div>
</div>
@endsection
