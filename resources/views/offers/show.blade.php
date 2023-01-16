@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <p class="car-name">{{$offer[0]->city}}, {{$offer[0]->country}}</p>
                <p class="car-name">Departure time: {{$offer[0]->departure_time}}</p>
                @auth
                    <a href="/offer/{{$id}}/update" class="text-sm text-gray-700 dark:text-gray-500 underline">Change arrangement</a>
                @else
                    <a href="/offer/{{$id}}/reservation" class="text-sm text-gray-700 dark:text-gray-500 underline">Create reservation</a>
                @endauth
            </div>
        </div>
    </div>
</div>
@endsection