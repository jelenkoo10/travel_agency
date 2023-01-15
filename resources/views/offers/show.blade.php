@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <p class="car-name">{{$offer[0]->city}}, {{$offer[0]->country}}</p>
                <p class="car-name">Departure time: {{$offer[0]->departure_time}}</p>
                <a href="http://127.0.0.1:8000/offer/create">Add new offer</a>
            </div>
        </div>
    </div>
</div>
@endsection