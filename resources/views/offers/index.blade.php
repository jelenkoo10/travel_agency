@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @auth
            <a href="http://127.0.0.1:8000/offer/create">Add new offer</a>
        @endauth
        
        <div class="col-md-8">
            @unless ($offers->isEmpty())
                @foreach ($offers as $offer)
                    <div class="card">
                        <a href="http://127.0.0.1:8000/offer/{{ $offer->id }}">{{$offer->offer_name}}</a>
                        <p>{{$offer->city}}, {{$offer->country}} - {{$offer->num_of_days}}</p>
                        <p>Departure: {{$offer->departure_time}}</p>
                        <p>Price: {{$offer->price}}</p>
                        <p>Transport: {{$offer->transport}}</p>
                        @auth
                            <a href="http://127.0.0.1:8000/offer/{{$offer->id}}/update">Update offer</a>
                        @endauth
                    </div>
                @endforeach
            @endunless
            <div class="mt-6 p-4">
                {{$offers->links('pagination::bootstrap-4')}}
            </div>
        </div>
    </div>
</div>
@endsection
