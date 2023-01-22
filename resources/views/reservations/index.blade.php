@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        
        <div class="col-md-8">
            @unless ($reservations->isEmpty())
                @foreach ($reservations as $reservation)
                    <div class="card">
                        <a href="http://127.0.0.1:8000/reservation/{{ $reservation->id }}">
                            <p class="location">{{$reservation->traveler_name}}, {{$reservation->offer->city}}</p>
                            <a href="http://127.0.0.1:8000/reservation/{{$reservation->id}}/update">Update reservation</a>
                        </a>
                    </div>
                @endforeach
            @endunless
        </div>
    </div>
</div>
@endsection
